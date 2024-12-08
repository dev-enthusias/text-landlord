/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ogalandlords.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
