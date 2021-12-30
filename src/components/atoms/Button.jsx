// サイト内リンクのボタン

import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Button = (props) => {

  return(
    <Link to={{ pathname: props.url }}>
      <span>
        {props.name}
      </span>
    </Link>
  )

}

export default Button;