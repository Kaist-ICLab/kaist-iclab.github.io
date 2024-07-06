import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const readMDFileByPath = (filepath: string): Record<string, any> => {
    const src = fs.readFileSync(filepath, 'utf-8')
    const {data, content} = matter(src)
    return {
        ...data,
        content,
        // filepath,
        id: path.basename(filepath.replace(/\.(mdx|md)$/, ''))
    }
}

export const readMDXDir = (path: string): Record<string,any>[] => {
    const files = fs.readdirSync(path)
    return files.map((file) => (readMDFileByPath(`${path}/${file}`)))
}

