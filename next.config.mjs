/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/cube27-website' : '',
  assetPrefix: isProd ? '/cube27-website/' : '',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
