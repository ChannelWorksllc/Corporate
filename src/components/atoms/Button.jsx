// サイト内リンクのボタン
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/button.module.scss'

const Button = (props) => {

  return(
    <Link to={{ pathname: props.url }} className={styles.button}>
      <span>
        {props.name}
      </span>
    </Link>
  )

}

export default Button;