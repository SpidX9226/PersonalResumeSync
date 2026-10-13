import "./Hero.scss"

export default function Hero() {
    return (
        <section className="hero container">
            <div className="hero__title">
                <p className="hero__eyebrow">hello! i'm</p>
                <p className="hero__name">Said Makhov</p>
            </div>
            <p className="hero__desc">some gay ass desc</p>
            <div className="hero__links">
                <a className="hero__link" href="/">github</a>
                <a className="hero__link" href="/">hh</a>
            </div>
        </section>
    )
}