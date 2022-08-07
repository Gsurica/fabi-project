
import duckdancing from "../../assets/images/duckdancing.gif";

export default function Modal () {
  return (
    <div className="grid grid-cols-1 gap-4" onClick={ () => window.location.reload() }>
        <div className="bg-black opacity-80 inset-0 absolute flex items-center justify-center flex-col">
        <div className="px-8 py-10 bg-yellow-300 text-black">
          <h1 className="font-bold animate-bounce">Musica rolando... dance junto com o pato!</h1>
        </div>
        <div className="px-8 py-6">
          <img src={ duckdancing } className="rounded-lg" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-8">
          <h1 className="text-white text-4xl animate-pulse">Clique para sair</h1>
        </div>
    </div>
  )
}