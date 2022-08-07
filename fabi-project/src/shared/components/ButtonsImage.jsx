
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import { buttonImage, images } from "../../css/defaultStyles";

import audio1 from "../../assets/audios/347aidan - Dancing In My Room (Lyrics)  i been dancing in my room swaying my feet.mp3";
import audio2 from "../../assets/audios/Just the Two of Us.mp3";
import audio3 from "../../assets/audios/Milky Chance - Stolen Dance (Album Version).mp3";

import { useSelector, useDispatch } from "react-redux";
import { open } from "../../features/modalSlice";

export default function ButtonsImage () {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal.isOpen);

  const playMusic = (newAudio) => {
    const audio = new Audio(newAudio);
    audio.play();
  }

  return (
    <div>
      <div className="w-full flex items-center justify-evenly">
        <div style={ buttonImage }>
          <button style={ images }
            onClick={ () => {
              dispatch(open(true));
              playMusic(audio1);
            } }
          >
            <img src={ img1 } style={ images } />
          </button>
        </div>
        <div style={ buttonImage }>
          <button style={ images }
            onClick={ () => {
              dispatch(open(true));
              playMusic(audio2);
            } }
          >
            <img src={ img2 } style={ images } />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div style={ buttonImage }>
          <button style={ images }
            onClick={ () => {
              dispatch(open(true));
              playMusic(audio3);
            }}
          >
            <img src={ img3 } style={ images } />
          </button>
        </div>
      </div>
    </div>
  )
}