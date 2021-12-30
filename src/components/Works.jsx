// 実績ページ

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import MediaQuery from 'react-responsive';
import LowerPageTop from './atoms/LowerPageTop';
import TopicPath from './atoms/TopicPath';
import Data from '../json/works.json'
import Blog from './atoms/Blog';
import ScrollToTop from './atoms/ScrollToTop';
import Table from './atoms/Table';

const Works = () => {

  // ページ内リンク
  const contents = [
    {text: '実績紹介', to: 'works'},
    {text: '関連記事', to: 'blog'}
  ]

  // この下からjsonファイルを読み出しに関する処理
  const [worksData, setWorksData] = useState([]);
  const [visible, setVisible] = useState(4);
  const [title, setTitle] = useState('すべて');
  const [style, setStyle] = useState(0);
  const [change, setChange] = useState('active');

  const location = useLocation();

  // すべての実績を読み込む
  const everyWroksData = () => {

    setStyle(0);
    setChange('');
    setTimeout(function(){
      setWorksData(Data);
      setChange('active');
      setTitle('すべて');
    }, 300)

  }

  // カテゴリーごとに読み込む
  const eachWorksData = (category, index) => {

    const data = Data.filter(item => item.category.includes(category));
    setChange('');
    setTimeout(function(){
      setWorksData(data);
      setChange('active');
      setTitle(category);
    }, 300)

    setStyle(index);
  }

  // 読み込む数
  const loadMore = () => {
    setVisible(visible + 4);
  }

  const [article, setArticle] = useState([]);
  const [ajaxError, setAjaxError] = useState(false);

  // 読み込まれたとき、または実績コンテンツからとんで来た場合の処理
  useEffect(() => {
    const allWorksData = () => {
      // 実績コンテンツからとんで来た場合は、その実績をいちばん上に並び替える
      Data.sort(function(a, b) {
        if(location.state === a.id) return -1;
        if(location.state === b.id) return 1;
        return 0
      })

      if(location.state !== undefined) {
        scroll.scrollTo(500);
      }
      
      setWorksData(Data);
      setTitle('すべて');
      setStyle(0);
    }
    allWorksData();
    document.title='実績 | Channel Works';

    // ブログ記事の取得
    const RssParser = require('rss-parser');
    const url = 'https://channelworks.biz/blog/feed/';
    const rssParser = new RssParser();
  
    rssParser.parseURL(url)
      .then((feed) => {
        const data = feed.items;
        setArticle([...data]);
      })
      .catch((error) => {
        console.log(error);
        setAjaxError(true); // ajax通信に失敗した場合は、メッセージを表示
      })

  }, [location.state])

  const mainVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: { delay: .28, duration: 1, ease: 'easeInOut'  }
    },
    exit: {
      opacity: 0, 
      transition: { duration: .2, ease: 'easeInOut'}
    }
  }

  // 各実績の表示構造
  const renderWorks = (work, index) => {
    return(
      <article key={index} className={change}>
        <div>
          <p className="title">{work.client} 様</p>
          <h4>{work.title}</h4>
          <a href={work.url}>{work.url}</a>
          <ul>
            {work.category.map((category, num) => {
              return(
                <li key={num}>{category}</li>
              )
            })}
          </ul>
          <p className="text">{work.text}</p>
          <p className="text">プロジェクト期間：{work.period}</p>
        </div>
        <div>
          <img src={work.img} alt={work.client} />
        </div>
      </article>
    )
  }

  return(
    <>

      <nav id='topic-path'>
        <TopicPath 
          url = '/works'
          linkname = 'Works'
        />
      </nav>

      <section id='lowerpage-top'>
        <LowerPageTop
          titleja = '実績紹介'
          titleen = 'Works'
          text = 'さまざまな知見やスキルでご支援します。'
          img = './Assets/img/works/works01.jpg'
          alt= '実績紹介'
          icon = ''
          content = { contents }
        />
        <motion.nav id="category" 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition:{ delay: .28, duraition: .5 } }}
          exit={{ opacity:0, y: 10 ,transition: { duration: .2, ease: 'easeInOut' } }}
        >
          <ul>
            <li className={style === 0 ? 'active' : ''} onClick={everyWroksData}>すべて</li>
            <li className={style === 1 ? 'active' : ''} onClick={() => eachWorksData('マーケティング戦略', 1)}>マーケティング戦略</li>
            <li className={style === 2 ? 'active' : ''} onClick={() => eachWorksData('UI/UX設計', 2)}>UI/UX設計</li>
            <li className={style === 3 ? 'active' : ''} onClick={() => eachWorksData('サイト制作', 3)}>サイト制作</li>
            <li className={style === 4 ? 'active' : ''} onClick={() => eachWorksData('システム開発', 4)}>システム開発</li>
            <li className={style === 5 ? 'active' : ''} onClick={() => eachWorksData('コンテンツ開発', 5)}>コンテンツ開発</li>
            <li className={style === 6 ? 'active' : ''} onClick={() => eachWorksData('イメージ制作', 6)}>イメージ制作</li>
          </ul>
        </motion.nav>
      </section>

      <motion.section id="works"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 className={change} id="link">{title}の実績</h3>
        {worksData.slice(0, visible).map(renderWorks)}
        {visible < worksData.length &&(
          <button onClick={loadMore}>もっとみる</button>
        )}
      </motion.section>

      <motion.section className="blog" id='blog'
        variants={ mainVariants }
        initila='initial'
        animate='animate'
        exit='exit'
      >
        <h3 className='blog-subtitle'>サービス内容関連記事</h3>
        <div>

          {article.map((article, index) => {
            return(
              <Blog
              key = { index }
              img = { article.content.match(/src="([^"]*)"/) } // アイキャッチ部分を取得
              data = { article.isoDate }
              title = { article.title }
              category = { article.categories[0] }
              url = { article.link }
              />
            )
          })}

          {ajaxError && <p>記事が読み込まれませんでした。</p>} 
          
        </div>
        <a href='https://channelworks.biz/blog/' data-aos='fade'>
          <span>ブログをみる</span>
        </a>
      </motion.section>

      <MediaQuery query='(min-width: 768px)'>
        <ScrollToTop />
      </MediaQuery>
      <MediaQuery query='(max-width: 767px)'>
        <Table
          contents = {contents}
        />
      </MediaQuery>

    </>
  )
}

export default Works;