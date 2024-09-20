import MDX from '@/components/MDX';
import Writer from '@/OLDS/Writer';
import { readMDFileByPath, readMDXDir } from '@/utils/file';

export async function generateStaticParams() {
    const posts = readMDXDir('data/posts/')

    return posts.map((post) => ({
        slug: post.id
    }))
}

const Page: React.FC<{ params: { slug: string }}> = ({ params }) => {
    const post = readMDFileByPath(`data/posts/${params.slug}.mdx`)
    return (<article className="mx-auto max-w-screen-xl">
        <header className="mb-4 lg:mb-6">
            <h1>{post.title}</h1>
            <Writer name={post.writer} />
        </header>
        <hr className="not-format h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div className='max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <MDX source={post.content} />
        </div>
    </article>)
}

export default Page;