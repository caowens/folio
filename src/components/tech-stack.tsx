import React from "react";
import { SectionWrapper } from "./section-wrapper";
import { TECH_STACK, TechChip } from "@/constants";
import { IconType } from "react-icons";

const TechStackChip: React.FC<TechChip> = ({
    name, icon: Icon 
}: {
    name: string, icon: IconType
}) => {
    return (
        <div className="flex items-center p-2 bg-neutral-950/30 rounded-xl">
            <Icon style={{ color: 'white', width: '25px', height: '25px' }} />
            <p className="ml-2 mr-1 text-sm text-neutral-300">{name}</p>
        </div>
    );
};

export default function TechStack() {
    return (
        <SectionWrapper idName="TechStack">
            <div className="blurred-eclipse-green absolute -right-3/12"></div>
            <div className="flex flex-wrap gap-2 items-center">
                {TECH_STACK.map((stack) => (
                    <TechStackChip 
                        key={stack.id}
                        id={stack.id}
                        name={stack.name}
                        icon={stack.icon}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};
