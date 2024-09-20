// import {PrettyCodeOptions} from 'rehype-pretty-code/types';

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
    // output: isProd? 'export': 'standalone',
    // distDir: isProd? "out": ".next",
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    transpilePackages: ['next-mdx-remote']
};
if(isProd){
    nextConfig.output = 'export'
    nextConfig.distDir = 'out'
}


export default nextConfig;
