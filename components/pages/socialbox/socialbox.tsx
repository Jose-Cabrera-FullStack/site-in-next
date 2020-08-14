

import { 
  SocialBoxContainer,
  FacebookBox,
  YoutubeBox,
  Container,
  Title,
  Number,
  Star,
  LeftContainer,
  RightContainer,
  Text,
  StyledButton,
  NumbersList,
  ListItem,
  SubscribeButton
} from './socialbox.styles'

interface Props {
}


export const SocialBox = ({}: Props) => {
  return (
    <SocialBoxContainer>
      <FacebookBox>
        <Container>
          <LeftContainer>
            <Title>Conoce más en Facebok</Title>
            <Number>4,9</Number>
            <Star width="39" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 0l5.525 11.896 13.02 1.578-9.606 8.93 2.523 12.872L19.5 28.899 8.038 35.276l2.523-12.872-9.607-8.93 13.021-1.578L19.5 0z" fill="#E8833F"/></Star>
            <Text>No hay mejor garantía que la calificación de mis alumnos</Text>
          </LeftContainer>
          <RightContainer>
            <StyledButton 
              title="Ver en Facebook"
              color="blue"
              onClick={() => {window.open('https://www.facebook.com/tusclasesdeguitarratcdg/', '_blank')}}
            />
          </RightContainer>
        </Container>
      </FacebookBox>
      <YoutubeBox>
        <Container>
          <Title className="white">Todo lo que necesitas saber en el canal de Youtube </Title>
          <NumbersList>
            <ListItem>
              <Number className="gray">1472</Number>
              <Text className="lighter">Videos publicados</Text>
            </ListItem>
            <ListItem>
              <Number className="gray">2.5 mill </Number>
              <Text className="lighter">Son los seguidores de mi canal</Text>
            </ListItem>
            <ListItem>
              <Number className="gray">316 mill</Number>
              <Text className="lighter">Las veces que se vieron mis videos</Text>
            </ListItem>
          </NumbersList>
          <SubscribeButton 
            title="Suscribirme al canal"
            color="lightOrange"
            onClick={() => {window.open('https://www.youtube.com/user/mariofreiria', '_blank')}}
          />
        </Container>
      </YoutubeBox>
    </SocialBoxContainer>
  )
}