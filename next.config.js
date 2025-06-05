/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'wedding-site';

const nextConfig = {
  output: 'export',

  basePath: isProd ? `/${repoName}` : '',
  
  assetPrefix: isProd ? `/${repoName}/` : '',

  images: { unoptimized: true },
};

module.exports = nextConfig;
