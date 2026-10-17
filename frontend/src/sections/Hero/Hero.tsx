import "./Hero.scss"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__content container">
                <p className="hero__eyebrow">hello! i'm</p>
                <h1 className="hero__name">Said <span className="hero__name__accent">Makhov</span></h1>

                <p className="hero__desc">
                    Backend-разработчик, который создаёт
                    надёжные и масштабируемые приложения.
                </p>

                <p className="visited">
                    <span className="online-dot"></span> visited x times
                </p>

                <div className="hero__buttons">
                    <a href="#projects" className="btn primary">
                        Посмотреть проекты
                    </a>

                    <a href="#contact" className="btn secondary">
                        Связаться
                    </a>
                </div>

                <div className="hero__socials">
                    <a className="hero__link" href="/">github</a>
                    <a className="hero__link" href="/">hh</a>
                </div>
            </div>
        </section>
    )
}