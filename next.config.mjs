// import {PrettyCodeOptions} from 'rehype-pretty-code/types';
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    output: 'export',
    distDir: "out",
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    transpilePackages: ['next-mdx-remote']
};

export default nextConfig;
