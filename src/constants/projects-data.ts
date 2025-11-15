export interface Project {
    id: string;
    name: string;
    short_desc: string;
    tags: string[];
    cover_photo: string;
    href: string;
}

export const PROJECTS: Project[] = [
    {
        id: "lifted-api",
        name: "Lifted API",
        short_desc: "A secure Express/MongoDB API with JWT authentication, Arcjet protection, and Swagger documentation.",
        tags: ["Node.JS", "Express.JS", "MongoDB"],
        cover_photo: "/projects/lifted.jpg",
        href: "/projects/lifted-api",
    },
    {
        id: "sentijournal",
        name: "SentiJournal",
        short_desc: "A web-based journal providing sentiment analysis and a graph to track mood changes over time.",
        tags: ["React.JS", "Firebase", "Tailwind CSS"],
        cover_photo: "/projects/sentijournal.png",
        href: "/projects/sentijournal",
    },
    {
        id: "portfolio",
        name: "Personal Portfolio",
        short_desc: "A simple portfolio to showcase my work.",
        tags: ["Next.JS", "Tailwind CSS"],
        cover_photo: "/projects/portfolio.png",
        href: "/",
    },
];