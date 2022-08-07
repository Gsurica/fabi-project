
import duckdancing from "../../assets/images/duckdancing.gif";

import iza from "../../assets/images/iza.gif";
import minions from "../../assets/images/minions.gif";
import frog from "../../assets/images/sapo.gif";

import { useSelector } from "react-redux";

export default function Modal () {

  const imageChoice = useSelector(state => state.modal.chooseImage);

  if (imageChoice === "iza") {
    return (
      <div className="grid grid-cols-1 gap-4" onClick={ () => window.location.reload() }>
        <div className="bg-black opacity-80 inset-0 absolute flex items-center justify-center flex-col">
        <div className="px-8 py-10 bg-yellow-300 text-black">
          <h1 className="font-bold animate-bounce">Musica rolando... dance junto com o pato!</h1>
        </div>
        <div className="px-8 py-6">
          <img src={ iza } className="rounded-lg" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-8">
          <h1 className="text-white text-4xl animate-pulse">Clique para sair</h1>
        </div>
      </div>
    );
  }

  if (imageChoice === "frog") {
    return (
      <div className="grid grid-cols-1 gap-4" onClick={ () => window.location.reload() }>
        <div className="bg-black opacity-80 inset-0 absolute flex items-center justify-center flex-col">
        <div className="px-8 py-10 bg-yellow-300 text-black">
          <h1 className="font-bold animate-bounce">Musica rolando... dance junto com o pato!</h1>
        </div>
        <div className="px-8 py-6">
          <img src={ frog } className="rounded-lg" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-8">
          <h1 className="text-white text-4xl animate-pulse">Clique para sair</h1>
        </div>
      </div>
    );
  }

  if (imageChoice === "minions") {
    return (
      <div className="grid grid-cols-1 gap-4" onClick={ () => window.location.reload() }>
        <div className="bg-black opacity-80 inset-0 absolute flex items-center justify-center flex-col">
        <div className="px-8 py-10 bg-yellow-300 text-black">
          <h1 className="font-bold animate-bounce">Musica rolando... dance junto com o pato!</h1>
        </div>
        <div className="px-8 py-6">
          <img src={ minions } className="rounded-lg" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-8">
          <h1 className="text-white text-4xl animate-pulse">Clique para sair</h1>
        </div>
     </div>
    )
  }


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