// 下層ページのトップ部分

import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

const mainVariants = {
  initial: { 
    opacity: 0
  },
  animate: { 
    opacity: 1, transition: { delay: .28, duration: 1, ease: 'easeInOut' } 
  },
  exit: {
    opacity: 0, 
    transition: { duration: .2, ease: 'easeInOut'}
  }
}

const LowerPageTop = (props) => {

  const location = useLocation();
  const icon = () => {
    if(location.pathname.match('/service/')) {
      return 'show';
    };
  }

  return(
    <>
      <div>
        <motion.h1
          variants={mainVariants}
          initial='initial'
          animate='animate'
          exit={{
            opacity: 0,
            y: 50,
            transition: { duraition: .2, ease: 'easeInOut' }
          }}
        >
          {props.titleja}
        </motion.h1>
        <motion.h2
          variants={mainVariants}
          initial='initial'
          animate='animate'
          exit={{
            opacity: 0,
            y: 50,
            transition: { duraition: .2, ease: 'easeInOut' }
          }}
        >
          {props.titleen}
        </motion.h2>
        <motion.p
          variants={mainVariants}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: .3, duration: 1, ease: 'easeInOut' }}}
          exit={{
            opacity: 0,
            y: 50,
            transition: { duraition: .2, ease: 'easeInOut'}
          }}
        >
          {props.text}
          <img src={props.icon} alt={props.text} className={icon()} />
        </motion.p>
      </div>
      <motion.div
        variants={mainVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <img src={props.img} alt={props.alt} />
        <ul>
          {props.content.map((content, index) => {
            return(
              <motion.li key={index}
                initial={{ opacity: 0, x: 30, visibility: 'hidden' }}
                animate={{ opacity: 1, x: 0, visibility: 'visible', transition: { delay: .3, duration: 1, ease: 'easeInOut' } }}
                exit={{ opacity: 0, transition: {duration: .2, ease: 'easeInOut' }}}
              >
                <Link to={content.to} smooth={true} duration={1000}>
                  {content.text}
                </Link>
              </motion.li>
              )
          })}
        </ul>
      </motion.div>
    </>
  )
};

export default LowerPageTop;