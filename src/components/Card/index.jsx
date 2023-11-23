import {
  DiscordLogo,
  GithubLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TwitchLogo,
  WhatsappLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

export const Card = ({ item }) => {
  useLayoutEffect(() => {
    gsap.to('#cardButton', {
      x: 0,
      delay: 2,
      duration: 2.5,
      rotate: 360,
    })

    return () => {
      gsap.killTweensOf('#cardButton')
    }
  }, [])

  const defaultButton =
    'translate-x-[-400px] h-[120px] w-[100px] border border-neutral-900 bg-stone-50 rounded drop-shadow-md flex justify-center items-center transition-all'

  function iconSelected(item) {
    switch (item.name) {
      case 'GitHub':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-blue-950 hover:text-neutral-50`}
          >
            <GithubLogo size={48} />
          </button>
        )

      case 'Discord':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-violet-500 hover:text-neutral-50`}
          >
            <DiscordLogo size={48} />
          </button>
        )

      case 'Medium':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-neutral-900 hover:text-neutral-50`}
          >
            <MediumLogo size={48} />
          </button>
        )

      case 'Linkedin':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-blue-500 hover:text-neutral-50`}
          >
            <LinkedinLogo size={48} />
          </button>
        )

      case 'Instagram':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:text-neutral-50`}
          >
            <InstagramLogo size={48} />
          </button>
        )

      case 'Email':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-red-700 hover:text-neutral-50`}
          >
            <GoogleLogo size={48} />
          </button>
        )

      case 'Whatsapp':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-green-500 hover:text-neutral-50`}
          >
            <WhatsappLogo size={48} />
          </button>
        )

      case 'Youtube':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-red-500 hover:text-neutral-50`}
          >
            <YoutubeLogo size={48} />
          </button>
        )

      case 'Twitch':
        return (
          <button
            id="cardButton"
            className={`${defaultButton} hover:bg-purple-500 hover:text-neutral-50`}
          >
            <TwitchLogo size={48} />
          </button>
        )
    }
  }

  return <>{iconSelected(item)}</>
}
