import axios from 'axios';
import https from 'https';
import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { scroller } from 'react-scroll'
import { observer } from 'mobx-react-lite';
import LazyLoad from 'react-lazyload';
import { Layout } from '../components/layout';
import { Title } from '../components/title';
import { LessonList } from '../components/lessonlist';
import { SubscribeBox } from '../components/subscribebox';
import { Subtitle } from '../components/subtitle';
import { QuoteBox } from '../components/quotebox';
import { ModalVideo } from '../components/modalvideo';
import { StepItem }  from '../components/pages/stepitem';
import { SocialBox } from '../components/pages/socialbox';
import { AwardsBox } from '../components/pages/awardsbox';
import { InterviewsBox } from '../components/pages/interviewsbox';
import { API_URI } from '../helpers';
import { Container } from '../components/layout/layout.styles';
import { useStores } from '../stores/hooks';

import {
  HeaderSection, BackgroundVideo, HeaderSubtitle,
  HeaderContent, HeaderLogo, BackgroundVideoOverlay,
  HeaderBtnContainer, HeaderButton, ButtonIcon,
  Section, StepsList, ContentBox,
  ProfilePicture, ExplainerVideo,
  ExplainerVideoPlay, VideoWrapper
} from '../components/pages/index.styles'

const Index: NextPage = observer(({interviews, courses}: any) => {
  const [openVideo, setOpenVideo] = React.useState(false);
  const { rootStore: { userStore } } = useStores()
  return (
    <Layout>
      <HeaderSection>
        <VideoWrapper>
          {typeof window !== 'undefined' && window?.innerWidth >= 900 && <BackgroundVideo src="https://player.vimeo.com/video/417800083?background=1&byline=false&autoplay=true&portrait=false&speed=true&title=false&show_vimeo_logo=false" allow="autoplay"></BackgroundVideo>}
        </VideoWrapper>
        <BackgroundVideoOverlay />
        <Container className="full-height">
          <HeaderContent>
            <HeaderLogo src="/images/header-logo.png"/>
            <Title 
              title="Soy Mario Freiria, guitarrista profesional, y te voy a acompañar en cada paso de tu aprendizaje."
              color="white"
              element="h1"
            />
            <HeaderSubtitle>
              Con mi método de enseñanza online podrás dominar 
              la guitarra acústica y eléctrica.
            </HeaderSubtitle>
            <HeaderBtnContainer>
              <HeaderButton title="Comenzar" color="orange" onClick={() => {scroller.scrollTo('fsection', {duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -50})}} />
              <HeaderButton color="orange" className="video" onClick={() => {setOpenVideo(true)}}>
                <ButtonIcon src="/images/play-home.svg" />
                Quiero saber más
              </HeaderButton>
              {openVideo && <ModalVideo
                src="https://player.vimeo.com/video/224377386?autoplay=1"
                onClose={() => {setOpenVideo(false)}}
              />}
            </HeaderBtnContainer>
          </HeaderContent>
        </Container>
      </HeaderSection>
      <Section id="fsection">
        <Container>
          <Title color="blue" element="h2">
            Comienza ya a aprender guitarra!
          </Title>
          <StepsList>
            <StepItem 
              image="/images/step1.png"
              title="Suscríbete  a través de la página"
              number="1."
              text="Consigue acceso a los cursos completos, seguimiento personalizado y premios con tu suscripción."
              delay=".2s"
              url="/suscripciones"
            />
            <StepItem 
              image="/images/step2.png"
              title="Obtén acceso ilimitado a todos los cursos"
              number="2."
              text="Busca por estilo, dificultad y duración los cursos que más te gusten."
              delay=".6s"
              url="/cursos"
            />
            <StepItem 
              image="/images/step3.png"
              title="Llega al nivel más alto"
              number="3."
              text="Domina la guitarra y conviértete en un experto!"
              delay="1s"
              onClick={() => {scroller.scrollTo('friends', {duration: 800, delay: 0, smooth: 'easeInOutQuart', offset: -50})}}
            />
          </StepsList>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title color="blue" element="h2">Mira todos los cursos que te esperan</Title>
          <Subtitle title="Diferentes niveles y estilos musicales. Encuéntra el tuyo!" />
          {courses && <LessonList lessons={courses} href="/cursos" />}
          {!userStore.subscripted && <SubscribeBox 
            title={{text: "Decide cuándo, dónde y cómo quieres tomar tus clases."}} 
            button={{title: "Suscribirme"}}
          />}
        </Container>
      </Section>
      <Section>
        <Container className="fullwidth">
          <ContentBox>
            <LazyLoad><ProfilePicture src="/images/mario-pp.png" /></LazyLoad>
            <Title color="blue" element="h2">
              Hola! Soy Mario Freiria, tu nuevo profe de guitarra
            </Title>
            <Subtitle title="Guitarrista profesional, docente y creador de Tus Clases De Guitarra" />
          </ContentBox>
          <LazyLoad offset={200}>
            <ExplainerVideo onClick={() => {setOpenVideo(true)}}>
              <ExplainerVideoPlay src="/images/play-home.svg" />
            </ExplainerVideo>
          </LazyLoad>
        </Container>
      </Section>
      <Section id="friends">
        <Container>
          <h3 className="title-low">Guitarristas amigos</h3>
          <p className="subtitle-low">Colaboraciones junto a los músicos más relevantes del mundo de la guitarra</p>
          <InterviewsBox interviews={interviews} />
        </Container>
      </Section>
      <Section>
        <Container>
          <h3 className="title-low">Premios y trayectoria</h3>
          <p className="subtitle-low">Distinciones y premios a lo largo de mi carrera como guitarrista profesional.</p>
          <AwardsBox awards={[
            {image: '/images/prizes/youtube.png', title: 'Botón de Oro Youtube', link: 'https://www.youtube.com/user/mariofreiria', description: 'Por superar el millón de seguidores'},
            {image: '/images/prizes/emprendimiento.png', title: 'Emprendimiento del año', year: '2019', link: 'https://blog.payoneer.com/es/noticias/premios-anuales-payoneer-al-emprendedurismo-2019-y-los-ganadores-son/', description: 'Otorgado por Payoneer entre 4500 participantes globales'},
            {image: '/images/prizes/diploma.png', title: 'Título de Músico Profesional Berklee College oF Music', year: '2002', link: 'https://www.berklee.edu/global/academic/emc', description: 'Otorgado por Berklee College of Music en 2012'},
          ]} />
        </Container>
      </Section>
      <Section>
        <Container>
          <SocialBox />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title color="blue" element="h2">
            Recomendaciones
          </Title>
          <Subtitle title="Miles de alumnos ya están tomando mis clases online" />
          <QuoteBox quotes={[
            {title:'Francisco Javier Suárez Sandoval', subtitle: 'Alumno', text: 'Es el mejor que he visto, me ha ayudado bastante y sigo aprendiendo cosas que yo desconozco. Sin duda el mejor maestro que puedes encontrar.', image: '/images/perfil_alumno.jpg'},
            {title:'Johan Jhamiro Centeno', subtitle: 'Alumno', text: 'Siempre veo sus vídeos en Youtube a pesar de tener mi primera guitarra acústica hace meses y sin ir a tomar clases de guitarra, poco a poco estoy avanzando y aprendiendo gracias al gran maestro. Siempre explica cada detalle y nos ayuda con nuestros problemas cuando tocamos la guitarra. Nos da motivación e inspiración, siempre.', image: '/images/pp-johan.jpg'},
            {title:'Marco Nahúm Salas', subtitle: 'Alumno', text: 'El mejor maestro que conozco, su forma de enseñar es genial y muy completos todos sus cursos. Si quieres aprender a tocar guitarra él es tu maestro indicado. Muy recomendable! ', image: '/images/pp-marco.jpg'},
          ]} />
        </Container>
      </Section>
    </Layout>
  )
})

