/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		additionalData: `@import "@styles/resources.scss";`,
	},
	compiler: {
		styledComponents: true,
	},
	images: {
		unoptimized: true
	}
};
module.exports = nextConfig;
