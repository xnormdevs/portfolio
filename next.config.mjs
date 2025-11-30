import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    basePath: "/portfolio",             // <-- replace "portfolio" with your repo name
    assetPrefix: "/portfolio/",         // <-- same here
    pageExtensions: ["js","jsx","ts","tsx","md","mdx"],
    experimental: { mdxRs: true },
};

export default withContentlayer(nextConfig);
