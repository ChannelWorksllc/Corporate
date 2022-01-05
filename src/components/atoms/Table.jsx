// sp版で下層ページに設置した目次

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll, Link } from 'react-scroll';
import styles from '../../styles/components/table.module.scss'

const Table = (props) => {
  
  const { ref, inView } = useInView({
    rootMargin: '-60px 60px'
  })
  const [click, setClick] = useState(false);
  const scrollTop = () => {
    scroll.scrollToTop();
    setClick(!click);
  }

  return (
    <div ref={ ref } className={ inView ? styles.pageIndex : `${styles.pageIndex} ${styles.show}` }>
      <nav className={ click ? styles.open : "" }>
        <span onClick={() => setClick(!click)}>目次</span>
        <ul>
          <li onClick={() => scrollTop()}>ページトップ</li>
          {props.contents.map((content, index) => {
            return (
              <li key={index}>
                <Link to={content.to} smooth={true} duration={1000} onClick={() => setClick(!click)}>
                  {content.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Table;