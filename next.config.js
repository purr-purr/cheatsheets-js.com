/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        additionalData: `@import "@styles/resources.scss";`
    },
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true
    },
    exportPathMap: async function () {
        return {
            '/': {page: '/'},
            '/category/js': {
                page: '/category/[category]'
            }
        }
    },
    trailingSlash: true
};
module.exports = nextConfig;
