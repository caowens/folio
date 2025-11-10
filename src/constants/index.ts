import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Contact {
  method: string;
  detail: string;
  link: string;
  icon: LucideIcon;
  hoverColor: string;
}

export interface Experience {
  title: string,
  place: string,
  dates: string,
  logo_url: string,
  description?: string,
}

export const contacts: Contact[] = [
  {
    method: "LinkedIn",
    detail: "linkedin.com/in/iamalexowens",
    link: "https://www.linkedin.com/in/iamalexowens",
    icon: Linkedin,
    hoverColor: "bg-blue-200 dark:bg-blue-700",
  },
  {
    method: "GitHub",
    detail: "github.com/caowens",
    link: "https://github.com/caowens",
    icon: Github,
    hoverColor: "bg-gray-300 dark:bg-gray-800",
  },
  {
    method: "Resume",
    detail: "View Resume",
    link: "/resume.pdf",
    icon: FileText,
    hoverColor: "bg-green-200 dark:bg-green-700",
  },
  {
    method: "Email",
    detail: "caowens256@gmail.com",
    link: "mailto:caowens256@gmail.com",
    icon: Mail,
    hoverColor: "bg-orange-200 dark:bg-orange-700",
  },
];

export const works: Experience[] = [
  {
    title: "Software Engineer 1",
    place: "Microsoft",
    dates: "Aug 2024 - Aug 2025",
    logo_url: "/works/microsoft.png",
    description: "Improved deployment reliability, cut CI/CD time by 77%, and led telemetry projects."
  },
  {
    title: "Software Engineer Intern",
    place: "Microsoft",
    dates: "May 2023 - Aug 2023",
    logo_url: "/works/microsoft.png",
    description: "Enhanced a C# virtual file system and automated data collection."
  },
  {
    title: "Explore Intern (SWE + PM)",
    place: "Microsoft",
    dates: "May 2022 - Aug 2022",
    logo_url: "/works/microsoft.png",
    description: "Built anti-phishing automation in C# and Azure, improving Edge security."
  },
  {
    title: "STEP Intern (SWE)",
    place: "Google",
    dates: "May 2021 - Aug 2021",
    logo_url: "/works/new-google.png",
    description: "Developed and refactored Java test infrastructure for Nest thermostat."
  },
];

export const education: Experience[] = [
  {
    title: "B.Sc. in Computer Science",
    place: "Fisk University",
    dates: "Aug 2020 - May 2024",
    logo_url: "/education/fisk-modern.png",
  }
];