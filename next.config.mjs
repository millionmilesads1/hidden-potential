/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/books",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
