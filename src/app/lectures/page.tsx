import Lecture from "@/components/Lecture";
import MainContent from "@/components/Main";
import lectures from "@data/lectures";

const Lectures: React.FC = () => {
  return (
    <MainContent>
      <div className="flex flex-col gap-12 items-center">
        <h2>Lectures</h2>
        <div className="w-full flex flex-col">
          <h3>Main Lectures</h3>
          {lectures.map((lecture) => (
            <Lecture key={lecture.code} {...lecture} />
          ))}
        </div>
      </div>
    </MainContent>

  );
}

export default Lectures;