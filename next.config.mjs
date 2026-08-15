/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately (npm run lint) / in CI; don't let it block `next build`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
