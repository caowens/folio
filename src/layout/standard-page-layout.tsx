import { ReactNode } from "react";
import StyledBreak from "../components/styled-break";

type StandardPageProps = {
    title: string;
    description?: string;
    children: ReactNode
}

export default function StandardPageLayout({ title, description, children} : StandardPageProps) {
    return (
        <>
            <div className="absolute left-[50%] top-[-15%] z-0 flex h-[35rem] w-full max-w-[1200px] [transform:translateX(-50%)_translateZ(0)] items-center justify-center md:top-[-10%]">
                <div className="relative">
                    <div className="standard-page-ellipse-blue absolute left-0 top-0 [transform:translateX(-50%)_translateZ(0)]"></div>
                    <div className="standard-page-ellipse-green absolute left-0 top-0"></div>
                    <div className="standard-page-ellipse-purple absolute right-0 top-0"></div>
                </div>
            </div>
            <section className="pt-48 pb-32 mx-auto container max-w-3xl px-4 md:px-0 md:pt-48 md:pb-32 z-50 space-y-4 text-center animate-fade animate-once animate-duration-1000 animate-delay-300">
                <h1 className="text-4xl text-gray-50 font-extrabold text-accenty md:text-4xl lg:text-6xl second-font z-10">
                    {title}
                </h1>
                <h2 className="text-2xl text-neutral-300 font-light text-accenty md:text-2xl lg:text-2xl">
                    {description}
                </h2>
            </section>
            <StyledBreak />
            {children}
        </>
    );
};
