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
      <BirthdayMessages title="Aquele Momento!" message="Um momento especial de renovação para sua alma e seu espírito, porque Deus, na sua infinita sabedoria, deu à natureza a capacidade de desabrochar a cada nova estação e a nós, capacidade de recomeçar a cada ano." />
      <Flower />
      <BirthdayMessages title="O desejo..." message="Desejo a você um ano cheio de amor e de alegrias.
      Afinal, fazer aniversário é ter a chance de fazer novos amigos, ajudar mais pessoas, aprender e ensinar novas lições, vivenciar outras dores e suportar velhos problemas." />
      <Flower />
      <BirthdayMessages title="O sorriso..." message="Sorrir novos motivos e chorar outros, porque amar o próximo é dar mais amparo, rezar mais preces e agradecer mais vezes.
      Fazer aniversário é amadurecer um pouco mais e olhar a vida como uma dádiva de Deus." />
      <Flower />
      <BirthdayMessages title="O por fim, a gratidão" message="É ser grato, reconhecido, forte, destemido.
      É ser rima, é ser verso, é ver Deus no universo.
      Parabéns a você nesse dia tão grandioso." />
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
      <SubTitle subtitle="Uma pessoa especial!" />
      <Flower />
      <BirthdayMessages title="A uma grande amiga!" message="Fabi,
      Desde o momento que te conheci já gostei de você, de cara e de graça!
      Moça risonha e de uma positividade que transborda,essa é você na minha percepção,no meu mundo você é fabulosa!
      Sua amizade é coisa rara e verdadeira,e eu desejo pra você tudo oque há de melhor nessa vida!
      Parabéns amiga!" />
      <Flower />
      <Footer />
    </>
  )
}