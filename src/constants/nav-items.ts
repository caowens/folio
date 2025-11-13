export interface NavItem {
    name: string;
    href: string;
}

export const NAV_ITEMS: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "mailto:caowens256@gmail.com" }
];