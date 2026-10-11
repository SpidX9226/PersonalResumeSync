import type {Skill} from "../models/Skill.ts";

export default function SkillsScroll({ img_path, title, desc }: Skill) {
    return (
        <div className="row">
            <div className="row__content">
                <a className="skill">
                    <img className="skill__image" src={img_path} alt={title} />
                    <div className="skill__info">
                        <span className="skill__title">{title}</span>
                        { desc && <span className="skill__desc">{desc}</span> }
                    </div>
                </a>
            </div>
        </div>
    )
}