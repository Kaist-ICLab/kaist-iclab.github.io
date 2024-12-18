import MDX from '@/components/MDX';
import Member from '@/components/Member';
import Writer from '@/OLDS/Writer';
import { readMDFileByPath, readMDXDir } from '@/utils/file';
import members from '@data/members';

export async function generateStaticParams() {
    const posts = readMDXDir('data/projects/')
    return posts.map((post) => ({
        params: {
            slug: post.id,
        }
    }))
}


const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
    const md = readMDFileByPath(`data/projects/${params.slug}.mdx`)
    return (<article className="max-w-screen-xl w-full m-auto">
        <h1>{md.title}</h1>
        <MDX source={md.content} />
    </article>)
}
export default Page;