

export default function BirthdayMessages ({ title, message }) {
  return (
    <div className="px-8 py-10 grid grid-cols-1 gap-2">
      <div className="bg-white flex items-center justify-center tracking-wide  py-6 rounded-tl-xl rounded-tr-xl">
        <h1 className="font-bold text-3xl italic">{ title }</h1>
      </div>  
      <div className="flex bg-white items-center justify-center max-w-lg px-6 py-4 rounded-br-xl rounded-bl-xl">
        <p className="font-bold">
          { message }
        </p>
      </div>
    </div>
  )
}