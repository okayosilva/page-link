import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import dataAbout from '../../data/dataAbout'

export const About = () => {
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
    <div className="w-full mt-14 flex flex-col gap-4 pb-8">
      <h2 className="text-[24px] font-bold">Sobre</h2>
      <div className=" h-[174px] w-full flex justify-center items-center bg-neutral-50 border border-neutral-950 rounded drop-shadow-md">{dataAbout.map((text) => <p>{text}</p>)}</div>
    </div>
  )
}
