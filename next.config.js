/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
			'/category/js': {
				page: '/category/[category]',
			},
		};
	},
	trailingSlash: true,
};

module.exports = nextConfig;
