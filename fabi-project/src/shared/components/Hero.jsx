
import { heroImage } from "../../css/defaultStyles"

export default function Hero () {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-8 text-white bg-gradient-to-r from-black px-8 py-16 md:max-w-2lg" style={ heroImage }>
          <div>
            <h2 className="text-5xl italic py-3">fabi!</h2>
            <p className="text-2xl font-bold tracking-widest">feliz aniversário!</p>
          </div>
          <div>
            <p className="text-xl max-w-lg">
              Felicidades para você, por este dia tão especial que é o seu aniversário.
              Parabéns! Que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados.
              Que seu coração esteja sempre em festa, porque você é um ser de luz e especial para mim.
            </p>
          </div>
          <div className="text-back font-bold">
            <button className="px-4 py-6 bg-yellow-200 rounded-lg tracking-widest uppercase text-black"
              onClick={ () => window.scrollTo(0, 3287) }
            >Ler a cartinha!</button>
          </div>
        </div>
      </div>
    </>
  )
}