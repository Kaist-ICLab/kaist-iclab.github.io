import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';

const MDX: React.FC<{source: string}> = ({ source }) => {
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
                    [rehypePrettyCode, { }],
                    rehypeSlug,
                    rehypeAutolinkHeadings,
                    rehypeKatex
                ]
            }
        }
    }
    return (
        <MDXRemote {...config} source={source}/>
    );
};

export default MDX;