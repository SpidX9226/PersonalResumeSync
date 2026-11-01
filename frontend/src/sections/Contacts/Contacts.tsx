import { useEffect, useRef, useState } from "react"
import Reveal from "../Reveal.tsx"
import "./Contacts.scss"

// TODO: put your real details here.
// The email is assembled in code instead of being written out in the markup,
// which keeps it away from the simplest address scrapers.
const EMAIL_USER = "your.name"
const EMAIL_DOMAIN = "example.com"

interface ContactLink {
    id: string
    label: string
    handle: string
    /** Links with an empty href are not rendered, so unfinished entries never ship as dead links. */
    href: string
}

const LINKS: ContactLink[] = [
    { id: "github", label: "GitHub", handle: "SpidX9226", href: "https://github.com/SpidX9226" },
    { id: "telegram", label: "Telegram", handle: "@your_username", href: "https://t.me/your_username" },
    // TODO: fill in the ones you use.
    { id: "linkedin", label: "LinkedIn", handle: "linkedin.com/in/your-name", href: "" },
    { id: "telegram", label: "Telegram", handle: "@username", href: "" },
]

type CopyState = "idle" | "copied" | "failed"

const COPY_LABEL: Record<CopyState, string> = {
    idle: "Копировать",
    copied: "Скопировано",
    failed: "Не удалось, скопируйте вручную",
}

export default function Contacts() {
    const email = `${EMAIL_USER}@${EMAIL_DOMAIN}`
    const [copyState, setCopyState] = useState<CopyState>("idle")
    const timer = useRef<number | undefined>(undefined)

    useEffect(() => () => window.clearTimeout(timer.current), [])

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email)
            setCopyState("copied")
        } catch {
            setCopyState("failed")
        }

        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopyState("idle"), 2500)
    }

    const links = LINKS.filter((link) => link.href)

    return (
        <section id="contact" className="section">
            <div className="container">

                {/* Renumber when the Experience section is added (04 -> 05). */}
                <Reveal as="p" className="section__label">04 / CONTACT</Reveal>
                <Reveal as="h2" className="section__title">Контакты</Reveal>

                <Reveal as="p" className="contact__lead" delay={0.2}>
                    Открыт к предложениям о работе и совместным проектам.
                    Напишите мне, и я отвечу.
                </Reveal>

                <Reveal as="div" className="contact__email" delay={0.3}>
                    <div>
                        <p className="contact__email-label">Почта</p>
                        <a className="contact__email-address" href={`mailto:${email}`}>
                            {email}
                        </a>
                    </div>

                    <button type="button" className="btn secondary contact__copy" onClick={copyEmail}>
                        <span aria-live="polite">{COPY_LABEL[copyState]}</span>
                    </button>
                </Reveal>

                {links.length > 0 && (
                    <ul className="contact__links">
                        {links.map(({ id, label, handle, href }, index) => (
                            <Reveal as="li" className="contact__item" delay={0.4 + index * 0.1} key={id}>
                                <a
                                    className="contact__link"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="contact__link-label">{label}</span>
                                    <span className="contact__link-handle">{handle}</span>
                                </a>
                            </Reveal>
                        ))}
                    </ul>
                )}

            </div>
        </section>
    )
}