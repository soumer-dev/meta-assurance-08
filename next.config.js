/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src", "app", "components"],
  },
};

export default nextConfig;
