// 下層ページで関連するページへのリンク

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const LinkRelatedContent = (props) => {

  const location = useLocation();
  const relatedTags = () => {
    if(location.pathname === props.link.url) {
      return 'active';
    };
  }

  return(
    <li key={props.index} className={classNames(['lists', relatedTags()])}>
      <Link to={{ pathname: props.link.url }}>{props.link.name}</Link>
    </li>
  )
};

export default LinkRelatedContent;