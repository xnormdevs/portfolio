export type Project = {
  slug: string;
  title: string;
  description: string;
  date?: string; // ISO string
  published: boolean;
  url?: string;
  repository?: string;
  content?: string; // simple content to render on detail page
};

export const projects: Project[] = [
  {
    slug: "unkey",
    title: "Unkey",
    description: "A blazing fast API key management service.",
    date: "2024-08-15",
    published: true,
    url: "https://unkey.dev",
    repository: "unkeydev/unkey",
    content:
      "Unkey is a sample project entry. Replace this text with your own project write-up. It demonstrates how content is now sourced from a simple JSON/TS object instead of MDX.",
  },
  {
    slug: "planetfall",
    title: "Planetfall",
    description: "Procedurally generated worlds in your browser.",
    date: "2023-11-03",
    published: true,
    url: "https://example.com/planetfall",
    repository: "yourname/planetfall",
    content:
      "Planetfall is another sample project. You can add screenshots, links, and longer descriptions as needed.",
  },
  {
    slug: "highstorm",
    title: "Highstorm",
    description: "A minimal UI component library for modern apps.",
    date: "2022-06-21",
    published: true,
    url: "https://example.com/highstorm",
    repository: "yourname/highstorm",
    content:
      "Highstorm focuses on accessibility and performance. This is placeholder content.",
  },
  {
    slug: "sample-app",
    title: "Sample App",
    description: "A placeholder demo application.",
    date: "2025-01-01",
    published: false,
    url: "https://example.com/sample-app",
    repository: "yourname/sample-app",
    content:
      "This is an unpublished sample project. Toggle published to true when you are ready.",
  },
];
