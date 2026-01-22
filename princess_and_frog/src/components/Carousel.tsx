'use client'

import { useEffect, useRef, useState } from 'react'

const items = [
  { type: 'image', src: '/photos/1.jpeg', duration: 4000 },
  { type: 'video', src: '/photos/1.mp4' },
  { type: 'image', src: '/photos/2.jpeg', duration: 4000 },
  { type: 'video', src: '/photos/2.mp4' },
]

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isAutoScrolling = useRef(false)

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length)
  }

  // Move o carrossel quando o index muda
  useEffect(() => {
    if (!containerRef.current) return

    isAutoScrolling.current = true

    containerRef.current.scrollTo({
      left: index * containerRef.current.clientWidth,
      behavior: 'smooth',
    })

    // libera scroll manual após a animação
    const t = setTimeout(() => {
      isAutoScrolling.current = false
    }, 500)

    return () => clearTimeout(t)
  }, [index])

  // Autoplay
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    const current = items[index]

    if (current.type === 'image') {
      timeoutRef.current = setTimeout(
        next,
        current.duration ?? 4000
      )
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [index])

  // Scroll manual → atualiza index
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      if (isAutoScrolling.current) return

      const slideWidth = container.clientWidth
      const newIndex = Math.round(
        container.scrollLeft / slideWidth
      )

      setIndex((prev) =>
        prev !== newIndex ? newIndex : prev
      )
    }

    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="
        flex overflow-x-auto snap-x snap-mandatory
        scroll-smooth rounded-2xl no-scrollbar
      "
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="min-w-full snap-center flex justify-center"
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              className="h-[600px] w-full object-cover rounded-2xl"
              alt=""
            />
          ) : (
            <video
              src={item.src}
              className="h-[600px] w-full object-cover rounded-2xl"
              muted
              autoPlay
              playsInline
              preload="auto"
              onEnded={next}
            />
          )}
        </div>
      ))}
    </div>
  )
}
