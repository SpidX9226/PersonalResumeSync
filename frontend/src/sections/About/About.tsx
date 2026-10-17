import "./About.scss"

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">

            <p className="section__label">01 / ABOUT</p>
            <h2 className="section__title">Обо мне</h2>

            <div className="about__content">
                <p>
                    Я разработчик, интересующийся backend-разработкой,
                    архитектурой программного обеспечения и созданием
                    высоконагруженных сервисов.
                </p>

                <p>
                    Мне нравится разбираться в сложных системах,
                    изучать новые технологии и писать простой,
                    понятный и поддерживаемый код.
                </p>
            </div>

            </div>
        </section>
    )
}