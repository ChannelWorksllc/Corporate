// 下層ページで関連するページへのリンク
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/components/linkRelatedContent.module.scss'

const LinkRelatedContent = (props) => {
  const location = useLocation();

  const [ active , setActive ] = useState(false)
  useEffect(() => {
    if(location.pathname === props.link.url) {
      setActive(prev => !prev)
    };
  }, [props.link.url, location.pathname])

  return(
    <li key={props.index} className={active ? `${styles.lists} ${styles.active}` : styles.lists}>
      <Link to={{ pathname: props.link.url }}>{props.link.name}</Link>
    </li>
  )
};

export default LinkRelatedContent;