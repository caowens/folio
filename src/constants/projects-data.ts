export interface Project {
    slug: string;
    name: string;
    card_desc: string;
    page_desc: string
    tags: string[];
    cover_photo: string;
    href: string;
}

export const PROJECTS: Project[] = [
    {
        slug: "lifted-api",
        name: "Lifted API",
        card_desc: "A secure Express/MongoDB API with JWT authentication, Arcjet protection, and Swagger documentation.",
        page_desc: "Lifted API is a secure Express and MongoDB backend featuring JWT authentication, user and quote management, Arcjet-based bot and rate-limit protection, and interactive Swagger documentation.",
        tags: ["Node.JS", "Express.JS", "MongoDB"],
        cover_photo: "/projects/lifted.jpg",
        href: "/projects/lifted-api",
    },
    {
        slug: "sentijournal",
        name: "SentiJournal",
        card_desc: "A web-based journal providing sentiment analysis and a graph to track mood changes over time.",
        page_desc: "Web-based journal that allows users to get a sentiment analysis emotion from their entries and view a graph to see how their mood has changed over time.",
        tags: ["React.JS", "Firebase", "Tailwind CSS"],
        cover_photo: "/projects/sentijournal.png",
        href: "/projects/sentijournal",
    },
    {
        slug: "portfolio",
        name: "Personal Portfolio",
        card_desc: "A simple portfolio to showcase my work.",
        page_desc: "",
        tags: ["Next.JS", "Tailwind CSS"],
        cover_photo: "/projects/portfolio.png",
        href: "/",
    },
];