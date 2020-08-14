import { Portal } from '../components/portal';
import { Tuner } from '../components/tuner';
import { Layout } from '../components/layout';

import { Container } from '../components/layout/layout.styles'

const Afinador = () => {
  return (
    <Layout>
      <Container>
        <Portal selector="body">
          <Tuner onClose={() => {}} />
        </Portal>
      </Container>
    </Layout>
  )
}

export default Afinador;