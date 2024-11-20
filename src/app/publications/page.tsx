import Link from "@/components/Link";
import MainContent from "@/components/Main";
import publications, { PublicationInfo, publicationYears } from "@data/publications";

const Publication: React.FC<PublicationInfo> = (publication) => {
  return (
    <div className="not-format w-full max-w-screen-xl flex flex-col">
      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{publication.title}</h3>
      <p className="text-sm leading-7 text-gray-600">{publication.authors}</p>
      <p className="italic text-base leading-7 text-gray-600">{publication.venue + (publication.published ? "" : " (To be appear)")}</p>
      <div className="flex mt-1">
        {[[publication.supplementary.paper, "paper", "blue"],
        [publication.supplementary.slide, "slide", "yellow"],
        [publication.supplementary.code, "code", "gray"],
        [publication.supplementary.video, "video", "red"]].map(([link, type, color]) => (
          link && <Link href={link} newpage key={type} className={`bg-${color}-100 text-${color}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>
            {type}
          </Link>
        ))}
      </div>
    </div>
  )
}

const Publications: React.FC = () => (
  <MainContent>
    <h2>Publications</h2>
    <div className="w-full flex flex-col gap-12">
      {publicationYears.map((year) => {
        const filteredPublications = Object.values(publications)
          .filter((publication) => Number(publication.date.split("-")[0]) === year)
          .sort((a,b) => Number(b.date.split("-")[1]) - Number(a.date.split("-")[1]));
        if (filteredPublications.length === 0) return null;
        return <div key={year} className="mt-6 self-center w-full max-w-screen-xl flex flex-col items-start gap-4">
          <h3>{year}</h3>
          <div className="w-full flex flex-col gap-8">
            {
              filteredPublications.map((publication, index) => <Publication key={index} {...publication} />)
            }
          </div>
        </div>
      })}
    </div>
  </MainContent>
)

export default Publications