

export default function Footer () {

  return (
    <>
    <div className="w-full bg-yellow-100 text-black grid grid-cols-2 gap-4 px-8 py-10">
    <div className="font-bold">
      <p className="tracking-wider">@Gsurica!</p>
      <div className="flex w-48 justify-around items-center mt-6">
        <div className="text-2xl">
          <a href=""><ion-icon name="logo-github"></ion-icon></a>
        </div>
        <div className="text-2xl">
          <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <div className="text-2xl">
          <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}