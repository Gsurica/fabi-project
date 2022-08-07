
import { useEffect, useState } from "react";


export default function Arrow () {

  const [scroll, setScroll] = useState();

  const handleScroll = () => {
    const scroll = setScroll(window.scrollY);
    console.log(scroll)
    return scroll;
  }

  useEffect(() => {
    handleScroll();
  }, [scroll])

  return (
      <div className="fixed right-2 bottom-2 animate-pulse">
        <button
          onClick={ () => window.scrollTo(0, 0)}
        >
          <div className="p-4 rounded-full flex items-center bg-yellow-100 text-3xl text-black z-40">
            <ion-icon name="arrow-up-outline"></ion-icon>
          </div>
        </button>
      </div>
  )
}