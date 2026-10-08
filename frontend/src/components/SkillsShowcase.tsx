import {skillLangs} from "../data/skillLangs.ts";
import SkillsScroll from "./SkillsScroll.tsx";

export default function SkillsShowcase() {
    return (
        <div className="skills-showcase">
            {skillLangs.map(lang => (
                <SkillsScroll img_path={lang.img_path} title={lang.title} desc={lang.desc} />
            ))}
        </div>
    )
}