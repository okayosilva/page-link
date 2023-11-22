export const Header = () => {
  return (
    <header
      className="flex mt-16 gap-5 items-center min-h-[150px] 
      max-[370px]:flex-col max-[370px]:text-center "
    >
      <figure className="w-[80%]">
        <img
          className="rounded-full drop-shadow-lg border border-zinc-300    "
          src="https://github.com/KayoSilva19.png"
          alt="Minha fotoo"
        />
      </figure>
      <div className="flex flex-col gap-1 text-zinc-950">
        <h2 className="text-md">
          <span className="font-semibold text-blue-700">Developer: </span>
          Full-Stack.
        </h2>
        <p className="font-sans	">
          Olá, sou o Kayo. Aqui, você encontrará diversas formas de entrar em
          contato comigo!
        </p>
      </div>
    </header>
  )
}
