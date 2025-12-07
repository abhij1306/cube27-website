/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cube27-website',
  assetPrefix: '/cube27-website/',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
