
import videoOne from "../../assets/videos/Pabllo Vittar feat. Psirico - Parabéns (Official Music Video).mp4";

export default function Video () {
  return (
    <div className="px-8">
        <div className="px-6 py-8 w-full flex items-center justify-center bg-yellow-200 rounded-lg">
        <div className="rounded-lg">
          <video src={ videoOne } muted type="video/mp4" controls width="320" height="240"  />
        </div>
      </div>
    </div>
  )
}