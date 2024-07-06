import MDX from '@/components/MDX';
import { readMDFileByPath, readMDXDir } from '@/utils/file';

export async function generateStaticParams() {
    const posts = readMDXDir('data/projects/')
    return posts.map((post) => ({
        params: {
            slug: post.id,
        },
        post
    }))
}


const Page: React.FC<{ params: { slug: string }, post: Record<string, any> }> = ({ params, post }) => {
    const md = readMDFileByPath(`data/projects/${params.slug}.mdx`)
    return (<article className="max-w-screen-xl w-full m-auto">
        <MDX source={md.content} />
    </article>)
}
export default Page;