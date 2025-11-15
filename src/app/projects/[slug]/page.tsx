import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";
import StandardPageLayout from "@/layout/standard-page-layout";
import { SectionWrapper } from "@/layout/section-wrapper";
import Image from "next/image";

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
            description={project.page_desc}
        >
            <SectionWrapper idName="Context">
                <div className="flex flex-row gap-6">
                    <div className="flex-1">
                        <div className="text-neutral-200 text-base leading-relaxed">
                            <p>{project.page_desc}</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            width={500}
                            height={300}
                            alt={project.name}
                            className="rounded-lg shadow-lg cursor-pointer"
                            src={project.cover_photo}
                        />
                    </div>
                </div>
            </SectionWrapper>
        </StandardPageLayout>
    );
};
