// フッター
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/footer.module.scss'

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link to="/strength">強みと特徴</Link>
          </li>
          <li>
            <Link to="/service">サービス</Link>
          </li>
          <li>
            <Link to="/company">会社情報</Link>
          </li>
        </ul>
        <div>
          <Link to="/">
            <img src="/Assets/img/icon/logo.png" alt="Channel Works" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/works">実績</Link>
          </li>
          <li>
            <Link to="/contact_estimate">お見積り依頼</Link>
          </li>
          <li>
            <Link to="contact_us">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <div>
        <small>&copy; Channel Works</small>
      </div>
    </footer>
  )
}

export default Footer;