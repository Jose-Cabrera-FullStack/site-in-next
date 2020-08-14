import React from 'react';

import { 
  Wrapper, Text, Link
} from './iemodal.styles'

export const IEModal = () => (
  <Wrapper className="outdated-modal">
    <Text>Para disfrutar de los cursos TCDG Premium te recomiendo que instales Google Chrome <Link href="https://www.google.com/chrome/" target="_blank">aquí</Link>. Este navegador ya tiene unos años y no es soportado por la plataforma.</Text>
  </Wrapper>
)