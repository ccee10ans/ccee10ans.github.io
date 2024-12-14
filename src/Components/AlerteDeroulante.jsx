import React, { useEffect, useRef } from 'react'

export default function AlerteDeroulante({ message = "Ceci n'est pas le site officiel de la Communauté Catholique des Etudiants de l'ESATIC(CCEE)" }) {
  const scrollRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    const contentElement = contentRef.current
    let animationId

    const defiler = () => {
      if (scrollElement && contentElement) {
        scrollElement.scrollLeft += 1
        if (scrollElement.scrollLeft >= contentElement.offsetWidth / 2) {
          scrollElement.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(defiler)
    }

    defiler()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden text-sm md:text-base">
      <div ref={scrollRef} className="whitespace-nowrap overflow-hidden">
        <div ref={contentRef} className="inline-block">
          <span className="inline-block px-4">{message}</span>
          <span className="inline-block px-4">{message}</span>
          <span className="inline-block px-4">{message}</span>
          <span className="inline-block px-4">{message}</span>
        </div>
      </div>
    </div>
  )
}