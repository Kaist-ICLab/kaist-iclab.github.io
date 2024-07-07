import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostProp } from '@/types/post'

export const readMDFileByPath = (filepath: string): PostProp => {
    const src = fs.readFileSync(filepath, 'utf-8')
    const {data, content} = matter(src)
    return {
        ...data,
        content,
        // filepath,
        id: path.basename(filepath.replace(/\.(mdx|md)$/, ''))
    } as PostProp
}

export const readMDXDir = (path: string): PostProp[] => {
    const files = fs.readdirSync(path)
    return files.map((file) => (readMDFileByPath(`${path}/${file}`)))
        .filter((post) => (post.publish))
}

