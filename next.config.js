/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "@styles/resources.scss";`,
  },
}
module.exports = nextConfig
