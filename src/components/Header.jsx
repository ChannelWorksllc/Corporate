// ヘッダー
import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/components/header.module.scss'

const spNavLists = [
  {url: '/', name: 'トップ'},
  {url: '/strength', name: '強みと特徴'},
  {url: '/service', name: 'サービス'},
  {url: '/works', name: '実績'},
  {url: '/contact_estimate', name: 'お見積り依頼'},
  {url: '/contact_us', name: 'お問い合わせ'}
]

const Header = () => {

  // spのメニュー開閉
  const [nav, setNav] = useState(false);
  const navOpen = () => {
    setNav(prev => !prev);
  }

  // url判定
  const location = useLocation();
  const [ style, setStyle ] = useState(location.pathname)
  useEffect(() => {
    setStyle(location.pathname)
  }, [ location.pathname ])

  return(
    <>
      <header className={styles.header}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1>
          <Link to='/'>
            <img src="/Assets/img/icon/logo.png" alt="Channel Works" />
          </Link>
        </h1>
        <nav className={styles.pcNav}>
          <ul>
            <li className={style === '/' ? styles.active : ''}>
              <Link to="/">Top<span>トップ</span></Link>
            </li>
            <li className={style === '/strength' ? styles.active : ''}>
              <Link to="/strength">Strength<span>強みと特徴</span></Link>
            </li>
            <li className={style === '/service' ? styles.active : ''}>
              <Link to="/service">Service<span>サービス</span></Link>
            </li>
            <li className={style === '/works' ? styles.active : ''}>
              <Link to="/works">Works<span>実績</span></Link>
            </li>
            <li className={style === '/company' ? styles.active : ''}>
              <Link to="/company">Company<span>会社情報</span></Link>
            </li>
            {/* <li>
              <a href='https://channelworks.biz/blog/'>Blog<span>ブログ</span></a>
            </li> */}
            <li className={style === '/contact_estimate' || style === '/contact_us' ? `${styles.active} ${styles.contact}` : styles.contact}>
              Contact<span>お問い合わせ</span>
              <ul>
                <li>
                  <Link to="/contact_estimate">お見積り依頼</Link>
                </li>
                <li>
                  <Link to="/contact_us">お問い合わせ</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={nav ? `${styles.open} ${styles.spNav}` : styles.spNav} onClick={() => navOpen()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={nav ? `${styles.nav} ${styles.open}` : styles.nav}>
          <ul>
            {spNavLists.map((list, index) => {
              return(
                <li key={index}>
                  <Link to={list.url} onClick={() => navOpen()}>{list.name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header