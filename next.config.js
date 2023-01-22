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
    distDir: "_next",
    generateBuildId: async () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${day}-${month}-${year}`;
    },
};
module.exports = nextConfig;
