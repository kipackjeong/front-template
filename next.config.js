/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    // ...
  ],

  //#region DB setup config
  serverRuntimeConfig: {
    connectionString: process.env.MONGO_DB || "",
    secret: process.env.SECRET || "localsecret",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  //#endregion

  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
