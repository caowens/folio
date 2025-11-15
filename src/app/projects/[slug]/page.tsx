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
            <SectionWrapper idName="Key Features">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <div className="text-neutral-200 text-base leading-relaxed">
                            <ul>
                                {project.key_features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
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

            <SectionWrapper idName="Technologies Used">
                <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-neutral-200 text-foreground px-2 py-1 rounded-md text-xs">
                                {tag}
                        </span>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper idName="Gallery">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery ? project.gallery.map((pic) => (
                        <Image
                            key={pic.alt}
                            src={pic.src}
                            alt={pic.alt}
                            height={300}
                            width={500}
                            className="rounded-lg shadow-lg cursor-pointer"
                        />
                    )) : <Image
                            src={project.cover_photo}
                            alt={project.name}
                            height={300}
                            width={500}
                            className="rounded-lg shadow-lg cursor-pointer"
                        />}
                </div>
            </SectionWrapper>
        </StandardPageLayout>
    );
};
