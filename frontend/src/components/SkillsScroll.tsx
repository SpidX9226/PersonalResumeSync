import type {Skill} from "../models/Skill.ts";

export default function SkillsScroll({ img_path, title, desc }: Skill) {
    return (
        <div className="row">
            <div className="row__content">
                <a className="skill">
                    <img src={img_path} alt={title} />
                    <div className="skill-info">
                        <span className="title">{title}</span>
                        { desc && <span className="desc">{desc}</span> }
                    </div>
                </a>
            </div>
        </div>
    )
}