/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'tecnik.pages.dev',
      'play.vsthemes.org',
      'www.svgrepo.com',
      'media.giphy.com'
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://instant.page https://chromedino.com https://*.hearthis.at https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://*.hearthis.at; connect-src 'self' https://chromedino.com https://*.hearthis.at https://cdn.jsdelivr.net https://tecnik.bio.link; img-src 'self' https://www.svgrepo.com https://play.vsthemes.org https://media.giphy.com https://tecnik.pages.dev; frame-ancestors 'self' https://chromedino.com https://*.chromedino.com https://*.hearthis.at; media-src 'self' https://tecnik.pages.dev; frame-src 'self' https://chromedino.com https://*.hearthis.at;"
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade'
          },
          {
            key: 'Permissions-Policy',
            value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
          },
          {
            key: 'Cache-Control',
            value: 'max-age=604800'
          }
        ]
      }
    ]
  }
}

export default nextConfig
