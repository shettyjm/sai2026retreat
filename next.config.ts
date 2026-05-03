import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "region7saicenters.org",
        pathname: "/region7new/retreat/**",
      },
    ],
  },
};

export default nextConfig;
