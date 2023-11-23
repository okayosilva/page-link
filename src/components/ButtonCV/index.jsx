import { useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { CheckCircle, DownloadSimple, X } from '@phosphor-icons/react'
import './styles.css'

export const ButtonCV = () => {
  const [isOpen, setIsopen] = useState(false)

  useLayoutEffect(() => {
    gsap.to('#buttonCv', {
      x: 0,
      opacity: 1,
      delay: 2,
      duration: 2,
    })

    return () => {
      gsap.killTweensOf('#buttonCv')
    }
  }, [])

  const onButtonClick = () => {
    const pdfUrl = 'Desenvolvedor-Full-Stack-Kayo-Silva.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Desenvolvedor-Full-Stack-Kayo-Silva.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsopen(true)

    setTimeout(function () {
      setIsopen((state) => !state)
    }, 5000)
  }

  return (
    <>
      {isOpen === true ? (
        <div className="absolute top-[2%] right-[5%] w-max-[672px] p-4 bg-neutral-50 rounded drop-shadow-md border border-neutral-900 flex flex-col gap-2 m-4 ">
          <div className="flex flex-row items-center gap-2 justify-center">
            <span className="absolute top-[-5px] right-[-5px] flex h-3 w-3 ">
              <span className="animate-ping  absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 "></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <CheckCircle size={24} />
            <span className="flex-1 grow">
              Muito obrigado por baixar meu curriculo!
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
      <button
        id="buttonCv"
        onClick={() => onButtonClick()}
        className="w-full bg-neutral-950 rounded mt-8 h-14 text-neutral-50 flex opacity-0 justify-center items-center gap-2 text-center hover:bg-neutral-800 hover:translate-x-3 transition-all"
      >
        <DownloadSimple size={32} />
        <span className="font-bold text-[24px]">Baixar CV</span>
      </button>
    </>
  )
}
