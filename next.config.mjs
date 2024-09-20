// import {PrettyCodeOptions} from 'rehype-pretty-code/types';

/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//     pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
//     // output: isProd? 'export': 'standalone',
//     // distDir: isProd? "out": ".next",
//     webpack: config => {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: ["@svgr/webpack"],
//         });

//         return config;
//     },
//     transpilePackages: ['next-mdx-remote']
// };
// if(isProd){
//     nextConfig.output = 'export'
//     nextConfig.distDir = 'out'
// }


// export default nextConfig;

import { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } from "next/constants.js"

const nextConfig = (phase, { defaultConfig }) => {
  const baseconfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
    
  }
  if (phase === PHASE_PRODUCTION_BUILD | phase === PHASE_EXPORT) {
    console.log("This is Deployment Server!")
    baseconfig["output"] = "export"
    baseconfig['images'] = {
      deviceSizes: [180, 640, 750, 828, 900, 1080, 1200, 1920, 2048, 3840],
      loader: 'custom',
      loaderFile: "./imageLoader.js",
    }
  }
  return baseconfig
};

export default nextConfig;