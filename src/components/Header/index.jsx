import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export const Header = () => {
  useLayoutEffect(() => {
    // gsap.registerPlugin()
    gsap.to('#avatar', {
      x: 0,
      opacity: 1,
      duration: 1.5,
    })

    gsap.to('#text', { opacity: 1, duration: 1.5, delay: 1.5 })

    return () => {
      gsap.killTweensOf('#avatar')
    }
  }, [])

  return (
    <header
      className="flex mt-16 gap-5 items-center min-h-[150px] 
    max-[370px]:flex-col max-[370px]:text-center "
    >
      <figure
        className="w-[80%] max-w-[120px] md:max-w-[160px] opacity-0 translate-x-[-300px]"
        id="avatar"
      >
        <img
          className="rounded-full drop-shadow-lg border border-zinc-300    "
          src="https://github.com/KayoSilva19.png"
          alt="Minha fotoo"
        />
      </figure>
      <div id="text" className="flex flex-col gap-1 text-zinc-950 opacity-0">
        <h2 className="text-md md:text-[18px]">
          <span className="font-semibold text-blue-700">Developer: </span>
          Front-end.
        </h2>
        <p className="font-sans md:text-[22px]	">
          Olá, sou o Kayo. Aqui, você encontrará diversas formas de entrar em
          contato comigo!
        </p>
      </div>
    </header>
  )
}
