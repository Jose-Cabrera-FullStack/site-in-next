import React from 'react';
import axios from 'axios';
import https from 'https';
import { NextPage } from 'next';
import { parseCookies } from 'nookies';
import Link from 'next/link';
import Error from 'next/error';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { AwardsBox } from '../../components/awardsbox';
import { LessonList } from '../../components/lessonlist';
import { Button } from '../../components/button';
import { ModalSubscribe } from '../../components/modalsubscribe';

import { CourseHeader, CourseHeaderLogged } from '../../components/pages/courseheader';

import { Layout } from '../../components/layout';
import { 
  Container,
  SmallTitle
} from '../../components/layout/layout.styles';

import { 
  Section, BackContainer, BackLink,
  BackIcon, Title, ButtonContainer, TextNumber,
  Divider, SectionTitle, ContentText,
  SectionSubtitle, ClassList,
  ClassItem, ItemHeader, PlayBtn,
  ItemText, ItemIcon, CompletedCheck,
  ItemContent, LearnList, LearnItem,
} from '../../components/pages/course.styles';

import { classes, API_URI } from '../../helpers';

interface Props {
  course?: any;
  children?: any;
  logged?: boolean;
}

const Curso: NextPage = observer(({course, logged}: Props) => {
  if(!course) return <Error statusCode={404} />

  const [active, setActiveB] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const { rootStore: {userStore} } = useStores()
  const router = useRouter();

  const setActive = (n: number) => {
    if(n === active) n = -1;
    setActiveB(n);
  }

  const hasPermisson = (k: number) => {
    if(!course.lessons[k].free && !userStore.subscripted){
      setOpen(true);
    } else {
      router.push(`/video/${course.slug}/${k + 1}/`)
    }
  }


  return (
    <Layout>
      <Section>
        <Container className="fullwidth-m">
          <BackContainer>
            <BackIcon width="26" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM26 7H1v2h25V7z" fill="#4F4F4F"/></BackIcon>
            <Link href="/cursos" passHref><BackLink>Volver a los cursos</BackLink></Link>
          </BackContainer>
          {!logged && <Title>{course.title}</Title>}
          {!logged && <CourseHeader course={course} />}
          {logged && <CourseHeaderLogged course={course} />}
          <Divider />
        </Container>
      </Section>
      <Section className="no-space">
        <Container>
          <SectionTitle>Sobre este curso</SectionTitle>
          <SectionSubtitle>{course.description}</SectionSubtitle>
        </Container>
      </Section>
      <Section className="no-space smaller-space">
        <Container>
          <SectionTitle>Clases</SectionTitle>
          <ClassList>
            {course.lessons && course.lessons.map((item: any, k: number) => {
              return (
                <ClassItem key={k} className={classes({free: item.free || userStore.subscripted, active: active === k, complete: item.complete})}>
                  <PlayBtn onClick={() => hasPermisson(k)} />
                  <ItemHeader onClick={() => setActive(k)}>
                    <ItemText>
                      {item.complete && <CompletedCheck width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><path d="M9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19z" fill="#E8833F"/><path d="M7.073 13.786l4.884 4.884C16.003 17.591 19 13.905 19 9.5v-.27l-3.836-3.536-8.091 8.091z" fill="#D16115"/><path d="M9.74 11.628c.42.42.42 1.139 0 1.558l-.87.87c-.419.419-1.138.419-1.558 0l-3.806-3.837a1.122 1.122 0 010-1.558l.87-.87c.419-.419 1.138-.419 1.558 0l3.806 3.837z" fill="#fff"/><path d="M13.066 5.005c.42-.42 1.139-.42 1.558 0l.87.869c.42.42.42 1.139 0 1.558L8.9 13.995c-.42.42-1.14.42-1.559 0l-.869-.869a1.122 1.122 0 010-1.558l6.593-6.563z" fill="#fff"/></CompletedCheck>}
                      <TextNumber>{k + 1}.&nbsp;&nbsp;</TextNumber>{item.title}
                    </ItemText>
                    <ItemIcon width="12" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L.804 0h10.392L6 9z" fill="#828282"/></ItemIcon>
                  </ItemHeader>
                  <ItemContent>
                  <ContentText>{item.description}</ContentText>
                  </ItemContent>
                </ClassItem>
              )
            })}
          </ClassList>
        </Container>
      </Section>
      {course?.prizes?.items.length > 0 && <Section className="no-space smaller-space">
        <Container>
          <SectionTitle>Gana premios con tu progreso</SectionTitle>
          <SectionSubtitle>Consigue premios a medida que avanzas con tus cursos. Conviértete en un verdadero guitarrista con accesorios y guitarras profesionales.</SectionSubtitle>
          <AwardsBox items={course.prizes.items} />
        </Container>
      </Section>}
      <Section className="no-space smaller-space">
        <Container>
          <SectionTitle>Lo qué aprenderas</SectionTitle>
          <LearnList>
            {course?.learnItems?.map((item: {title: string}, k: number) => (
              <LearnItem key={k}>{item.title}</LearnItem>
            ))}
          </LearnList>
        </Container>
      </Section>
      {!userStore.logged && <Section className="no-space smaller-space">
        <Container>
          <ButtonContainer>
            <Button 
              title="Suscribirme ahora"
              to="/suscripciones"
              color="lightOrange"
            />
          </ButtonContainer>
        </Container>
      </Section>
      }
      {course?.recommended.length > 0 && <Section className="no-space smaller-space">
        <Container>
          <SmallTitle>Recomendados</SmallTitle>
          <LessonList lessons={course?.recommended} />
        </Container>
      </Section>}
      {open && <ModalSubscribe 
        onClose={() => {setOpen(false)}}
      />}
    </Layout>
  );
});

Curso.getInitialProps = async (ctx) => {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  const { tcdgToken } = parseCookies(ctx);
  try {
    const { data } = await axios.get(`${API_URI}/course/detail/${ctx.query.slug ? ctx.query.slug : ''}`, {
      headers: tcdgToken ? { Authorization: tcdgToken } : {},
      httpsAgent: agent
    })
    let logged = false
    if(tcdgToken) logged = true
    return {
      course: data,
      logged: logged
    }
  } catch (error) {
    console.log(error)
    if (ctx.res) {
      ctx.res.statusCode = 404
      return {
        course: undefined
      }
    }
  }
}

export default Curso;
