import Lecture from "@/components/Lecture";
import lectures from "../../../data/lectures";

const Lectures: React.FC = () => {
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-32 items-center sm:items-start">
      <div className="w-full max-w-screen-xl flex flex-col">
        <h2>Main Lectures</h2>
        {lectures.filter((lecture) => (lecture.type === "Main")).map((lecture) => (
          <Lecture key={lecture.code} {...lecture} />
        ))}
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <h2>Special Lectures</h2>
        {
          lectures.filter((lecture) => (lecture.type !== "Main")).map((lecture) => (
            <Lecture key={lecture.code} {...lecture} />
          ))
        }
      </div>
    </div>
  );
}

export default Lectures;