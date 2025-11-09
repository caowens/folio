import Link from "next/link"

export default function Navbar() {
    return (
        <header className="fixed left-1/2 top-10 z-[999] -translate-x-1/2 w-full md:w-auto">
            <nav className="relative animate-jump-in animate-once animate-duration-1000">
                <ul className="relative grid grid-cols-4 items-center justify-center py-2 border border-white/10 backdrop-blur-md rounded-full shadow-lg transition-all duration-200 ease-in-out mx-2 md:mx-0">
                    {navItems.map((item) => (
                        <NavItem key={item.name} name={item.name} href={item.href} />
                    ))}
                    <div className="absolute top-0 h-full w-1/4 bg-white/10 rounded-full transition-all duration-300 opacity-0 opacity-0 left-0"></div>
                </ul>
            </nav>
        </header>
    )
};

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "mailto:caowens256@gmail.com" }
];

const NavItem = ({ name, href }: { name: string; href: string }) => (
    <li className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer transition-colors duration-300 text-neutral-300">
        <Link href={href} className="relative z-20">{name}</Link>
    </li>
);
