import Publication from "@/components/Publication";
import { getYears } from "@/utils/process";
import publications from "@data/publications";

const Publications: React.FC = () =>  {
  const years = getYears()
  return (
    <div className="max-w-screen-xl pt-8 pb-16 lg:pt-16 lg:pb-24 w-full m-auto flex flex-col items-center">
      <h2>Publications</h2>
      <div className="w-full flex flex-col gap-12">
        {years.map((year) => {
          const filteredPublications = Object.values(publications).filter((publication) => publication.year === year)
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
    </div>
  );
}

export default Publications