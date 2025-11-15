import FeaturedProjects from "@/components/projects";
import StandardPageLayout from "@/components/standard-page-layout";

export default function ProjectsPage() {
    return (
        <StandardPageLayout
            title="Projects"
            description="Explore a list of projects showcasing various skills and technologies."
        >
            <FeaturedProjects isFullList={true} /> 
        </StandardPageLayout>
    );
};
