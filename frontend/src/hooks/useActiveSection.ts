import {useEffect, useState} from "react";

const SECTION_IDS: string[] = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
];

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const sections = SECTION_IDS.map((id: string) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        if (!sections.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-15% 0px -65% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [])

    return activeSection;
}