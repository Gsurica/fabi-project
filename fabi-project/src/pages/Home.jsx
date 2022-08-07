import Hero from "../shared/components/Hero";
import ButtonsHome from "../shared/components/ButtonsHome";
import Divider from "../shared/components/Divider";
import Title from "../shared/components/Title";
import BirthdayMessages from "../shared/components/BirthdayMessages";
import Flower from "../shared/components/Flower";
import SubTitle from "../shared/components/SubTitle";
import Video from "../shared/components/Video";
import ButtonsImage from "../shared/components/ButtonsImage";
import { useSelector } from "react-redux";
import Modal from "../shared/components/Modal";
import Footer from "../shared/components/Footer";
import Arrow from "../shared/components/Arrow";


export default function Home () {

  const modal = useSelector(state => state.modal.isOpen);


  console.log(window.scrollY)

  if (modal) {
    return (
      <>
        <Modal />
      </>
    )
  }

  return (
    <>
      <Hero />
      <ButtonsHome />
      <Arrow />
      <Divider />
      <Title title="Fabi! muitas felicidades!" icon={ <ion-icon name="cloudy-outline"></ion-icon> } />
      <Divider />
      <SubTitle subtitle="Mensagens!" />
      <BirthdayMessages title="lorem ipsum" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis in ligula ut dignissim. Nulla facilisi. Aliquam molestie maximus lectus ut suscipit. Cras venenatis faucibus rhoncus. Sed dictum quam posuere arcu mattis bibendum. Quisque volutpat dictum elit," />
      <Flower />
      <BirthdayMessages title="lorem ipsum" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis in ligula ut dignissim. Nulla facilisi. Aliquam molestie maximus lectus ut suscipit. Cras venenatis faucibus rhoncus. Sed dictum quam posuere arcu mattis bibendum. Quisque volutpat dictum elit," />
      <Flower />
      <BirthdayMessages title="lorem ipsum" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis in ligula ut dignissim. Nulla facilisi. Aliquam molestie maximus lectus ut suscipit. Cras venenatis faucibus rhoncus. Sed dictum quam posuere arcu mattis bibendum. Quisque volutpat dictum elit," />
      <Flower />
      <Divider />
      <Title title="Um vídeo para alguém especial!" icon={ <ion-icon name="cloudy-outline"></ion-icon> } />
      <Divider />
      <SubTitle subtitle="Video!" />
      <Flower />
      <Video />
      <Flower />
      <Divider />
      <Title title="Musicas para alegrar!" icon={ <ion-icon name="cloudy-outline"></ion-icon> } />
      <Divider />
      <SubTitle subtitle="Musiquinhas!" />
      <Flower />
      <ButtonsImage />
      <Flower />
      <Divider />
      <Title title="Finalizando..." icon={ <ion-icon name="cloudy-outline"></ion-icon> } />
      <Divider />
      <SubTitle subtitle="Seja essa pessoa especial!" />
      <Flower />
      <BirthdayMessages title="lorem ipsum" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis in ligula ut dignissim. Nulla facilisi. Aliquam molestie maximus lectus ut suscipit. Cras venenatis faucibus rhoncus. Sed dictum quam posuere arcu mattis bibendum. Quisque volutpat dictum elit," />
      <Footer />
    </>
  )
}