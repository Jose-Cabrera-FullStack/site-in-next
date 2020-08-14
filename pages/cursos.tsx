import React from 'react';
import axios from 'axios';
import https from 'https';
import { NextPage } from 'next';
import { parseCookies } from 'nookies';
import { observer } from 'mobx-react-lite';
import { Layout } from '../components/layout';
import { Button } from '../components/button';
import { LessonList } from '../components/lessonlist';
import { SubscribeBox } from '../components/subscribebox';
import { SongsList } from '../components/songslist';
import { AwardsBox } from '../components/awardsbox';
import { API_URI } from '../helpers';
import { 
  Container,
  SmallTitle,
  SmallSubtitle
 } from '../components/layout/layout.styles';

 import {
  Section, HeaderSection, Divider,
  HeaderContent, ContentImage,
  ContentTitle, ContentSubtitle,
  ContentText, FilterContainer,
  FilterTitle, FormContainer, InputContainer,
  Label, Input, TitleIcon, PrizeImage,
  PrizesList, PrizeItem, PrizeDescription
} from '../components/pages/courses.styles';

import { classes } from '../helpers';
import { useStores } from '../stores/hooks';
import { coursesPage as coursesPageData } from '../services';


const Courses: NextPage = observer(({}: any) => {

  const { rootStore: { userStore, coursesStore }} = useStores();

  let numCursos = 0;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<any>(undefined)

  React.useEffect(() => {
    console.log('the data is there', coursesStore.categories)
    coursesPageData(
      (data) => {
        console.log('return data', data)
        setData(data)
        if(!coursesStore.categories){
          coursesStore.setCategoriesArray(data.categories)
        }
      },
      (data) => {
        console.log('return error data', data)
      },
    )
  }, [coursesStore])

  React.useEffect(() => {
    const c = setTimeout(() => {
      if(userStore.user?.musical_preferences){
        clearInterval(c)
        if(userStore.user?.musical_preferences?.length > 0){
          coursesStore.setCategoriesFromUser(userStore.user.musical_preferences)
        }
      }
    }, 100)
  }, [coursesStore, userStore])

  // if(!data || !coursesStore.categories){
  //   return <div></div>
  // }

  return (
    <Layout menu={{learn: true}}>
      <HeaderSection>
        <Container>
          <HeaderContent>
            <ContentImage src="/images/mario-pp.png" />
            <ContentText>
              {userStore.logged ?
                <>
                  <ContentTitle className="mt">Hola{userStore.user?.name ? ` ${userStore.user.name}` : ''}!</ContentTitle>
                  <ContentSubtitle>Bienvenido/a!</ContentSubtitle>
                </>
                :
                <>
                  <ContentTitle>Estás a un solo paso de comenzar!</ContentTitle>
                  <ContentSubtitle>Anímate y date el gusto de aprender a tocar guitarra hoy.</ContentSubtitle>
                </>
              }
              {!userStore.subscripted && <Button 
                title="Suscribirme"
                color="orange"
                to="/suscripciones"
              />}
            </ContentText>
          </HeaderContent>
        </Container>
      </HeaderSection>
      <Section className={classes('no-space', {'m-grey': userStore.logged})}>
        <Container>
          <FilterContainer>
            <FilterTitle onClick={() => setOpen(!open)}>
              {open ? "Selecciona tus gustos musicales" : `Tus gustos musicales: ${coursesStore.categories ? coursesStore.categories?.filter((item: {name: string, slug: string}, k: number) => coursesStore.filteredCategories.includes(item.slug)).map((item: {name: string}) => ` ${item.name}`) : ''}${coursesStore.filteredCategories.includes('all') ? 'Todos': ''}`}
              <TitleIcon className={classes({open})} width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="12.5" r="12.5" transform="rotate(-90 12.5 12.5)" fill="#1B71BF"/><path d="M12.146 18.41a.5.5 0 00.708-.001l3.181-3.182a.5.5 0 10-.707-.707L12.5 17.348 9.672 14.52a.5.5 0 10-.708.707l3.182 3.182zM12 5.555v12.5h1v-12.5h-1z" fill="#fff"/></TitleIcon>
            </FilterTitle>
            <FormContainer className={classes({open})}>
              <InputContainer>
                <Input type="checkbox" name="all" id="all" checked={coursesStore.filteredCategories.includes('all')} onChange={(e: any) => {coursesStore.setCategories('all', e.target.checked)}} />
                <Label htmlFor="all">Todos</Label>
              </InputContainer>
              {coursesStore?.categories?.map((item: {name: string, slug: string}, k: number) => (
                <InputContainer key={k}>
                  <Input type="checkbox" name={item.slug} id={item.slug} checked={coursesStore.filteredCategories.includes(item.slug)} onChange={(e: any) => {coursesStore.setCategories(item.slug, e.target.checked)}} />
                  <Label htmlFor={item.slug}>{item.name}</Label>
                </InputContainer>
              ))}
            </FormContainer>
          </FilterContainer>
        </Container>
      </Section>
      {userStore.logged && data?.courses?.continue?.length > 0 && 
        <Section>
          <Container>
            <SmallTitle className="orange">Continuar aprendiendo</SmallTitle> 
            <LessonList lessons={data?.courses?.continue} logged={userStore.logged} />
          </Container>
        </Section>
      }
      {
        data?.categories?.map((item: any, k: number) => {
          if((!coursesStore.filteredCategories.includes('all') && !coursesStore.filteredCategories.includes(item.slug)) || item.courses.length === 0){
            return <React.Fragment key={k}></React.Fragment>
          }
          numCursos++;
          return (
            <React.Fragment key={k}>
              <Section key={k}>
                <Container>
                  <SmallTitle>{item.name}</SmallTitle>
                  <SmallSubtitle>{item.description}</SmallSubtitle>
                  <LessonList lessons={item.courses} logged={userStore.logged} />
                </Container>
              </Section>
              {(k === 1) && userStore.user && !userStore.subscripted &&
                <Section>
                  <Container>
                    <SubscribeBox 
                      title={{text: "Decide cuándo, dónde y cómo quieres tomar tus clases."}} 
                      button={{title: "Suscribirme"}}
                    />
                  </Container>
                </Section>
              }
              {(k === 1) && userStore.logged && 
                <Section>
                  <Container>
                    <SmallTitle>{data?.userPrizes?.length > 0 ? 'Tus premios ganados' : 'Premios que puedes ganar'}</SmallTitle>
                    {data?.userPrizes?.length > 0 ?
                      <AwardsBox items={data?.userPrizes} />
                      :
                      <PrizesList>
                        <PrizeItem>
                          <PrizeImage src="/images/guitar2.svg" />
                          <PrizeDescription>A medida que avances con tus cursos obtendrás premios , guitarras y accesorios profesionales. Por el momento, comencemos con una guitarra criolla!</PrizeDescription>
                        </PrizeItem>
                      </PrizesList>
                    }
                  </Container>
                </Section>
              }
              {(k === 3) && data?.songs?.length > 0 &&
                <Section>
                  <Container>
                    <SmallTitle>Canciones Populares</SmallTitle>
                    <SmallSubtitle>Las canciones más descatadas de cada género musical.</SmallSubtitle>
                    <SongsList songs={data?.songs} categories={data?.categoriesSongs} />
                  </Container>
                </Section>
              }
            </React.Fragment>
          )
        })
      }
      {numCursos < 2 && userStore.logged && 
        <Section>
          <Container>
            <SmallTitle>{data?.userPrizes?.length > 0 ? 'Tus premios ganados' : 'Premios que puedes ganar'}</SmallTitle>
            {data?.userPrizes?.length > 0 ?
              <AwardsBox items={data?.userPrizes} />
              :
              <PrizesList>
                <PrizeItem>
                  <PrizeImage src="/images/guitar2.svg" />
                  <PrizeDescription>A medida que avances con tus cursos obtendrás premios , guitarras y accesorios profesionales. Por el momento, comencemos con una guitarra criolla!</PrizeDescription>
                </PrizeItem>
              </PrizesList>
            }
          </Container>
        </Section>
      }
      {numCursos < 4 && data?.songs?.length > 0 &&
        <Section>
          <Container>
            <SmallTitle>Canciones Populares</SmallTitle>
            <SmallSubtitle>Las canciones más descatadas de cada género musical.</SmallSubtitle>
            <SongsList songs={data?.songs} categories={data?.categoriesSongs} />
          </Container>
        </Section>
      }
      {userStore.logged && data?.courses?.backLearn?.length > 0 &&
        <Section>
          <Container>
            <SmallTitle className="orange">Volver a aprender</SmallTitle>
            <LessonList lessons={data?.courses?.backLearn} logged={userStore.logged} />
          </Container>
        </Section>
      }
      {data?.courses && data?.courses?.new?.length > 0 &&
        <Section>
          <Container>
            <SmallTitle>Cursos recientemente agregados</SmallTitle>
            <LessonList lessons={data?.courses?.new} logged={userStore.logged} />
          </Container>
        </Section>
      }
    </Layout>
  )
});

export default Courses;