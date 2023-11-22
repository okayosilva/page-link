import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { DownloadSimple } from '@phosphor-icons/react'

export const ButtonCV = () => {
  useLayoutEffect(() => {
    // gsap.registerPlugin()
    gsap.to('#buttonCv', {
      x: 0,
      opacity: 1,
      delay: 3,
      duration: 1,
    })

    return () => {
      gsap.killTweensOf('#buttonCv')
    }
  }, [])

  return (
    <button
      id="buttonCv"
      className="w-full bg-neutral-950 rounded mt-8 h-14 text-neutral-50 flex opacity-0 justify-center items-center gap-2 text-center hover:bg-neutral-800 hover:translate-x-3 transition-all"
    >
      <DownloadSimple size={32} />
      <span className="font-bold text-[24px]">Baixar CV</span>
    </button>
  )
}
