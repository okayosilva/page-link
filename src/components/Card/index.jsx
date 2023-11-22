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
      duration: 1,
      rotate: 360,
    })

    return () => {
      gsap.killTweensOf('#cardButton')
    }
  }, [])
  function iconSelected(item) {
    switch (item.name) {
      case 'GitHub':
        return <GithubLogo size={48} />

      case 'Discord':
        return <DiscordLogo size={48} />

      case 'Medium':
        return <MediumLogo size={48} />

      case 'Linkedin':
        return <LinkedinLogo size={48} />

      case 'Instagram':
        return <InstagramLogo size={48} />

      case 'Email':
        return <GoogleLogo size={48} />

      case 'Whatsapp':
        return <WhatsappLogo size={48} />

      case 'Youtube':
        return <YoutubeLogo size={48} />

      case 'Twitch':
        return <TwitchLogo size={48} />
    }
  }

  return (
    <button
      id="cardButton"
      className="translate-x-[-700px] h-[120px] w-[100px] border border-neutral-900 bg-stone-50 rounded drop-shadow-md flex justify-center items-center"
    >
      {iconSelected(item)}
    </button>
  )
}
