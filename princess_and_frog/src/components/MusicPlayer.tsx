'use client'

import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer({ start }: { start: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (start && audioRef.current && !playing) {
      audioRef.current.volume = 0.4
      audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }, [start])

  const toggle = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }

    setPlaying(!playing)
  }

  return (
    <div className="w-full flex justify-center">
      <audio ref={audioRef} src="/music/theme.mp3" loop />

      <div
        className="
          w-full max-w-md
          bg-yellow-500 rounded-2xl shadow-lg
          px-4 py-3
          flex items-center gap-4
          opacity-90
          backdrop-blur-sm
        "
      >
        {/* CAPA */}
        <div
        className={`
            w-14 h-14 rounded-full overflow-hidden
            ${playing ? 'animate-spin' : ''}
        `}
        style={{ animationDuration: '12s' }}
        >
          <img
            src="cover.jpg"
            alt="Capa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-neutral-800 font-sans">
            Mirrors
          </p>
          <p className="text-xs text-neutral-500 font-sans">
            Justin Timberlake
          </p>
        </div>

        {/* CONTROLES */}
        <div className="flex items-center gap-4 text-neutral-600">
          <span className="opacity-40">⏮</span>

          <button
            onClick={toggle}
            className="
              w-10 h-10 rounded-full
              bg-neutral-100
              flex items-center justify-center
            "
          >
            {playing ? '⏸' : '▶'}
          </button>

          <span className="opacity-40">⏭</span>
        </div>
      </div>
    </div>
  )
}
