import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { LucideIcon } from "lucide-react";


interface Contact {
  method: string;
  detail: string;
  link: string;
  icon: LucideIcon;
  hoverColor: string;
}

export const CONTACTS: Contact[] = [
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