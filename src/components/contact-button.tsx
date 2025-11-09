import { LucideIcon } from "lucide-react";

export default function ContactButton({ method, detail, link, icon: IconComponent, hoverColor }
    : { method: string; detail: string; link: string; icon: LucideIcon, hoverColor: string }) {
    return (
        <a
            href={link}
            target={method !== "Email" ? "_blank" : undefined}
            rel={method !== "Email" ? "noopener noreferrer" : undefined}
        >
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12 cursor-pointer">
                <IconComponent size={22} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
            </button>
        </a>
    );
};
