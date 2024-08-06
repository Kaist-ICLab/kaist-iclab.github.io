import { PostProp } from "@/types/post";

const Post: React.FC<PostProp> = (post) => {
    return (
        <div className="not-format no-underline hover:no-underline gap-8 mx-auto max-w-screen-xl w-full flex flex-col lg:flex-row lg:items-center">
            <a href={`/posts/${post.id}`} className="h-[240px] basis-[300px] shrink-0 rounded-lg shadow" >
                <img className="object-contain w-full h-full" src={post.image} alt="" />
            </a>
            <div>
                <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">{post.created}</div>
                <a href={`/posts/${post.id}`}>
                    <h3 className="text-lg font-bold leading-5 text-gray-900 dark:text-white lg:mt-3">
                        {post.title}
                    </h3>
                </a>
                <div className="mt-3 p-0.1 flex flex-row gap-3">
                    {post.tags?.map((tag: string) => (
                        <div key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {tag}
                        </div>
                    ))}
                </div>
                <p className="text-base font-normal text-gray-500 eCx_6PNzncAD5yo7Qcic mt-3 line-clamp-2">
                    {post.text}
                </p>
                <a href={`/posts/${post.id}`} className="mt-3 block text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                    Read more →
                </a>
            </div>
        </div>
    )
}

export default Post