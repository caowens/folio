import { ReactNode } from "react";

type SectionWrapperProps = {
  idName: string;
  children: ReactNode;
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ idName, children }) => {
    return (
        <section id={idName} className="container z-50 mx-auto max-w-3xl animate-fade-up px-4 pt-10 animate-delay-[600ms] animate-once md:px-0 md:pt-20">
            <p className="mb-5 text-left text-xl tracking-widest text-neutral-300">{idName}</p>
            {children}
        </section>
    );
};