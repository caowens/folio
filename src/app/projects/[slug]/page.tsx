import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";
import StandardPageLayout from "@/layout/standard-page-layout";
import { SectionWrapper } from "@/layout/section-wrapper";
import Image from "next/image";
import Link from "next/link";

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
            <div className="absolute left-[0%] top-[-75%] z-0 flex h-[35rem] w-full max-w-[1200px] [transform:translateX(-50%)_translateZ(0)] items-center justify-center md:top-[-10%]">
                <div className="relative">
                    <div className="standard-page-ellipse-purple absolute right-0 top-100"></div>
                </div>
            </div>

            <div className="absolute left-full top-[75%] z-0 flex h-[35rem] w-full max-w-[1200px] [transform:translateX(-50%)_translateZ(0)] items-center justify-center md:top-[-10%]">
                <div className="relative">
                    <div className="standard-page-ellipse-green absolute left-0 top-200"></div>
                </div>
            </div>

            <div className="absolute left-[0%] top-[125%] z-0 flex h-[35rem] w-full max-w-[1200px] [transform:translateX(-50%)_translateZ(0)] items-center justify-center md:top-[-10%]">
                <div className="relative">
                    <div className="standard-page-ellipse-blue absolute left-0 top-250 translate-x-[-50%]"></div>
                </div>
            </div>

            <div className="absolute left-full top-[175%] z-0 flex h-[35rem] w-full max-w-[1200px] [transform:translateX(-50%)_translateZ(0)] items-center justify-center md:top-[-10%]">
                <div className="relative">
                    <div className="standard-page-ellipse-purple absolute left-0 top-375 translate-x-[-50%]"></div>
                </div>
            </div>
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

            <SectionWrapper idName="Links">
                <div className="flex flex-row-reverse gap-6">
                    <div className="flex-1">
                        <div className="text-neutral-200 text-base leading-relaxed">
                            <ul>
                                <li>
                                    {project.live_project_url && 
                                        <Link
                                            href={project.live_project_url}
                                            target="_blank"
                                            className="text-l font-light text-neutral-400 items-center hover:text-neutral-100 transition">
                                            <span>{project.name} Website</span>
                                        </Link>}
                                </li>
                                <li>
                                    {project.github && 
                                        <Link 
                                            href={project.github}
                                            target="_blank"
                                            className="text-l font-light text-neutral-400 items-center hover:text-neutral-100 transition">
                                            <span>{project.name} Github</span>
                                        </Link>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </StandardPageLayout>
    );
};
