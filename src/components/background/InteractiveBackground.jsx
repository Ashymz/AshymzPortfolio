import { useEffect, useRef } from 'react'
import './interactiveBackground.css'

const InteractiveBackground = () => {
    const target = useRef({ x: 50, y: 50 })
    const current = useRef({ x: 50, y: 50 })
    const rafId = useRef(null)

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        const handleMove = (event) => {
            target.current.x = (event.clientX / window.innerWidth) * 100
            target.current.y = (event.clientY / window.innerHeight) * 100
        }

        const animate = () => {
            if (!prefersReducedMotion) {
                current.current.x += (target.current.x - current.current.x) * 0.08
                current.current.y += (target.current.y - current.current.y) * 0.08
            } else {
                current.current.x = target.current.x
                current.current.y = target.current.y
            }

            document.documentElement.style.setProperty('--mouse-x', `${current.current.x}%`)
            document.documentElement.style.setProperty('--mouse-y', `${current.current.y}%`)
            rafId.current = requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMove, { passive: true })
        rafId.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            if (rafId.current) cancelAnimationFrame(rafId.current)
        }
    }, [])

    return <div className="interactive-bg" aria-hidden="true" />
}

export default InteractiveBackground
