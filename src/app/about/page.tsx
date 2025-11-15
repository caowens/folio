import StandardPageLayout from "@/components/standard-page-layout";
import TechStack from "@/components/tech-stack";

export default function About() {
    return (
        <StandardPageLayout
            title="Hi, Im Alex Owens"
            description="A full-stack and DevOps-minded developer with experience building React applications, TypeScript and C# backend services, and automated testing and deployment workflows. I enjoy designing end-to-end solutions and I’m always looking for ways to improve reliability, performance, and developer experience through automation and modern tooling."
        >
            <TechStack />
        </StandardPageLayout>
    );
};
