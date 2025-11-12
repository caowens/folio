import { Project, PROJECTS } from "@/constants";
import { SectionWrapper } from "./section-wrapper";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
    project
}: {
    project: Project
}) => {
    return (
        <Link 
            href={`/projects/${project.id}`}
            className="border border-neutral-300 rounded-lg flex flex-col justify-between hover:-translate-y-2 transition ease-in-out duration-300"
        >
            <Image
                alt={project.name}
                src={project.cover_photo}
                width={100}
                height={192}
                className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-2 flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg text-gray-50">
                        {project.name}
                    </h3>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
                        <span>Discover</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                    </button>
                </div>
                <p className="text-neutral-400 text-sm mb-4">
                    {project.short_desc}
                </p>
            </div>
            <div className="p-2">
                <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-neutral-200 text-foreground px-2 py-1 rounded-md text-xs">
                                {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default function Projects() {
    const numberOfProjectsToShow = 2;

    return (
        <SectionWrapper idName="Projects" viewMoreLink={{href: "/projects"}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.slice(0, numberOfProjectsToShow).map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};
