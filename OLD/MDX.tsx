import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import { MDXComponents } from 'mdx/types';
import Image from 'next/image';

const MDX: React.FC<{ source: string }> = ({ source }) => {
    const config: MDXRemoteProps = {
        source,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [
                    remarkMath,
                    remarkGfm
                ],
                rehypePlugins: [
                    [rehypePrettyCode, {}],
                    rehypeSlug,
                    rehypeAutolinkHeadings,
                    rehypeKatex
                ]
            }
        }
    }
    const components: MDXComponents = {
        img: (props) => <div className="relative flex justify-center my-6 max-w-full">
            <Image className="w-full h-auto" src={props.src ?? ""} alt={props.alt ?? ""} width={300} height={300} />
        </div>
    }
    return (
        <MDXRemote {...config} source={source} components={components} />
    );
};

export default MDX;