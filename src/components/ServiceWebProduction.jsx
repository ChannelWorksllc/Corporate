// webサイト設計・構築ページ

import React, { useEffect, /* useState */} from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'


const ServiceWebProduction = () => {

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
      title: '「成果を創出する」ことがWebサイトやアプリの存在価値と考えます。',
      text1: '弊社のWebサイト・アプリ制作は、キレイなサイト、カッコイイサイト、といった見た目重視ではありません。弊社がご提供するあらゆるサイトは「事業成果を生み出す」ことに特化しています。',
      text2: '見た目の印象がユーザーアクションに影響を与えることは決して多くはなく、むしろ華美な装飾はアクション効果を低減させます。弊社では、「誰が何をどうしたいのか」にこだわり、サイト全体の導線最適化に全力で注力致します。'
    },
    {
      title: 'Webサイトを構成する全要素はユーザーアクションを生み出すため。',
      text1: '弊社において、メインビジュアル、キャッチコピー、サービスや製品などの説明、各種ボタンやリンクといったWebサイトやアプリにおけるさまざまな構成要素は、「デザインパーツ」ではなく、「ユーザー導線要素」です。',
      text2: '形状・サイズ・文章の意味によって、アクションは伸びも縮みもします。弊社では、事前調査と蓄積したノウハウから最適な導線を構築します。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `EC/通販サイト構築`,
      text: '商品点数10点以下の小規模ECから、数千点超の大規模サイトまでさまざまな方式のEC/通販サイト構築が可能。'
    },
    {
      title: `各種マッチングサイト構築`,
      text: '求人サイトや施設・サービスのマッチングなどさまざまな用途のマッチングサイト構築に対応可能です。'
    },
    {
      title: `予約・申し込みサイト構築`,
      text: '旅館・ホテルや飲食店などの予約、またはサービスの申し込みサイトなどの構築が可能です。'
    },
    {
      title: `サービス紹介・採用サイト構築`,
      text: 'さまざまなサービスや、企業・仕事の魅力などを紹介するサイトの企画・構築をご支援致します。'
    },
    {
      title: `コーポレートサイト構築`,
      text: '名刺代わりや自己紹介のためのサイトは作成しません。問い合わせを増やしたい企業サイト構築ならぜひ弊社へ。'
    },
  ]

  // 表示する実績データ
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
    document.title = 'サイト制作 | Channel Works';

    // // ブログ記事の取得
    // const RssParser = require('rss-parser');
    // const url = 'http://tanakan.conohawing.com/wp/category/management/feed/';
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
        url = '/service/marketing'
        linkname = 'Marketing'
      />

      <div className={styles.top}>
        <LowerPageTop 
          titleja = 'サービス内容'
          titleen = 'Service'
          text = 'Webサイト・アプリ制作・構築'
          img = '/Assets/img/service-content/service02.jpg'
          alt= 'webサイト制作'
          icon = '/Assets/img/service-content/service03.png'
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
        マーケティング戦略とUI/UXに裏打ちされた、成果創出のためのWeb制作
      </motion.p>
      
      <motion.section className={styles.content01}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>このような課題を解決します。</h3>
        <ul>
          <li>
            今まで、見た目にインパクトがあったり、リッチなデザインのサイトを作っても<span>成果につながらなかった。</span>
          </li>
          <li>
            以前、サイトを作成したが更新方法が複雑で、ほとんど更新ができないまま<span>放置してしまっている。</span>
          </li>
          <li>
            いろいろなサイト展開をしたいと思っているが、その度に<span>大きな改修費用がかかってしまい、身動きできない。</span>
          </li>
        </ul>
      </motion.section>

      <ServiceLowerPage 
        name = 'Webサイト・アプリ制作・構築'
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

export default ServiceWebProduction;