// イメージ撮影・PR動画制作ページ

import React, { useEffect, /* useState */ } from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'

const ServiceImage = () => {

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
      title: '100の言葉より1つの写真。「撮影力」は弊社3大特徴のひとつです。',
      text1: '誰に対してもわかりやすい訴求は、やはり「ビジュアルイメージ」です。写真・イラスト・映像など、テキスト訴求に比べると、何倍もの訴求力を有します。それだけに作成することは難しく、誤って作成してしまうと、かえってネガティブアピールになってしまう場合もあり、取り組みが難しいものです。',
      text2: '弊社では、撮影単体でもお引き受けするなど、専門的な撮影サービスをご提供しており、企業・サービスに最適化したイメージをご提供します。'
    },
    {
      title: '「動画」パワーに注目が集まる現代。現代における最適訴求を御社でも。',
      text1: '昨今、動画プロモーションはもっとも効果が出やすく、数多くのプラットフォームも整備されるようになってきました。',
      text2: '弊社でも、プロモーション動画や、セールス動画、採用動画などのさまざまなジャンルの動画制作をご提供しています。また、ドローンを利用した空中撮影なども対応可能で、高度な映像コンテンツを制作致します。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `各種ポートレート、集合撮影`,
      text: '代表イメージや、採用サイトなどでのメンバー写真、サービスイメージなどの人物写真の撮影を行います。'
    },
    {
      title: `取材・インタビュー撮影`,
      text: '取材と並行したインタビューショットや、風景・シーンなどの撮影取材に対応致します。'
    },
    {
      title: `会社外観・内観、近影・遠影撮影`,
      text: '社屋や駅からの経路、エントランス、オフィスや会議室といった内観・外観などの撮影を行います。'
    },
    {
      title: `通販商品撮影、料理撮影`,
      text: 'いわゆる「ブツ撮り」に対応します。通販商品などはもちろん、料理などの撮影にも対応しております。'
    },
    {
      title: `空撮・ドローン撮影`,
      text: '建物やイベントなどにおけるドローン撮影に対応しております。昨今では、非常に効果的な空中撮影です。'
    },
  ]

  // 表示する実績のデータ
  const display1 = Data.find((data) => data.id === 7);
  const display2 = Data.find((data) => data.id === 6);
  const display3 = Data.find((data) => data.id === 5);

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

  useEffect(() => {
    document.title = 'イメージ制作 | Channel Works';

    // // ブログ記事の取得
    // const RssParser = require('rss-parser');
    // const url = 'http://tanakan.conohawing.com/wp/category/image/feed/';
    // const rssParser = new RssParser();
  
    // rssParser.parseURL(url)
    //   .then((feed) => {
    //     const data = feed.items;
    //     setArticle([...data]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setAjaxError(true); // ajax通信に失敗した場合は、メッセージを表示
    //   })

  }, [])
  
  return(
    <>
        <TopicPathService
          url = '/service/image'
          linkname = 'Image Production'
        />

      <div className={styles.top}>
        <LowerPageTop 
          titleja = 'サービス内容'
          titleen = 'Service'
          text = 'イメージ撮影・PR動画制作'
          img = '/Assets/img/service-content/service07.jpg'
          alt= 'イメージ制作'
          icon = '/Assets/img/service-content/service06.png'
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
        複雑な訴求・サービスでも明快に訴求する写真・動画撮影・制作をご提供
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
            写真素材などを利用すると、どうしても似たようなサイトイメージになってしまうので<span>独自イメージを使いたい。</span>
          </li>
          <li>
            自社撮影や知り合いに撮影を頼んだが、<span>イメージ通りの写真や映像を作ることができなかった。</span>
          </li>
          <li>
            空撮やポートレート、料理写真など、高度な写真撮影をしたいが、撮影の会社などを<span>別手配するのは大変。</span>
          </li>
        </ul>
      </motion.section>
      
      <ServiceLowerPage 
        name = 'イメージ撮影・PR動画制作'
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

export default ServiceImage;