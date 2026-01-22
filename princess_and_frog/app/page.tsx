
'use client'

import Fireflies from '@/components/Fireflies'
import Carousel from '@/components/Carousel'
import MusicPlayer from '@/components/MusicPlayer'
import { useState } from 'react'



export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-4 transition-all duration-500 overflow-hidden"
      style={{
        backgroundImage: open ? "url('/bg.jpg')" : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: open ? undefined : '#0167C8',
      }}
    >
      {open && <Fireflies count={25} />}
      {open && <div className="absolute inset-0 bg-black/40" />}

      <section className="relative w-full max-w-[420px] text-center">

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="mx-auto px-10 py-4 rounded-lg border-2 border-sky-300 text-[#ffff] text-lg font-semibold shadow-lg"
          >
            💗 Click
          </button>
        ) : (
          <div className="space-y-4 animate-fade-in">
            {open && (
              <div className="mt-6 space-y-4">
                <MusicPlayer start={open} />
                <Carousel />
              </div>
            )}


            <p className='mt-5 text-lg font-semibold text-white/90 leading-snug px-2'>
              Eu te amo até a estrela mais distante.
            </p>
            <div className="flex justify-center my-2">
              <span className="text-yellow-300 text-lg">✦</span>
            </div>
            <p className='mt-4 text-white/90 leading-relaxed px-2'>
              Erendel está a 28 bilhões de anos-luz
            </p>
            <div className="my-4 flex justify-center">
              <span className="block w-16 h-px bg-white/30"></span>
            </div>
          
            <p className="mt-5 text-sm text-white/90 leading-relaxed px-2 mb-10">
              Meu amor,
              Hoje celebramos mais um mês juntos e, ao olhar para nós, não consigo não pensar na história da Princesa e o Sapo. Assim como o Ray olhava para o céu e via na Evangeline a luz mais brilhante do universo, eu olho para você e vejo o meu norte, a minha estrela mais bonita.
              Você é a minha 'baixinha brava' favorita! Esse seu jeitinho determinado e firme só me faz admirar ainda mais a mulher incrível que você é. E o que dizer desse seu sorriso deslumbrante? Ele ilumina até os meus dias mais nublados. Seu olhar encantador me prende e seu cabelo... bom, ele é simplesmente o mais lindo do mundo, digno de uma verdadeira realeza.
              Neste tempo ao seu lado, aprendi que o amor não é apenas um sonho, mas algo que construímos com carinho, como a Tiana e o Naveen. Não importa os desafios que a vida apresente, enquanto eu tiver você e esse seu brilho ao meu lado, eu sei que já encontrei o meu 'final feliz'.
              Você é a minha Evangeline particular. Prometo te amar e te cuidar hoje, amanhã e por toda a eternidade. Feliz mais um mês de muitos que ainda virão!
              Eu te amo daqui até a estrela mais distante.
            </p>
            
          </div>
        )}

      </section>
    </main>
  )
}
