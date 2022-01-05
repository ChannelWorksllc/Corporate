// トップへ戻るボタン

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll';
import styles from '../../styles/components/scrollTop.module.scss'

const ScrollToTop = () => {

  const { ref, inView } = useInView({
    rootMargin: '-60px 60px',
  })

  return(
    <div id="scroll-top" ref={ ref } className={ inView ? styles.scrollTop : `${styles.scrollTop} ${styles.show}`}>
      <div onClick={() => scroll.scrollToTop()}>
        <img src="/Assets/img/icon/arrow-u.svg" alt='↑' />
      </div>
    </div>
  )
}

export default ScrollToTop;