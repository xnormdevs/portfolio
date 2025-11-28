export type Project = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  published: boolean;
  url?: string;
  video?: string;
  tech?: string[];
  repository?: string;
  content?: string;
};

export const projects: Project[] = [
    {
        slug: "idilio",
        title: "Idilio",
        description:
            "A modern interior design and management platform built with React, Spring Boot, and Tailwind CSS.",
        date: "2024-10-01",
        published: true,
        url: "https://idilio-design.web.app",
        repository: "",
        video: "https://www.loom.com/share/f6f677c159c44fb39ea6fead6553de14",
        tech: ["React.js", "Spring Boot", "TailwindCSS", "MySQL"],
        content: `
Idilio is a graphic design management platform crafted to help designers streamline their workflow and clients explore design concepts effortlessly.

The frontend, built with React and TailwindCSS, delivers a clean and responsive user experience, while Spring Boot powers the backend with secure API handling and smooth data operations. MySQL ensures reliable and structured data storage for user interactions, projects, and design elements.

This project demonstrates a strong combination of UI/UX, full-stack engineering, and system architecture. The platform is optimized for speed, scalability, and seamless cross-device usage, allowing users to explore digital design inspirations and manage design tasks in real time.
    `,
    },

    {
        slug: "liberbin",
        title: "Liberbin ",
        description:
            "A fast, modern content-sharing ecosystem powered by Next.js, Sanity CMS, and Netlify.",
        date: "2024-07-22",
        published: true,
        url: "https://liberbin.netlify.app/",
        repository: "",
        video: "https://www.loom.com/share/b1b75210263d4ea38cc32250466016ba",
        tech: ["Sanity", "Next.js", "Netlify", "Firebase"],
        content: `
Liberbin is a lightweight and efficient document publishing platform designed for creators, developers, and teams who want to share content quickly and professionally.

Built using Next.js and powered by Sanity CMS, the platform offers a smooth, real-time content editing and publishing experience. Firebase is used for authentication and data storage tasks, while Netlify handles the blazing-fast deployment pipeline.

Liberbin demonstrates strong knowledge in headless CMS systems, secure content workflows, serverless architecture, and scalable static hosting. It’s designed for simplicity, speed, and reliability—making content sharing effortless.
    `,
    },

    {
        slug: "toolgenie-app",
        title: "ToolGenie AI ",
        description:
            "An advanced AI-powered content creation platform integrating OpenAPI, Ideogram, and multiple modern cloud technologies.",
        date: "2024-12-10",
        published: true,
        url: "https://app.toolgenie.io/",
        repository: "",
        video: "https://www.loom.com/share/b7cfa50b781246e78ea50a9fc793641c",
        tech: ["OpenAPI", "Ideogram", "Next.js", "Clerk", "NeonDB", "Vercel SDK"],
        content: `
ToolGenie App is a production-grade AI content creation platform designed for digital creators, marketers, and businesses. It integrates multiple AI engines and APIs to deliver intelligent content, image generation, optimization tools, and workflow automation.

Powered by Next.js and the Vercel SDK, the platform is highly scalable and optimized for performance. Clerk handles secure authentication and user management, while NeonDB ensures high-performance serverless database querying. Ideogram and OpenAPI integrations enable users to generate professional-grade content and media assets.

This project showcases advanced architecture, multi-API integration, database optimization, and enterprise-level UI/UX engineering—making it one of the most robust creative tools in the AI ecosystem.
    `,
    },

    {
        slug: "toolgenie-website",
        title: "ToolGenie Landing Page",
        description:
            "A sleek, modern landing site for ToolGenie, built for speed, SEO, and brand presence.",
        date: "2024-11-15",
        published: true,
        url: "https://toolgenie.io/",
        repository: "",
        video: "https://www.loom.com/share/b8b3865101f04de382fa5b1662de1233",
        tech: ["Next.js", "TailwindCSS"],
        content: `
The ToolGenie website is a fast, responsive, and SEO-optimized landing platform built to showcase the ToolGenie AI ecosystem. Developed using Next.js and TailwindCSS, the site offers a polished user experience with clean animations, intuitive navigation, and branding consistency.

The site focuses on high conversion rates, clear messaging, and high-performance marketing components. With its optimized build, minimal bundle sizes, accessibility features, and responsive design, the website delivers a premium brand presence for the ToolGenie platform.
    `,
    },

    {
        slug: "pixelcube",
        title: "Pixelcube",
        description:
            "A premium WordPress + Elementor website built with pixel-perfect design and clean interactions.",
        date: "2023-05-18",
        published: true,
        url: "https://pixelcube.studio/",
        repository: "",
        tech: ["WordPress", "Elementor"],
        content: `
Pixelcube is a beautifully designed creative studio website developed using WordPress and Elementor. The site focuses on rich visuals, smooth interactions, and a highly customizable content structure that allows the team to update portfolios, services, and blog content effortlessly.

The use of Elementor ensures a visually controlled layout system, enabling pixel-perfect design adjustments and a polished, professional brand presence. The website showcases expertise in CMS design, layout strategy, user-centric UI/UX, and responsive development.

It represents a blend of creativity and technical finesse, delivering a strong digital identity for the studio.
    `,
    },
];
