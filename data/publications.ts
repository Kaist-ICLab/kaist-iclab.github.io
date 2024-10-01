import fs from "fs";
import Cite from 'citation-js';

export interface PublicationSupplementaryInfo {
    paper: string;
    slide?: string;
    video?: string;
    code?: string;
}

export interface PublicationInfo {
    title: string;
    venue: string;
    authors: string;
    date: string;
    published: boolean;
    supplementary: PublicationSupplementaryInfo;
}

const supplementaries: {
    [key: string]: {
        video?: string;
        code?: string;
    }
} = {
    park2023charlie: {
        video: 'https://youtu.be/sNRkhhgoEHI',
    },
    park2023quickref: {
        video: 'https://youtu.be/SH8Ac7DGWRU',
    },
    han2022stressbal: {
        video: 'https://docs.google.com/presentation/d/1vNkznJx4q5KoOaxMKlzQI5P4IN_leSYscdkZ2WX-KN8/edit?usp=sharing',
    },
    choi2022you: {
        video: 'https://youtu.be/u_lSLpPVbFg',
    },
    kim2022social: {
        video: 'https://youtu.be/Ohd-YyQ8tl4',
    },
    jung2022caremouse: {
        video: 'https://www.youtube.com/watch?v=lUj4s3ITmxs',
    },
    kang2022understanding: {
        video: 'https://youtu.be/CCw1uEOuhZM',
    },
    jung2021good: {
        video: 'https://www.youtube.com/watch?v=mxMoqi58A4I&feature=youtu.be',
    },
    lee2021sticky: {
        video: 'https://www.youtube.com/watch?v=mSCXgOceCpA&ab_channel=ACMSIGCHI',
    },
    park2021goldentime: {
        video: 'https://www.youtube.com/watch?v=oVSeVFfBhQE',
    },
    cha2020hello: {
        video: 'https://www.youtube.com/watch?v=AA8CTi2hEf0',
    },
    shin2019slow: {

        video: 'https://www.youtube.com/watch?v=0iQ6hzU_ct0',
    },
    kang2019fire: {
        video: 'https://youtu.be/yLNF0-S5aLE',
    },
    park2018interaction: {
        video: 'https://drive.google.com/file/d/1S4_C4uozwrfX9yvtBXcCj7u0y33LHzHU/view?usp=sharing',
    },

    kim2017let: {
        video: 'https://www.youtube.com/watch?v=orm1dFj3RY0',
    },

    choi2016swimtrain: {
        video: "https://youtu.be/AmVvpktm0QY",
    },

    ko2016makes: {
        code: 'https://zenodo.org/record/34939#.Vnt0dRWLTcu',
    },
    ko2016understanding: {
        code: 'https://zenodo.org/record/34939#.Vnt0dRWLTcu',
    },
}


const bib = fs.readFileSync('data/publication.bib', 'utf8');
const cites = new Cite(bib);

const parseAuthors = (authors: any): string => {
    let author = authors.map((a: any) => (a.given?? "") + " " + (a.family?? ""));
    if(author.length > 2) {
        author[author.length - 1] = "and " + author[author.length - 1]
    } else if(authors.length === 2) {
        author = [author[0] + " and " + author[1]]
    }
    author = author.join(", ");
    return author;
} 

const parseVenue = (entry: any): string => {
    if(entry["type"] === "article-journal") {
        return `${entry['container-title']} Volume ${entry.volume}, Issue ${entry.issue}`;
    }
    else if(entry["type"] === "paper-conference") {
        return `${entry["container-title"]}` + (entry["collection-title"]? ` (${entry["collection-title"]})`: "");
    }
    return entry["container-title"];
}

const parseDate = (entry: any): string => {
    const date = entry.issued["date-parts"][0].join("-")
    return date
}

const data = cites.get().map((entry: any) => {
    const key = entry["citation-key"]
    const authors = parseAuthors(entry.author)
    const venue = parseVenue(entry)
    const date = parseDate(entry);

    
    const ret =  [key, {
        title: entry.title,
        authors,
        venue,
        date
    }]
    return ret
})


const publications: {
    [key: string]: PublicationInfo;
} = Object.fromEntries(data.map(([key, { title, authors, venue, date}]: [string, { title: string, authors: string, venue: string, date: string }]) => {
    return [key, {
        title,
        venue,
        authors,
        date,
        published: true,
        supplementary: {
            paper: fs.existsSync(`public/publications/papers/${key}.pdf`)? `${key}.pdf`: undefined,
            slide: fs.existsSync(`public/publications/slides/${key}.pdf`)? `${key}.pdf`: undefined,
            video: supplementaries[key]?.video,
            code: supplementaries[key]?.code,
        }
    }]
}).sort((a:any, b:any) => Number(b[1].date.split("-")[0]) - Number(a[1].date.split("-")[0])))

// For debugging
// fs.writeFileSync('raw.json', JSON.stringify(cites.get(), null, 2));
// fs.writeFileSync('publications.json', JSON.stringify(publications, null, 2));

const currentYear = new Date().getFullYear();
export const publicationYears = Array.from({ length: currentYear - 2000 + 1 }, (_, index) => currentYear - index);

export default publications;
