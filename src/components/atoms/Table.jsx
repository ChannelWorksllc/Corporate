// sp版で下層ページに設置した目次

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll, Link } from 'react-scroll';

const Table = (props) => {
  
  const { ref, inView } = useInView({
    rootMargin: '-60px 60px'
  })
  const [click, setClick] = useState(false);
  const scrollTop = () => {
    scroll.scrollToTop();
    setClick(!click);
  }
  const openIndex = () => {
    if(click) {
      return 'open';
    }
  }

  return (
    <div id='page-index' ref={ ref } className={ inView ? 'show' : '' }>
      <nav className={openIndex()}>
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