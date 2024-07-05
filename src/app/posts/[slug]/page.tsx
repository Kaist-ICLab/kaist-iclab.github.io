import MDX from '@/components/MDX';
import Writer from '@/components/Writer';
import fs from 'fs'

export async function generateStaticParams() {
    const posts = fs.readdirSync("src/data/posts").map((slug) => slug.replace(/\.md?$/, ""));

    return posts.map((post) => ({
        slug: post
    }))
}

const getFile = (filePath: string): string => {
    return fs.readFileSync(filePath, 'utf-8')
}

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
    const post = getFile(`src/data/posts/${params.slug}.md`);
    return (<article className="mx-auto max-w-screen-xl">
        <header className="mb-4 lg:mb-6">
            <Writer name="UichinLee" />
        </header>
        <div className='max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <h1>Best practices for successful prototypes</h1>
            <MDX source={post} />
        </div>
    </article>)
}
export default Page;