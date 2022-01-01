// サービス下層ページのパンくずリスト
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/components/topicPath.module.scss'

const LowerPageTopPlus = (props) => {

  return(
    <nav className={styles.topicPath}>
      <ul>
        <li>
          <Link to='/'>Top</Link>
        </li>
        <span><img src='/Assets/img/icon/arrow-rg.svg' alt='>' /></span>
        <li>
          <Link to ='/service'>Service</Link>
        </li>
        <span><img src='/Assets/img/icon/arrow-rg.svg' alt='>' /></span>
        <motion.li
        initial={{ opacity: 0, x: 20, }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .28, duration: .5, ease: 'easeInOut' }}
        exit={{ opacity: 0, x: 20, transition: { duration: .5, ease: 'easeInOut'}}}
        >
          <Link to={props.url}>{props.linkname}</Link>
        </motion.li>
      </ul>
    </nav>
  )
};

export default LowerPageTopPlus;