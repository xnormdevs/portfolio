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
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <p>{project.content ?? "This project does not have any content yet."}</p>
      </article>
    </div>
  );
}
