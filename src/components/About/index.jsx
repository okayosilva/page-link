import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import dataAbout from '../../data/dataAbout'

export const About = () => {
  useLayoutEffect(() => {
    gsap.to('#about', {
      x: 0,
      opacity: 1,
      display: 'flex',
      delay: 2,
      duration: 1,
    })

    return () => {
      gsap.killTweensOf('#about')
    }
  }, [])

  return (
    <div
      id="about"
      className="w-full mt-14  hidden opacity-0 flex-col gap-4 pb-8 translate-x-[-480px]"
    >
      <h2 className="text-[24px] font-bold">Sobre</h2>
      <div className="p-4 min-h-[174px] w-full flex justify-center items-center bg-neutral-50 border border-neutral-950 rounded drop-shadow-md">
        <p>{dataAbout[0]}</p>
      </div>
    </div>
  )
}
