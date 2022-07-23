// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: '/crisp',
  basePath: !debug ? "/stint" : "",
};
