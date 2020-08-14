import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores/hooks';
import { Portal } from '../portal';

import {
  TunerStyled, LeftBox,
  GuitarImage, RightBox, LogoWrapper,
  Logo, Title, Text, TunerCloseZone,
  VolumeContainer, VolText, Circle,
  VolList, VolItem, TunerOverlay
} from './tuner.styles';

import { classes } from '../../helpers';

interface Props { 
  onClose?: any;
}

export const Tuner = observer(({onClose}: Props) => {

  const { rootStore: {tunerStore} } = useStores()

  const [out, setOut] = React.useState('')
  React.useEffect(() => {
    tunerStore.setAudios()
  }, [tunerStore])
  const handleClose = () => {
    setOut('out');
    tunerStore.close(onClose)
  }
  
  return (
    <Portal selector="body">
      <TunerOverlay className={out}>
        <TunerCloseZone onClick={() => handleClose()} />
        <TunerStyled>
          <LeftBox>
            <GuitarImage width="249" viewBox="0 0 249.42 402.08">
              <defs>
                <clipPath id="prefix__clip-path">
                  <path
                    id="prefix__SVGID"
                    className="prefix__cls-1"
                    d="M203.55 155.44c1-5.75 3.12-10.59 6.39-12.38h16.77c15.27 5.19 15.46 35.71 0 40.89h-16.77c-3.62-2-5.84-7.68-6.69-14.25h-95.08v-14.26z"
                  />
                </clipPath>
                <clipPath id="prefix__clip-path-2">
                  <path
                    id="prefix__SVGID-2"
                    data-name="SVGID"
                    className="prefix__cls-1"
                    d="M203.55 92.25c1-5.75 3.12-10.59 6.39-12.38h16.77c15.27 5.18 15.46 35.7 0 40.89h-16.77c-3.62-2-5.84-7.69-6.69-14.25h-95.08V92.25z"
                  />
                </clipPath>
                <clipPath id="prefix__clip-path-3">
                  <path
                    id="prefix__SVGID-3"
                    data-name="SVGID"
                    className="prefix__cls-1"
                    d="M203.55 216.51c1-5.75 3.12-10.58 6.39-12.38h16.77c15.27 5.19 15.46 35.71 0 40.89h-16.77c-3.62-2-5.84-7.68-6.69-14.25h-95.08v-14.26z"
                  />
                </clipPath>
                <clipPath id="prefix__clip-path-4">
                  <path
                    id="prefix__SVGID-4"
                    data-name="SVGID"
                    className="prefix__cls-1"
                    d="M41.79 155.44c-1-5.75-3.12-10.59-6.39-12.38H18.63c-15.27 5.19-15.46 35.71 0 40.89H35.4c3.62-2 5.84-7.68 6.69-14.25h95.08v-14.26z"
                  />
                </clipPath>
                <clipPath id="prefix__clip-path-5">
                  <path
                    id="prefix__SVGID-5"
                    data-name="SVGID"
                    className="prefix__cls-1"
                    d="M41.79 92.25c-1-5.75-3.12-10.59-6.39-12.38H18.63c-15.27 5.18-15.46 35.7 0 40.89H35.4c3.62-2 5.84-7.69 6.69-14.25h95.08V92.25z"
                  />
                </clipPath>
                <clipPath id="prefix__clip-path-6">
                  <path
                    id="prefix__SVGID-6"
                    data-name="SVGID"
                    className="prefix__cls-1"
                    d="M41.79 216.51c-1-5.75-3.12-10.58-6.39-12.38H18.63c-15.27 5.19-15.46 35.71 0 40.89H35.4c3.62-2 5.84-7.68 6.69-14.25h95.08v-14.26z"
                  />
                </clipPath>
                <clipPath id="prefix__clip-path-7">
                  <path
                    className="prefix__cls-1"
                    d="M167.71 390.79c0-19.73 3.41-90.78 26.53-112.55C185 192 196.84 84.65 205.63 31a3.35 3.35 0 00-4.07-3.8c-41.78 9.45-65-26.37-79.42-6.07C107.73.83 84.5 36.65 42.73 27.2a3.36 3.36 0 00-4.08 3.8C47.44 84.65 59.26 192 50 278.24 73.16 300 76.57 371.06 76.57 390.79h91.14z"
                  />
                </clipPath>
                <style>
                  {
                    ".prefix__cls-1{fill:none;clip-rule:evenodd}.prefix__cls-13,.prefix__cls-3{fill:#1b71bf}.prefix__cls-15,.prefix__cls-4{fill:#2b84e0}.prefix__cls-13,.prefix__cls-15{fill-rule:evenodd}.prefix__cls-13{opacity:.28}.prefix__cls-14{fill:#afafaf}.prefix__cls-16{fill:#e8833f}.prefix__cls-17{font-size:17px;fill:#fff;font-family:Rubik-Bold,Rubik;font-weight:700}"
                  }
                </style>
              </defs>
              <g id="prefix__Capa_2" data-name="Capa 2"> <g id="prefix__Designed_by_Freepik" data-name="Designed by Freepik"> <g clipPath="url(#prefix__clip-path)"> <path className="prefix__cls-3" d="M221.07 139.92h21.28l2.66 37.24-5.32 10.63-29.25-2.66v-47.87l10.63 2.66z"/> <ellipse className="prefix__cls-4" cx={213.09}cy={162.53}rx={10.64}ry={22.61}/> <path className="prefix__cls-3" d="M142.23 169.61h63.28a7.3 7.3 0 007.3-7.31 6.86 6.86 0 00-6.86-6.85h-63.72z"/> </g> <g clipPath="url(#prefix__clip-path-2)"> <path className="prefix__cls-3" d="M221.07 76.73h21.28l2.66 37.23-5.32 10.64-29.25-2.66V74.07l10.63 2.66z"/> <ellipse className="prefix__cls-4" cx={213.09}cy={99.33}rx={10.64}ry={22.61}/> <path className="prefix__cls-3" d="M142.23 106.41h63.28a7.3 7.3 0 007.3-7.3 6.86 6.86 0 00-6.81-6.86h-63.77z"/> </g> <g clipPath="url(#prefix__clip-path-3)"> <path className="prefix__cls-3" d="M221.07 200.99h21.28l2.66 37.24-5.32 10.63-29.25-2.66v-47.87l10.63 2.66z"/> <ellipse className="prefix__cls-4" cx={213.09}cy={223.6}rx={10.64}ry={22.61}/> <path className="prefix__cls-3" d="M142.23 230.68h63.28a7.3 7.3 0 007.3-7.3 6.86 6.86 0 00-6.86-6.86h-63.72z"/> </g> <g clipPath="url(#prefix__clip-path-4)"> <path className="prefix__cls-3" d="M24.27 139.92H2.99L.33 177.16l5.32 10.63 29.26-2.66v-47.87l-10.64 2.66z"/> <ellipse className="prefix__cls-4" cx={32.25}cy={162.53}rx={10.64}ry={22.61}/> <path className="prefix__cls-3" d="M103.12 169.61H39.83a7.3 7.3 0 01-7.3-7.31 6.86 6.86 0 016.86-6.85h63.73z"/> </g> <g clipPath="url(#prefix__clip-path-5)"> <path className="prefix__cls-3" d="M24.27 76.73H2.99L.33 113.96l5.32 10.64 29.26-2.66V74.07l-10.64 2.66z"/> <ellipse className="prefix__cls-4" cx={32.25}cy={99.33}rx={10.64}ry={22.61}/> <path className="prefix__cls-3" d="M103.12 106.41H39.83a7.3 7.3 0 01-7.3-7.3 6.86 6.86 0 016.86-6.86h63.73z"/> </g> <g clipPath="url(#prefix__clip-path-6)"> <path className="prefix__cls-3" d="M24.27 200.99H2.99L.33 238.23l5.32 10.63 29.26-2.66v-47.87l-10.64 2.66z"/> <ellipse className="prefix__cls-4" cx={32.25}cy={223.6}rx={10.64}ry={22.61}/> <path className="prefix__cls-3" d="M103.12 230.68H39.83a7.3 7.3 0 01-7.3-7.3 6.86 6.86 0 016.86-6.86h63.73z"/> </g> <path d="M171.71 390.79c0-19.73 3.76-88.82 26.88-110.59-9.22-86.27-1.75-195.55 7-249.2a3.35 3.35 0 00-4.07-3.8c-41.78 9.45-61-18.65-75.42 1.65-14.37-20.3-37.6 12.35-79.37 2.9a3.37 3.37 0 00-4.08 3.8C51.44 89.21 63.26 192 54 278.24 77.17 300 80.57 371.06 80.57 390.79h91.14z" fillRule="evenodd" fill="#1b71bf"/> <path d="M167.71 390.79c0-19.73 3.41-90.78 26.53-112.55C185 192 196.84 84.65 205.63 31a3.35 3.35 0 00-4.07-3.8c-41.78 9.45-65-26.37-79.42-6.07C107.73.83 84.5 36.65 42.73 27.2a3.36 3.36 0 00-4.08 3.8C47.44 84.65 59.26 192 50 278.24 73.16 300 76.57 371.06 76.57 390.79h91.14z" fill="#114368" fillRule="evenodd"/> <g clipPath="url(#prefix__clip-path-7)"> <path className="prefix__cls-13" d="M249.42 121.02L79.06 402.08l-45.1-24.51L205.42 99.29l44 21.73zM101.12 8.45L34.88 117.73l-17.53-9.53L84.01 0l17.11 8.45z"/> </g> <path className="prefix__cls-14" d="M73.76 357.97h96.35v3.62H73.76z"/> <path className="prefix__cls-14" d="M95.89 368c-3.43-78.7-10.67-197.48-11.71-212.62h-1.54c1 14 8.26 133.62 11.71 212.65.22 5.11.42 12.81.61 22.76h1.54c-.18-9.98-.39-17.7-.61-22.79zM80.55 365.47a1423.93 1423.93 0 01.9-143.47h-1.51A1416.6 1416.6 0 0079 365.54c.24 5.53.45 14.08.63 25.25h1.55c-.18-11.2-.38-19.79-.63-25.32zM108.48 368c-3.24-74.16-21.33-226.51-25.67-261.64h-1.55c4.27 34.54 22.43 187.44 25.67 261.71.23 5.11.43 12.81.61 22.76h1.55c-.19-10.02-.39-17.74-.61-22.83zM148.64 368c3.44-79 7.6-198.67 8.23-212.65h-1.53c-.67 15.14-4.81 133.92-8.24 212.58-.23 5.13-.43 12.85-.62 22.83H148c.21-9.92.42-17.62.64-22.76zM164.44 365.54A966.11 966.11 0 00160.17 222h-1.5a970 970 0 014.23 143.51c-.24 5.54-.45 14.12-.63 25.32h1.54c.19-11.21.39-19.76.63-25.29zM132.29 368c3.24-74.27 21.4-227.17 25.68-261.71h-1.55C152.07 141.45 134 293.8 130.75 368c-.23 5.13-.43 12.85-.61 22.83h1.54c.18-9.99.39-17.69.61-22.83z"/> <path className="prefix__cls-15" d="M90.6 111.44a13.78 13.78 0 10-13.78-13.78 13.81 13.81 0 0013.78 13.78zM90.6 175.29a13.78 13.78 0 10-13.78-13.77 13.8 13.8 0 0013.78 13.77zM90.6 239.15a13.78 13.78 0 10-13.78-13.78 13.81 13.81 0 0013.78 13.78zM153.68 111.44a13.78 13.78 0 10-13.78-13.78 13.81 13.81 0 0013.78 13.78zM153.68 175.29a13.78 13.78 0 10-13.78-13.77 13.8 13.8 0 0013.78 13.77zM153.68 239.15a13.78 13.78 0 10-13.78-13.78 13.81 13.81 0 0013.78 13.78z"/> <g opacity={0.64}> <path className="prefix__cls-3" d="M118.21 55.59a3.86 3.86 0 003.87 3.86 3.86 3.86 0 000-7.72 3.82 3.82 0 00-1.59.35 3.86 3.86 0 00-2.28 3.51zm3.88-1.17l.49.25 1.1.58a.39.39 0 01.17.31.38.38 0 01-.2.34l-1.09.57-.51.26-.87.46a.39.39 0 01-.18 0 .35.35 0 01-.2 0 .36.36 0 01-.16-.22.43.43 0 010-.11V54.3a.38.38 0 01.18-.32.37.37 0 01.38 0l.23.12zM122.43 71.33h-1.85l-1-.09a14 14 0 01-3.58-.83 20.57 20.57 0 004.23 4.41 4 4 0 001.86.83h.48a3.55 3.55 0 001.86-.74 22 22 0 003.07-2.8 19.9 19.9 0 001.38-1.66 19.34 19.34 0 01-6.21.92zm2 3.54zM120.32 39.88v-2.76h-.31a21.87 21.87 0 00-8.53 2 12 12 0 00-1.56.94 8.37 8.37 0 00-3.49 5.64 12.47 12.47 0 00.36 5.53 60.92 60.92 0 004.35 11l.37.71c.53-3.33 3.18-7.17 3.18-9.14 0-2.37-1.32-5.63 0-7.54.89-1.29 3.63-1.66 5.55-1.75zM138.59 46.73v-.11a9.68 9.68 0 00-.58-2.47 8.87 8.87 0 00-.53-1.17A9.63 9.63 0 00135 40a9.3 9.3 0 00-2.62-1.46 24.92 24.92 0 00-7.21-1.41c-.55 0-1.11 0-1.67-.05v1.46l.06 6.79a3 3 0 001.2 2.52c1.51 1 4-1 5.24 0s-.16 3.2-.16 5.65c0 1.46 1.29 3.62 2.33 6 .12.28.24.57.35.85l.14.36v.09c0 .12.09.23.13.35v.06c0 .14.09.27.13.41v.07c0 .11.07.22.1.33v.13a2.45 2.45 0 01.08.29v.12c0 .13.06.27.08.4a49.23 49.23 0 004.56-11c.24-.88.43-1.78.59-2.7a10.1 10.1 0 00.26-2.53z"/> </g> </g> </g>
            </GuitarImage>
            <Circle className="uno" onClick={() => {tunerStore.startSound(1)}}>1</Circle>
            <Circle className="dos" onClick={() => {tunerStore.startSound(2)}}>2</Circle>
            <Circle className="tres" onClick={() => {tunerStore.startSound(3)}}>3</Circle>
            <Circle className="cuatro" onClick={() => {tunerStore.startSound(4)}}>4</Circle>
            <Circle className="cinco" onClick={() => {tunerStore.startSound(5)}}>5</Circle>
            <Circle className="seis" onClick={() => {tunerStore.startSound(6)}}>6</Circle>
          </LeftBox>
          <RightBox>
            <LogoWrapper>
              <Logo src="/images/logo.svg" />
            </LogoWrapper>
            <Title>Afinador</Title>
            <Text>Mantener tu guitarra bien afinada es indispensable para lograr un buen sonido. Toca sobre cada número de cuerda para afinar tu guitarra. </Text>
            <Text className="disclaimer">Repítelo las veces que sea necesario.</Text>
            <VolumeContainer>
              <VolText>Volumen</VolText>
              <VolList>
                <VolItem className={classes({active: tunerStore.volume >= 0.25})} onClick={() => tunerStore.setVolume(0)} />
                <VolItem className={classes({active: tunerStore.volume >= 0.3})} onClick={() => tunerStore.setVolume(0.3)} />
                <VolItem className={classes({active: tunerStore.volume >= 0.6})} onClick={() => tunerStore.setVolume(0.6)} />
                <VolItem className={classes({active: tunerStore.volume >= 0.99})} onClick={() => tunerStore.setVolume(1)} />
              </VolList>
            </VolumeContainer>
          </RightBox>
        </TunerStyled>
      </TunerOverlay>
    </Portal>
  )
})