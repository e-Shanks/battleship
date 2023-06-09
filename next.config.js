import('next').NextConfig

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'https://battleship-api.000webhostapp.com/:path*'
      }
    ]
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig