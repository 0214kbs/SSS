/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  compiler: {
    styledComponents: true, // Next에게 styled-component도 처리해달라고 옵션을 설정해줌
    removeConsole: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new (require('webpack').NoEmitOnErrorsPlugin)());
    }
    return config;
  },
};
module.exports = nextConfig;
