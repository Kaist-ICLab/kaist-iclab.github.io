import Post from "@/components/Post";
import { readMDXDir } from "@/utils/file";

const Posts: React.FC = () => {
  const posts = readMDXDir("data/posts")
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
        {posts.map((post,idx) => <Post key={`post-${idx}`} {...post} />)}
    </div>
  );
}

export default Posts