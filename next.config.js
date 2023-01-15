/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // config svg files
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(ts)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: { plugins: [{ removeViewBox: false }] },
          },
        },
      ],
    })

    return config
  }
}

module.exports = nextConfig
