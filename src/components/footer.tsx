import { NAV_ITEMS, CONTACTS } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-10 mx-auto container max-w-3xl text-neutral-300 px-4 md:px-0 md:py-20 z-50 animate-fade-up animate-once animate-duration-1000 animate-delay-[600ms]">
            <div className="border rounded-lg p-6 flex flex-col md:flex-row justify-between">
                <div className="logo flex flex-col justify-end mb-6 md:mb-0">
                    <p className="text-5xl">
                        Alex
                        <br />
                        Owens
                    </p>
                </div>
                <div className="flex flex-row space-x-12">
                    <div className="menu mb-6 md:mb-0">
                        <h3 className="text-neutral-300 mb-4">
                            Explore
                        </h3>
                        <ul className="flex flex-col text-neutral-500 font-light">
                            {NAV_ITEMS
                                .filter((item) => item.name !== "Contact")
                                .map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:underline hover:text-neutral-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contacts">
                        <h3 className="text-neutral-300 mb-4">
                            Let's Connect
                        </h3>
                        <ul className="flex flex-col text-neutral-500 font-light">
                            {CONTACTS
                                .filter((contact) => contact.method !== "Resume")
                                .map((contact) => (
                                    <li key={contact.method}>
                                        <Link
                                            href={contact.link}
                                            className="hover:underline hover:text-neutral-300"
                                        >
                                            {contact.method}
                                        </Link>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-neutral-700 text-thin flex justify-between">
                <p>© 2025</p>
                <p>Alex Owens</p>
            </div>
        </footer>
    );
};
