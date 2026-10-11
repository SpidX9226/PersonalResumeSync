import "./Sidebar.scss"

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                <a href="#about" className="sidebar__link sidebar__link--active">
                    <span className="sidebar__dot"></span>
                    Обо мне
                </a>

                <a href="#skills" className="sidebar__link">
                    <span className="sidebar__dot"></span>
                    Навыки
                </a>

                <a href="#projects" className="sidebar__link">
                    <span className="sidebar__dot"></span>
                    Проекты
                </a>

                <a href="#experience" className="sidebar__link">
                    <span className="sidebar__dot"></span>
                    Опыт
                </a>

                <a href="#contact" className="sidebar__link">
                    <span className="sidebar__dot"></span>
                    Контакты
                </a>
            </nav>
        </aside>
    );
}