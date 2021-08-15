// サイト内リンクのボタン

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Button = (props) => {

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return(
  <Link to={{ pathname: props.url }} data-aos='fade'>
    <span>
      {props.name}
    </span>
  </Link>
  )
}

export default Button;