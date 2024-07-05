"use client"
import Pagination from "@/components/Pagination";
import Post, { PostProp } from "@/components/Post";
import { useState } from "react";

const Posts: React.FC = () => {
  const nPage = 10;
  const [page, setPage] = useState(1);
  const posts: PostProp[] = [{}]
  const currentPagePosts = (page: number, index: number) => (index >= (page - 1) * nPage && index < page * nPage)
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
        {posts.filter((_, idx) => currentPagePosts(page, idx)).map((post) =>
          <Post key={`post-idx`} {...post} />
        )}
        <Pagination totalPages={Math.floor((posts.length-1)/nPage+1)} onPageChange={setPage} currentPage={page}/>
    </div>
  );
}

export default Posts