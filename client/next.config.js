/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // typescript: {

  //   ignoreBuildErrors: true,
  // },
  // eslint: {

  //   ignoreDuringBuilds: true,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig
