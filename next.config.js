/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: process.env.IMG_HOSTNAME,
            },
        ],
    },
};

module.exports = nextConfig;
