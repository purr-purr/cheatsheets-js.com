/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
			'/category/js': {
				page: '/category/[category]',
			},
			'/404': { page: '/404' },
		};
	},
};

module.exports = nextConfig;
