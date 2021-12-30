// パンくずリスト

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../../styles/components/topicPath.module.scss'

const TopicPath = (props) => {
  return(
    <nav className={styles.topicPath}>
      <ul>
        <li>
          <Link to='/'>Top</Link>
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
}

export default TopicPath