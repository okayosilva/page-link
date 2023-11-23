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
import './styles.css'

export const Card = ({ item }) => {
  useLayoutEffect(() => {
    gsap.to('#cardButton', {
      x: 0,
      delay: 1,
      duration: 1.5,
      rotate: 360,
      opacity: 1,
    })

    return () => {
      gsap.killTweensOf('#cardButton')
    }
  }, [])

  const defaultButton =
    'opacity-0 translate-x-[-300px] md:translate-x-[-300px] h-[120px] w-[100px] border border-neutral-900 bg-stone-50 rounded drop-shadow-md flex justify-center items-center transition-all'

  function iconSelected(item) {
    switch (item.name) {
      case 'GitHub':
        return (
          <a
            href={item.link}
            id="cardButton"
            target="_blank"
            className={`${defaultButton} hover:bg-blue-950 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <GithubLogo size={48} />
          </a>
        )

      case 'Discord':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-violet-500 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <DiscordLogo size={48} />
          </a>
        )

      case 'Medium':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-neutral-900 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <MediumLogo size={48} />
          </a>
        )

      case 'Linkedin':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-blue-500 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <LinkedinLogo size={48} />
          </a>
        )

      case 'Instagram':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:text-neutral-50`}
            rel="noreferrer"
          >
            <InstagramLogo size={48} />
          </a>
        )

      case 'Email':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-red-700 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <GoogleLogo size={48} />
          </a>
        )

      case 'Whatsapp':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-green-500 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <WhatsappLogo size={48} />
          </a>
        )

      case 'Youtube':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-red-500 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <YoutubeLogo size={48} />
          </a>
        )

      case 'Twitch':
        return (
          <a
            id="cardButton"
            target="_blank"
            href={item.link}
            className={`${defaultButton} hover:bg-purple-500 hover:text-neutral-50`}
            rel="noreferrer"
          >
            <TwitchLogo size={48} />
          </a>
        )
    }
  }

  return <>{iconSelected(item)}</>
}
