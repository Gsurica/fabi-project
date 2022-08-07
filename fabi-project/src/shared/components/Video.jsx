
import videoOne from "../../assets/videos/video-correto.mp4";

export default function Video () {
  return (
    <div className="px-8 w-full flex justify-center">
        <div className="px-6 py-8 w-full flex items-center justify-center bg-yellow-200 rounded-lg md:max-w-lg">
        <div className="rounded-lg">
          <video src={ videoOne } muted type="video/mp4" controls width="320" height="240"  />
        </div>
      </div>
    </div>
  )
}