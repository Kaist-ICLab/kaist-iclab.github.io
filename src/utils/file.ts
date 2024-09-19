import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostProp } from '@/types/post'
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import stripMarkdown from 'strip-markdown';

const markdown2Text = (content: string): string => {
    const file = unified()
        .use(remarkParse)      // Parse the Markdown content
        .use(stripMarkdown)    // Strip away Markdown formatting
        .use(remarkStringify)  // Convert the processed content to a string
        .processSync(content);
    return String(file);
}

export const readMDFileByPath = (filepath: string): PostProp => {
    const src = fs.readFileSync(filepath, 'utf-8')
    const { data, content } = matter(src)

    return {
        ...data,
        content,
        text: markdown2Text(content),
        // filepath,
        id: path.basename(filepath.replace(/\.(mdx|md)$/, ''))
    } as PostProp
}

export const readMDXDir = (path: string): PostProp[] => {
    const files = fs.readdirSync(path)
    return files.map((file) => (readMDFileByPath(`${path}/${file}`)))
        .filter((post) => (post.publish))
        .sort((a, b) => (new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()))
}


