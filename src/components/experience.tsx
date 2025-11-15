'use client';
import { SectionWrapper } from "../layout/section-wrapper";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '@/components/ui/shadcn-io/tabs';
import Image from "next/image";
import { works, education, type Experience } from "@/constants";

function ExperienceList({
    experiences
}: {
    experiences: Experience[]
}) {
    return (
        <ul className="ml-6 -my-6 list-none border-l border-neutral-300">
            {experiences.map((experience) => (
                <li key={experience.title} className="relative ml-10 py-4 pr-2">
                    <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                        <Image
                            src={experience.logo_url}
                            alt={experience.place}
                            width={48}
                            height={48}
                            className="rounded-full bg-transparent"
                            priority
                            style={{ objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="flex flex-col gap-1 text-white">
                        <time className="text-xs text-gray-400">{experience.dates}</time>
                        <h2 className="font-semibold leading-none">{experience.place}</h2>
                        <p className="text-sm text-gray-400">{experience.title}</p>
                        <p className="text-sm">{experience.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default function Experience() {
    return (
        <SectionWrapper idName="Experience">
            <div className="blurred-eclipse-blue absolute left-1"></div>
            <Tabs defaultValue="work" className="w-full rounded-lg">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="work">Work</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContents className="mx-1 mb-1 rounded-sm h-full border-[1px] border-white">
                    <TabsContent value="work" className="space-y-6 p-6">
                        <ExperienceList experiences={works} />
                    </TabsContent>
                    <TabsContent value="education" className="space-y-6 p-6">
                        <ExperienceList experiences={education} />
                    </TabsContent>
                </TabsContents>
            </Tabs>
        </SectionWrapper>
    );
};
