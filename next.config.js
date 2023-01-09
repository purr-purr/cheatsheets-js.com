/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		additionalData: `@import "@styles/resources.scss";`,
	},
	compiler: {
		styledComponents: true,
	},
};
module.exports = nextConfig;
