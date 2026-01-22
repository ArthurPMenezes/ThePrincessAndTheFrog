'use client'

export default function Fireflies({ count = 20 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${8 + Math.random() * 10}s`,
          '--x': `${(Math.random() - 0.5) * 200}px`,
          '--y': `${(Math.random() - 0.5) * 200}px`,
        } as React.CSSProperties

        return <span key={i} className="firefly" style={style} />
      })}
    </>
  )
}
