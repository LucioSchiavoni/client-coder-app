/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "https://server-coder-app-production.up.railway.app/"
  }

}

module.exports = nextConfig;