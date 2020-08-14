import React from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import { MenuItem as MenuItemType, MenuGroup } from '../../typing';

import { useStores } from '../../stores/hooks';
import { useRouter } from 'next/router';

import {
  Nav, Row, Logo,
  LogoImage, MenuList,
  MenuItem, ItemText,
  Submenu, SubmenuTitle,
  SubmenuGroup
} from './menu.styles'

import { classes } from '../../helpers';

interface Props {
  learn?: boolean;
}

export const Menu = observer(({learn = false}: Props) => {

  const { rootStore: {userStore, menuStore} } = useStores();
  const router = useRouter();

  React.useEffect(() => {
    menuStore.loadData()
  }, [menuStore])

  return (
    <Nav>
      <Row>
        <Link href="/" passHref>
          <Logo>
            <LogoImage src="/images/logo-menu.png" />
          </Logo>
        </Link>
        <MenuList>
          <MenuItem className="has-dropdown has-orange-hover cursos-has-dropdown">
            <Link href="/cursos" passHref><ItemText>Cursos</ItemText></Link>
            <Submenu className="submenu cursos-menu">
              {menuStore.data?.categories.map((menu: MenuGroup, k: number) => (
                <SubmenuGroup key={k}>
                  <SubmenuTitle>{menu.title}</SubmenuTitle>
                  {menu.courses.map((item: MenuItemType, j) => (
                    <MenuItem key={j+k}>
                      <Link href="/curso/[slug]" as={`/curso/${item.slug}`} passHref><ItemText>{item.title}</ItemText></Link>
                    </MenuItem>
                  ))}
                </SubmenuGroup>
              ))}
              {menuStore.data?.songs?.length > 0 && <SubmenuGroup>
                <SubmenuTitle>Canciones</SubmenuTitle>
                {menuStore.data?.songs?.map((item: any, k: number) => (
                  <MenuItem key={k}>
                    <Link href="/cancion/[slug]" as={`/cancion/${item.slug}`} passHref><ItemText>{item.title}</ItemText></Link>
                  </MenuItem>
                ))}
              </SubmenuGroup>}
            </Submenu>
          </MenuItem>
          <MenuItem className="has-orange-hover"><Link href="/contacto" passHref><ItemText>Contacto</ItemText></Link></MenuItem>
          <React.Fragment>
            <MenuItem className={classes("login", {"has-dropdown": userStore.user})}>
              <Link href={userStore.user ? "/perfil" : "/signin"} passHref><ItemText>{userStore.user ? "Mi cuenta" : "Ingresar"}</ItemText></Link>
              <Submenu className="submenu">
                <MenuItem><Link href="/perfil" passHref><ItemText>Editar</ItemText></Link></MenuItem>
                <MenuItem onClick={() => userStore.logout(() => router.push('/'))}><ItemText>Cerrar sesion</ItemText></MenuItem>
              </Submenu>
            </MenuItem>
            <MenuItem className={classes('subscribe')}><Link href={userStore.user ? "/cursos" : "/suscripciones"} passHref><ItemText>{userStore.user ? "Aprender" : "Suscribirme"}</ItemText></Link></MenuItem>
          </React.Fragment>
        </MenuList>
      </Row>
    </Nav>
  )
})