import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

const EASE = [0.22, 1, 0.36, 1] as const

type Tag = "div" | "section" | "article" | "p" | "h2" | "h3" | "ul" | "li" | "span" | "a"

interface RevealProps {
    as?: Tag
    /** Seconds. Handy for manual staggering. */
    delay?: number
    /** Start offset in px. */
    y?: number
    /** Animate only the first time it appears. */
    once?: boolean
    /** Add a blur-in. Nice on a heading, but expensive on big cards: off by default. */
    blur?: boolean
    className?: string
    children: ReactNode
}

/**
 * Apple-style reveal: content rises and fades in once it enters the viewport.
 *
 *   <Reveal as="h2">Skills</Reveal>
 *   <Reveal as="article" className="project" delay={0.1}>…</Reveal>
 *
 * The rise uses the CSS `translate` property instead of `transform`, so Motion
 * never leaves an inline `transform` behind and your own `:hover { transform: … }`
 * rules keep working on revealed elements.
 */
export default function Reveal({
                                   as = "div",
                                   delay = 0,
                                   y = 40,
                                   once = true,
                                   blur = false,
                                   className,
                                   children,
                               }: RevealProps) {
    const reduce = useReducedMotion()
    const Tag = motion[as] as typeof motion.div

    const hidden = {
        opacity: 0,
        translate: `0px ${y}px`,
        ...(blur && { filter: "blur(8px)" }),
    }
    const shown = {
        opacity: 1,
        translate: "0px 0px",
        ...(blur && { filter: "blur(0px)" }),
    }

    return (
        <Tag
            className={className}
            initial={reduce ? false : hidden}
            whileInView={shown}
            viewport={{ once, amount: 0.3, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 1, delay, ease: EASE }}
        >
            {children}
        </Tag>
    )
}