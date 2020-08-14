import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export const Portal = ({ children, selector }: {children: any, selector: string}) => {
  const ref = useRef<any>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(
    <motion.div
      initial={{opacity: 0, zIndex: 998}}
      animate={{opacity: 1, zIndex: 998}}
      exit={{opacity: 0}}
      transition={{duration: .2}}
    >
      {children}
    </motion.div>
  , ref.current) : null
}