import { PostProp } from "@/components/Post";
import { readMDXDir } from "@/utils/file";

const posts = readMDXDir('data/posts') as PostProp[];

export default posts;