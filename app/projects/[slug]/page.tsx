import { notFound } from "next/navigation";
import { Header } from "./header";
import { projects as allProjects } from "../../../util/projectsData";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views = 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <article className="prose prose-zinc prose-quoteless max-w-none">
          <p>{project.content ?? "This project does not have any content yet."}</p>
        </article>

        {/* Bottom section: Live Demo and Tech stack badges */}
        <div>
          {/* Live Demo button: prefer video, fallback to url */}
          {(() => {
            const demoHref = project.video || project.url;
            if (!demoHref) return null;
            return (
              <div className="mt-2">
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                >
                  Live demo
                  <span aria-hidden>→</span>
                </a>
              </div>
            );
          })()}

          {/* Tech stack badges */}
          {project.tech && project.tech.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] leading-4 tracking-wide uppercase bg-zinc-100 text-zinc-700 border border-zinc-200 rounded-full px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
