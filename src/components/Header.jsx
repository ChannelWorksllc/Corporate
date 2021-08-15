// ヘッダー

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  // url判定
  const location = useLocation();
  const linkTop = () => {
    if(location.pathname === '/') {
      return 'active';
    }
  }
  const linkStrength = () => {
    if(location.pathname === '/strength') {
      return 'active';
    }
  }
  const linkService = () => {
    if(location.pathname.match('/service')) {
      return 'active';
    }
  }
  const linkWorks = () => {
    if(location.pathname === '/works') {
      return 'active';
    }
  }
  const linkContact = () => {
    if(location.pathname.match('/contact')) {
      return 'active';
    }
  }
  const linkCompany = () => {
    if(location.pathname.match('/company')) {
      return 'active';
    }
  }

  const spNavLists = [
    {url: '/', name: 'トップ'},
    {url: '/strength', name: '強みと特徴'},
    {url: '/service', name: 'サービス'},
    {url: '/works', name: '実績'},
    {url: '/contact_estimate', name: 'お見積り依頼'},
    {url: '/contact_us', name: 'お問い合わせ'}
  ]

  const [nav, setNav] = useState(false);
  const navOpen = () => {
    setNav(!nav);
  }
  const setOpen = () => {
    if(nav) {
      return 'open';
    }
  }

  return(
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1>
          <Link to='/'>
            <img src="/Assets/img/icon/logo.png" alt="Channel Works" />
          </Link>
        </h1>
        <nav id='pc-nav'>
          <ul>
            <li className={linkTop()}>
              <Link to="/">Top<span>トップ</span></Link>
            </li>
            <li className={linkStrength()}>
              <Link to="/strength">Strength<span>強みと特徴</span></Link>
            </li>
            <li className={linkService()}>
              <Link to="/service">Service<span>サービス</span></Link>
            </li>
            <li className={linkWorks()}>
              <Link to="/works">Works<span>実績</span></Link>
            </li>
            <li className={linkCompany()}>
              <Link to="/company">Company<span>会社情報</span></Link>
            </li>
            <li>
              <a href='https://channelworks.biz/blog/'>Blog<span>ブログ</span></a>
            </li>
            <li className={linkContact()}>
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
        <div id='sp-nav' className={setOpen()} onClick={() => navOpen()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav id='nav' className={setOpen()}>
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
      </motion.header>
    </>
  )
}

export default Header