Index.getInitialProps  = async (ctx: NextPageContext) => {
  const interviews = [
    {image: '/images/covers/paul.jpg', title: 'Paul Gilbert: Como Pasar De Principiante A Guitar Hero.', subtitle: '', videoUri: 'https://www.youtube.com/embed/C5Hly160VBk'},
    {image: '/images/covers/salinas.jpg', title: 'Fantástica música a 3 guitarras acústicas! Luis Salinas: Funky en si menor.', subtitle: '', videoUri: 'https://www.youtube.com/embed/n_HuphoccUw'},
    {image: '/images/covers/howe.jpg', title: 'Greg Howe - Súper épico duelo de guitarra estilo Funk fusión.', subtitle: '', videoUri: 'https://www.youtube.com/embed/Hrc9MCkvsmY'},
    {image: '/images/covers/juanse.jpg', title: 'Zapando Un Blues En Guitarra Con Juanse.', subtitle: '', videoUri: 'https://www.youtube.com/embed/yUEZEataZQ4'},
    {image: '/images/covers/claudio.jpg', title: 'Impresionante solo de guitarra estilo Metallica Ft. Tano Marciello.', subtitle: '', videoUri: 'https://www.youtube.com/embed/hVaQZHe_w5g'},
    {image: '/images/covers/nebbia.jpg', title: 'Tocando con Litto Nebbia.', subtitle: '', videoUri: 'https://www.youtube.com/embed/n6s_5a596tE'},
    {image: '/images/covers/palau.jpg', title: 'La más bella canción en guitarra que vas a escuchar hoy. Tocando junto a David Palau.', subtitle: '', videoUri: 'https://www.youtube.com/embed/_3-GJu-9VJw'},
    {image: '/images/covers/napolitano.jpg', title: 'Tocando un blues de Pappo junto a Luciano Napolitano.', subtitle: '', videoUri: 'https://www.youtube.com/embed/uG3HU5peWfE&t=107s'},
    {image: '/images/covers/vidal.jpg', title: 'A-Z Rock Challenge. Reto con guitarra Ft. Christian Vidal (Therion).', subtitle: '', videoUri: 'https://www.youtube.com/embed/IOIsJ07DTtY'},
    {image: '/images/covers/roascio.jpg', title: 'Improvisación metal neoclásico en modo frigio por Marcelo Roascio.', subtitle: '', videoUri: 'https://www.youtube.com/embed/SqbpJsY_DJ0'},
    {image: '/images/covers/neilly.jpg', title: 'Improvisando un blues tradicional con Vernon Neilly.', subtitle: '', videoUri: 'https://www.youtube.com/embed/VrXrKnWEdJo'},
    {image: '/images/covers/horcas.jpg', title: 'Horcas - Punto Final | Metal Live Session.', subtitle: '', videoUri: 'https://www.youtube.com/embed/L476GZYV57U'},
    {image: '/images/covers/barrett.jpg', title: 'Julian Barrett - Épico solode guitarra Funky Metal.', subtitle: '', videoUri: 'https://www.youtube.com/embed/LhsjxAXNTLI'},
    {image: '/images/covers/rowek.jpg', title: 'Ángeles de Acero | Heavy Metal Cover by Rowek.', subtitle: '', videoUri: 'https://www.youtube.com/embed/b6JvamhfRGs'},
    {image: '/images/covers/mizrahi.jpg', title: 'Espectacular solo de guitarra estilo Hard Rock Ft. Diego Mizrahi.', subtitle: '', videoUri: 'https://www.youtube.com/embed/ORoREo10-gg'},
    {image: '/images/covers/asspera.jpg', title: '¿Como suena Luis Miguel versión Metal? "Ahora te puedes marchar" by Asspera.', subtitle: '', videoUri: 'https://www.youtube.com/embed/ba7_4-QNx7g'},
    {image: '/images/covers/subotovsky.jpg', title: 'Mezclando heavy metal con tango en La Catedral del Tango - Adrian Subotovsky.', subtitle: '', videoUri: 'https://www.youtube.com/embed/6UKxbTR5Nsg'},
    {image: '/images/covers/soler.jpg', title: 'Épico solo de guitarra estilo Shred Metal Por Pablo Soler.', subtitle: '', videoUri: 'https://www.youtube.com/embed/oe6uJDz59cc'},
    {image: '/images/covers/minissale.jpg', title: 'Improvisación Estilo Dire Straits en guitarra por Jorge Minissale.', subtitle: '', videoUri: 'https://www.youtube.com/embed/_LvnJ_RQcDs'},
    {image: '/images/covers/temple.jpg', title: 'Heroe de la Eternidad (Walter Giardino) | Metal Cover | Temple.', subtitle: '', videoUri: 'https://www.youtube.com/embed/9lYh-o0m4mg'},
    {image: '/images/covers/treiyer.jpg', title: 'Espectacular duelo de guitarras Hard Rock con Gabe Treiyer.', subtitle: '', videoUri: 'https://www.youtube.com/embed/45K686vnnjo'},
    {image: '/images/covers/rosa.jpg', title: 'Magnífico solo de guitarra estilo Metal Ft. Marcelo Rosa.', subtitle: '', videoUri: 'https://www.youtube.com/embed/pTlwg3rd2iA'},
    {image: '/images/covers/mendo.jpg', title: 'Saint Seiya Pegasus Fantasy | Metal cover Ft. Mauren.', subtitle: '', videoUri: 'https://www.youtube.com/embed/9CO6Ta3xfUA'},
    {image: '/images/covers/vinias.jpg', title: 'Fantástico solo de guitarra Eestilo Hard Rock-Fusión - Improvisación Ft. Javi Viñas.', subtitle: '', videoUri: 'https://www.youtube.com/embed/RJ49Xh9-Y2I'},
    {image: '/images/covers/j-salinas.jpg', title: 'Isn´t She Lovely (Stevie Wonder) cover en guitarra con Juan Salinas.', subtitle: '', videoUri: 'https://www.youtube.com/embed/v3qKhpXLXxY'},
    {image: '/images/covers/quin.jpg', title: 'Solos de guitarra sobre base Shuffle Blues | Demostración con Gus Quin.', subtitle: '', videoUri: 'https://www.youtube.com/embed/i3ua_F2lHNE'},   
  ]

  try {
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });
    const { data } = await axios.get(`${API_URI}/home`, {httpsAgent: agent})
    return {
      courses: data.courses,
      interviews
    }
  } catch (error) {
    console.log('The error from index.js ', error)
    return {
      courses: [],
      interviews
    }
  }
}

export default Index;