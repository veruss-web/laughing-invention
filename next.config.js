/** @type {import('next').NextConfig} */
const nextConfig = {
  // Release builds must pass TypeScript. Runtime Supabase errors are handled in the app.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
