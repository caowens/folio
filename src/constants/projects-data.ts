export interface GalleryImage {
    src: string;
    alt: string;
}

export interface Project {
    slug: string;
    name: string;
    card_desc: string;
    page_desc: string
    tags: string[];
    cover_photo: string;
    href: string;
    key_features: string[];
    gallery?: GalleryImage[];
}

export const PROJECTS: Project[] = [
    {
        slug: "lifted-api",
        name: "Lifted API",
        card_desc: "A secure Express/MongoDB API with JWT authentication, Arcjet protection, and Swagger documentation.",
        page_desc: "A RESTful API for motivational and inspirational quotes, offering both public access and private quote lists for authenticated users. Designed for developers or apps that want a reliable source of quotes with interactive documentation.",
        tags: ["Node.JS", "Express.JS", "MongoDB"],
        cover_photo: "/projects/lifted.jpg",
        href: "/projects/lifted-api",
        key_features: [
            "• REST API for motivational and inspirational quotes.",
            "• Public endpoints for random or paginated quotes.",
            "• Authenticated users can save and manage private quote lists (JWT).",
            "• Built with Node.js, Express.js, and MongoDB.",
            "• Rate-limiting and bot detection via Arcjet and interactive Swagger documentation."
        ],
        gallery: [
            {
                src: "/projects/lifted-api/lifted.jpg",
                alt: "Lifted API Overview"
            },
            {
                src: "/projects/lifted-api/main-swagger.png",
                alt: "Lifted API Swagger Documentation Page"
            },
            {
                src: "/projects/lifted-api/quotes-and-users-routes.png",
                alt: "Lifted API Quotes and Users Routes"
            },
        ]
    },
    {
        slug: "sentijournal",
        name: "SentiJournal",
        card_desc: "A web-based journal providing sentiment analysis and a graph to track mood changes over time.",
        page_desc: "A web-based personal journal that helps users track and understand their emotional patterns over time. Each entry is analyzed for sentiment, and users can visualize their mood trends through interactive graphs.",
        tags: ["React.JS", "Firebase", "Tailwind CSS"],
        cover_photo: "/projects/sentijournal.png",
        href: "/projects/sentijournal",
        key_features: [
            "• Personal web journal with sentiment analysis for each entry.",
            "• Mood trend graph to visualize emotional changes over time.",
            "• User authentication and journal entry creation with Firebase.",
            "• Sentiment detection powered by Google’s DistilBERT model.",
            "• Clean, modern UI built with React and Material Tailwind."
        ],
        gallery: [
            {
                src: "/projects/sentijournal/sentijournal.png",
                alt: "SentiJournal Overview Page"
            },
            {
                src: "/projects/sentijournal/main-entries.png",
                alt: "SentiJournal Home Signed In Page"
            },
            {
                src: "/projects/sentijournal/analysis.png",
                alt: "SentiJournal Analysis Page"
            },
            {
                src: "/projects/sentijournal/new-entry.png",
                alt: "SentiJournal New Journal Entry Page"
            },
        ]
    },
    {
        slug: "portfolio",
        name: "Personal Portfolio",
        card_desc: "A simple portfolio to showcase my work.",
        page_desc: "",
        tags: ["Next.JS", "Tailwind CSS"],
        cover_photo: "/projects/portfolio.png",
        href: "/",
        key_features: [""],
    },
];