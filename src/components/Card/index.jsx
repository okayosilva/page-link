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

export const Card = ({ item }) => {
  function iconSelected(item) {
    console.log(item.name)
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
    <button className=" h-[100px] w-[100px] border border-neutral-900 rounded drop-shadow-md flex justify-center items-center">
      {iconSelected(item)}
    </button>
  )
}
