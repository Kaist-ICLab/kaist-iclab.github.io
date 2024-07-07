import Lecture from "@/components/Lecture";
import lectures from "../../../data/lectures";

const Lectures: React.FC = () => {
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
      <h2>Lectures</h2>
      <div className="w-full max-w-screen-xl flex flex-col">
        <h3>Main Lectures</h3>
        {lectures.filter((lecture) => (lecture.type === "Main")).map((lecture) => (
          <Lecture key={lecture.code} {...lecture} />
        ))}
      </div>
      <div className="mt-20 w-full flex flex-col items-center sm:items-start">
        <h3>Special Lectures</h3>
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