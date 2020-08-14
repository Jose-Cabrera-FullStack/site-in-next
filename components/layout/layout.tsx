import { motion } from 'framer-motion';

import { Global } from '../global';
import { Menu, MenuMobile } from '../menu';
import { Footer } from '../footer';
// import dynamic from "next/dynamic";
// const MenuMobile = dynamic(import("../menu/menu.mobile"));
interface Props {
  children?: any;
  noFooter?: boolean;
  noMenu?: boolean;
  menu?: any;
  backToTop?: boolean;
}


export const Layout = ({children, noFooter = false, noMenu = false, menu = {}, backToTop = true}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{}}
    >
      <Global /> 
      {!noMenu && <>
        <MenuMobile />
        <Menu learn={menu.learn} />
      </>}
      {children}
      <Footer noFooter={noFooter} backToTop={backToTop} />
    </motion.div>
  )
}