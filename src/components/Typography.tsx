
interface TypographyProps {
    children: React.ReactNode
}

const H1: React.FC<TypographyProps> = ({ children }) => {
    return <h1 className="text-5xl font-extrabold dark:text-white">
        {children}
    </h1>
}

const H2: React.FC<TypographyProps> = ({ children }) => {
    return <h2 className="text-4xl font-bold dark:text-white">
        {children}
    </h2>
}

const H3: React.FC<TypographyProps> = ({ children }) => {
    return <h3 className="text-3xl font-bold dark:text-white">
        {children}
    </h3>
}

const H4: React.FC<TypographyProps> = ({ children }) => {
    return <h4 className="text-2xl font-bold dark:text-white">
        {children}
    </h4>
}

const H5: React.FC<TypographyProps> = ({ children }) => {
    return <h5 className="text-xl font-bold dark:text-white">{children}</h5>
}

const H6: React.FC<TypographyProps> = ({ children }) => {
    return <h6 className="text-lg font-bold dark:text-white">{children}</h6>
}

const P: React.FC<TypographyProps> = ({ children }) => {
    return <p className="text-gray-500 dark:text-gray-400">{children}</p>
}

interface LinkProps extends TypographyProps {
    href: string;
}
const Link: React.FC<LinkProps> = ({ href, children }) => {
    return <a href={href} className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">
        {children}
    </a>
}

const Strong: React.FC<TypographyProps> = ({ children }) => {
    return <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
}

const U: React.FC<TypographyProps> = ({ children }) => {
    return <u className="underline">{children}</u>
}

const Em: React.FC<TypographyProps> = ({ children }) => {
    return <em className="font-italic">{children}</em>
}

const CustomImage: React.FC<{ src: string, caption: string }> = ({ src, caption }) => {
    return <figure className="max-w-lg">
        <img className="h-auto max-w-full rounded-lg" src={src} alt={caption}/>
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{caption}</figcaption>
    </figure>
}

const Ul: React.FC<TypographyProps> = ({ children }) => {
    return <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">{children}</ul>
}

const Ol: React.FC<TypographyProps> = ({ children }) => {
    return <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">{children}</ol>
}

export { H1, H2, H3, H4, H5, H6, P, Link, Strong, U, Em, CustomImage, Ul, Ol}