import Link from "next/link";
import { ReactNode } from "react";

type ViewMoreLink = {
  href: string;
  text?: string;
};

type SectionWrapperProps = {
  idName: string;
  children: ReactNode;
  viewMoreLink?: ViewMoreLink;
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
    idName, 
    children,
    viewMoreLink
}) => {

    const buttonText = viewMoreLink?.text || "View more";

    return (
        <section id={idName} className="container z-50 mx-auto max-w-3xl animate-fade-up px-4 pt-10 animate-delay-[600ms] animate-once md:px-0 md:pt-20">
            {/* Render a view more link if need another page for rest of section content */}
            {viewMoreLink ? (
                <div className="flex flex-row justify-between mb-5 tracking-widest">
                    <p className="text-xl font-light text-neutral-300">{idName}</p>
                    <Link href={viewMoreLink.href} className="text-l font-light text-neutral-500 items-center hover:text-neutral-300 transition">
                        {buttonText}
                    </Link>
                </div>
            ) : (
                <p className="mb-5 text-left text-xl tracking-widest text-neutral-300">{idName}</p>
            )}
            {children}
        </section>
    );
};