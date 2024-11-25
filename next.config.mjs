/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.ogalandlords.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
