// UI/UX設計ページ

import React, { /* useEffect, useState */ } from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json'
import HeadBlock from './atoms/HeadBlock';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'

const ServiceUi = () => {

  // 目次
  const contents = [
    {text: '解決できる課題', to: 'service-contain01'},
    {text: '事例', to: 'service-contain02'},
    {text: 'サービス内容', to: 'service-contain03'},
    {text: 'サービス一覧', to: 'service-contain04'},
  ]

  // 関連ページ
  const relatedLinks = [
    {
      url: '/service/marketing',
      name: 'マーケティング戦略'
    },
    {
      url: '/service/consulting',
      name: 'コンサルティング'
    },
    {
      url: '/service/ui_ux',
      name: 'UI/UX設計'
    },
    {
      url: '/service/web_production',
      name: 'サイト制作'
    },
    {
      url: '/service/system',
      name: 'システム開発'
    },
    {
      url: '/service/content',
      name: 'コンテンツ開発'
    },
    {
      url: '/service/image',
      name: 'イメージ制作'
    }
  ]

  // サービス内容
  const contains = [
    {
      title: '「ユーザーに考えさせない」ことがUI/UX設計における至上命題。',
      text1: 'インターネット・Webはすでに社会インフラのひとつなっており、あらゆる事業展開には不可欠なものになっています。だからこそ、ユーザーにとっての使いやすさ・わかりやすさの追求は大きな差別化要因となります。',
      text2: 'あるべき箇所にあるべき要素があること、「こうだったらいいのに」という動きを先回りすること。小さな一つ一つの仕掛けが大きな顧客満足を生み出す、それがUI/UX設計の重要性です。マーケティングだけでもない、。デザインだけでもない、技術だけでもない総合力を大事にしています。'
    },
    {
      title: '弊社では、すべての技術をユーザー利便性向上のために集約します。',
      text1: 'チャネルワークスにとっての「技術」はすべてUI/UX最適化のために集約される手段です。デザインにせよ、プログラミングせよ、写真撮影、動画撮影など弊社が提供するすべては「高度なユーザー体験」を生み出すためにあります。',
      text2: '作ることをゴールとせず、ユーザーアクションこそをゴールとします。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `市場の分析や強み・特徴の分析`,
      text: 'SWOTや5フォースなどのメソッドを基にした市場分析、およびアプローチすべき方向性の策定をご支援します。'
    },
    {
      title: `ユーザー定義やペルソナの策定`,
      text: '既存の運営情報や顧客データなどを元にして、ユーザー属性の定義や、推定ユーザーの策定を行います。'
    },
    {
      title: `ユーザー定義に基づく構造設計`,
      text: 'ターゲットユーザーに最適化したサイト全体やランディングページなどの詳細な構造設計を行います。'
    },
    {
      title: `高度なUIにおけるデザイン実装`,
      text: '設計だけではなく、設計後のデザイン実装も合わせてご提供可能です。これにはJSを含めた実装を含みます。'
    },
    {
      title: `AIなどの最新技術によるUI実装`,
      text: 'チャットボットやAI自動応答などの最新技術を活用したUIについても、実装をご支援することが可能です。'
    },
  ]

  // 表示する実績データ
  const display1 = Data.find((data) => data.id === 15);
  const display2 = Data.find((data) => data.id === 14);
  const display3 = Data.find((data) => data.id === 13);

  // アニメーション設定
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
  
  // const [article, setArticle] = useState([]);
  // const [ajaxError, setAjaxError] = useState(false);

  // useEffect(() => {

  //   // ブログ記事の取得
  //   const RssParser = require('rss-parser');
  //   const url = 'http://tanakan.conohawing.com/wp/category/management/feed/';
  //   const rssParser = new RssParser();
  
  //   rssParser.parseURL(url)
  //     .then((feed) => {
  //       const data = feed.items;
  //       setArticle([...data]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setAjaxError(true); // ajax通信に失敗した場合は、メッセージを表示
  //     })

  // }, [])
  
  return(
    <>
      <HeadBlock 
        title='UI/UX設計 | Channel Works'
        description='あるべき箇所にあるべき要素があること、「こうだったらいいのに」という動きを先回りすること。小さな一つ一つの仕掛けが大きな顧客満足を生み出す、それがUI/UX設計の重要性です。' // descriptionのcontent部分に入ります
      />

      <TopicPathService
        url = '/service/ui_ux'
        linkname = 'UI/UX'
      />

      <div className={styles.top}>
        <LowerPageTop 
          titleja = 'サービス内容'
          titleen = 'Service'
          text = 'UI/UX設計・構築'
          img = '/Assets/img/service-content/service04.jpg'
          alt= 'webサイト制作'
          icon = '/Assets/img/service-content/service02.png'
          content = { contents }
        />

        <nav className={styles.linkRelatedContent}>
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition:{ delay: .28, duraition: .5 } }}
            exit={{ opacity:0, y: 10 ,transition: { duration: .2, ease: 'easeInOut' } }}
          >
            {relatedLinks.map((link, index) => {
              return(
                <LinkRelatedContent 
                  key = {index}
                  link = {link}
                />
              )
            })}
          </motion.ul>
        </nav>
      </div>

      <motion.p className={styles.lowerpage}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        ユーザーに必要な情報へストレートに辿り着かせる最適・明快な構造設計
      </motion.p>
      
      <motion.section id="service-contain01"  className={styles.content01}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>このような課題を解決します。</h3>
        <ul>
          <li>
            サイトやサービスを構築したが、社内外から<span>構造がわかりにくい</span>などの声が多く上がっている。
          </li>
          <li>
            自社ユーザーの定義が明確でないと感じており、インターフェイスなどの<span>最適化の方向性が確定できない。</span>
          </li>
          <li>
            サービスやサイトなどの構造が複雑で一般的な制作会社では、適切な構造を制作できない<span>高度な画面設計が必要。</span>
          </li>
        </ul>
      </motion.section>

      <ServiceLowerPage 
        name = 'UI/UX設計・構築'
        contains = {contains}
        menu = {menu}
        works1 = {display1}
        works2 = {display2}
        works3 = {display3}
      />

      {/* <motion.section className="blog" id='blog'
        variants={ mainVariants }
        initila='initial'
        animate='animate'
        exit='exit'
      >
        <h3 className='blog-subtitle' data-aos='fade-up'>サービス内容関連記事</h3>
        <div data-aos='fade-up'>

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
        <a href='http://tanakan.conohawing.com/wp/' data-aos='fade'>
          <span>ブログをみる</span>
        </a>
      </motion.section> */}

      <motion.section className="contact"
        variants={ mainVariants }
        initila='initial'
        animate='animate'
        exit='exit'
      >
        <Contact />
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

export default ServiceUi;