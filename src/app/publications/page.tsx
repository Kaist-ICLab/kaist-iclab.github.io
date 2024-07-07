import Publication from "@/components/Publication";
import publications from "@data/publications";

const Publications: React.FC = () =>  {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2010 + 1 }, (_, index) => currentYear - index);
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col items-center">
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