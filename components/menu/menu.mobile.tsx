import React from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import { MenuItem as MenuItemType, MenuGroup } from '../../typing';

import { useStores } from '../../stores/hooks';
import { useRouter } from 'next/router';

import {
  MobileNav, MobileLeft,
  MobileNavButton, MobileNavContent,
  MobileButtonBar, MobileNavLogButton,
  MobileNavLogo, TextLog,
  MobileNavSuscribeButton,
  MobileNavMenu, NavSubDropdown, 
  NavSubDropdownItem, MobileNavItem,
  MobileNavLink, MobileProfile,
  NavDropdown, ProfileImage,
  NavDropdownTitle, ProfileName, ProfileLink
} from './menu.mobile.styles'

import { classes } from '../../helpers';
// import { useMergeState } from '../../helpers/hooks';

export const MenuMobile = observer(() => {
  const [num, setNumB] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [openCursos, setOpenCursos] = React.useState(false);

  const { rootStore: {userStore, menuStore} } = useStores();
  const router = useRouter();
  

  const setNum = (n: number) => {
    if(n === num) n = -1;
    setNumB(n)
  }

  return (
    <>
      <MobileNav className={classes({open})}>
        <MobileLeft>
          <MobileNavButton onClick={() => setOpen(!open)}>
            <MobileButtonBar />
            <MobileButtonBar />
            <MobileButtonBar />
          </MobileNavButton>
          <Link href="/"><MobileNavLogo src="/images/logo.svg" /></Link>
        </MobileLeft>
        <MobileLeft>
          <MobileNavSuscribeButton className="blue" onClick={() => router.push(userStore.logged ? '/perfil' : '/signin')}>
            {userStore.logged ? "Mi cuenta" : "Ingresar"}
          </MobileNavSuscribeButton>
          <MobileNavSuscribeButton onClick={() => router.push(userStore.logged ? '/cursos' : '/suscripciones')}>
            {userStore.logged ? "Aprender" : "Suscribirme!"}
          </MobileNavSuscribeButton>
        </MobileLeft>
      </MobileNav>
      <MobileNavContent className={classes({open})}>
        <MobileNav>
          <MobileNavButton onClick={() => setOpen(!open)}>
          {/* <MobileNavButton onClick={() => setValues({open: !values.open})}> */}
            <MobileButtonBar style={{backgroundColor: 'white'}} />
            <MobileButtonBar style={{backgroundColor: 'white'}} />
          </MobileNavButton>
          <Link href="/"><MobileNavLogo src="/images/logo-white.svg" /></Link>
        </MobileNav>
        {userStore.user && <MobileProfile>
          <ProfileImage src={userStore.user.avatar} />
          <ProfileName>{userStore.user.name}</ProfileName>
          <Link href="/perfil"><ProfileLink className="mtop">Mi cuenta</ProfileLink></Link>
          <Link href="/cursos"><ProfileLink>Aprender</ProfileLink></Link>
          <ProfileLink className="logout mtop" onClick={() => {userStore.logout(() => router.push('/'))}}>Cerrar sesión</ProfileLink>
        </MobileProfile>}
        <MobileNavMenu className={classes({mtop: !userStore.logged})}>
          <MobileNavItem className="has-dropdown">
            <MobileNavLink onClick={() => setOpenCursos(!openCursos)}>Cursos</MobileNavLink>
            <NavDropdown className={classes({open: openCursos})}>
            {menuStore.data?.categories?.map((menu: MenuGroup, k: number) => (
              <React.Fragment key={k}>
                <NavDropdownTitle className={classes('mtop', {open: num === k})} onClick={() => setNum(k)}>{menu.title}</NavDropdownTitle>
                <NavSubDropdown className={classes({open: num === k})}>
                  {menu.courses?.map((item: MenuItemType, j) => (
                    <Link href="/curso/[slug]" as={`/curso/${item.slug}`} passHref key={j}><NavSubDropdownItem>{item.title}</NavSubDropdownItem></Link>
                  ))}
                </NavSubDropdown>
              </React.Fragment>
            ))}
            {menuStore.data?.songs?.length > 0 && <React.Fragment>
              <NavDropdownTitle className={classes('mtop', {open: num === 100})} onClick={() => setNum(100)}>Canciones</NavDropdownTitle>
              <NavSubDropdown className={classes({open: num === 100})}>
              {menuStore.data?.songs?.map((item: any, k: number) => (
                <Link href="/cancion/[slug]" as={`/cancion/${item.slug}`} passHref key={k}><NavSubDropdownItem>{item.title}</NavSubDropdownItem></Link>
              ))}
              </NavSubDropdown>
            </React.Fragment>}
            </NavDropdown>
          </MobileNavItem>
          <MobileNavItem>
            <Link href="/suscripciones" passHref><MobileNavLink>Suscripciones</MobileNavLink></Link>
          </MobileNavItem>
          <MobileNavItem>
            <Link href="/contacto" passHref><MobileNavLink>Contacto</MobileNavLink></Link>
          </MobileNavItem>
          <MobileNavItem>
            <Link href="/preguntas-frecuentes" passHref><MobileNavLink>Preguntas Frecuentes</MobileNavLink></Link>
          </MobileNavItem>
        </MobileNavMenu>
        {!userStore.subscripted &&
        <MobileLeft className="bottom">
          <TextLog>Decide cuándo, dónde y cómo quieres tomar tus clases.</TextLog>
          <MobileNavLogButton className="subscribe" onClick={() => router.push('/suscripciones')}>Suscribirme</MobileNavLogButton>
        </MobileLeft>
        }
      </MobileNavContent>
    </>
  )
})