import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";
import StandardPageLayout from "@/layout/standard-page-layout";

interface ProjectPageProps {
    params: { slug: string };
}

export default async function ProjectPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <StandardPageLayout
            title={project.name}
            description={project.short_desc}
        >
            More project info...
        </StandardPageLayout>
    );
};
