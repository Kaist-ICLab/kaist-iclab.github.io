import MDX from '@/components/MDX';
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
    return (<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <article className="px-4 mx-auto max-w-screen-xl">
            <header className="mb-4 lg:mb-6">
                <address className="not-format flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                            <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                            <p className="text-base text-gray-500 dark:text-gray-400"><time>Feb. 8, 2022</time></p>
                        </div>
                    </div>
                </address>
            </header>
            <div className='max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
                <h1>Best practices for successful prototypes</h1>
                <MDX source={post} />
            </div>
        </article>
    </main>)
}
export default Page;