export default function Title ({ title, icon }) {
  return (
    <div className="flex w-full h-6 justify-evenly items-center py-8">
      <div className=" text-white text-2xl italic">
        <h1>{ title }</h1>
      </div>
      <div className="text-white text-4xl">
        { icon } . . .
      </div>
    </div>
  )
}