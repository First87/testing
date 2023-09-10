/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'], // เพิ่มโดเมนของ Google Drive ที่นี่
  },
}

module.exports = nextConfig
