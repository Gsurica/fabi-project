
export default function ButtonsHome () {
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="w-full h-48 text-black flex justify-around items-center font-bold max-w-lg">
        <div>
          <button
            className="bg-yellow-400 flex items-center justify-center px-6 py-4 rounded-lg animate-bounce"

            onClick={ () => window.scrollTo(0, 937) }
          >
            Mensagens!
          </button>
        </div>
        <div>
          <button
            className="bg-yellow-400 flex items-center justify-center px-6 py-4 rounded-lg animate-bounce"

            onClick={ () => window.scrollTo(0, 2137) }
          >
            Video!
          </button>
        </div>
        <div>
          <button
            className="bg-yellow-400 flex items-center justify-center px-6 py-4 rounded-lg animate-bounce"

            onClick={ () => window.scrollTo(0, 2737) }
          >
            Especial!
          </button>
        </div>
      </div>
    </div>
    </>
  )
}