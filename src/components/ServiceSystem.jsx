// マーケティング戦略支援・運用ページ

import React, { useEffect, /* useState */ } from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'

const ServiceSystem = () => {

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
      title: '「最良」よりも「最適」をご提案するのが弊社のシステム開発です。',
      text1: '弊社のシステム開発は目的ではなく手段です。そのため、高度な開発力などをアピールすることはありません。必要なものを必要なだけ、最適な形で作成する。それが弊社のシステム開発です。このため、ご予算や目的に応じて、ゼロ開発ではなくパッケージシステムやASPの導入・組み込みなど、弊社外のパートナーと提携することも多くございます。',
      text2: '作成したいものはあるが予算が合わないなどでお困りの場合、弊社が必ずお役に立てるはずです。'
    },
    {
      title: 'どう作るかより、どう運用するか・どう改善するかがシステムの目的です。',
      text1: 'どのようなシステムも作ってゴールではありません。作った先にどう運用していくのか、事業フェイズにおいてどう改善していくのかこそが要です。',
      text2: 'よって、ブラックボックスとなるような要素や、弊社独自のノウハウ、といった見えづらい要素は一切取り入れません。可能な限りわかりやすいものを、運用・改善しやすい仕組みをご提供すること旨としています。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `ECシステム構築・PKG導入`,
      text: '規模に合わせたさまざまなECシステムの構築をご支援します。ゼロ構築のほかパッケージの導入も行っています。'
    },
    {
      title: `マッチングシステム構築・PKG導入`,
      text: 'さまざまなジャンルのマッチングシステムを構築します。ゼロ構築のほかパッケージの導入も行っています。'
    },
    {
      title: `予約システム構築・PKG導入`,
      text: '宿泊施設やサロンなどの予約システムや申込み機能を構築。ゼロ構築のほかパッケージの導入も行っています。'
    },
    {
      title: `各種CMSの導入と組み込み`,
      text: 'WordPressを始めMovable typeやDlupalなど、各種CMSによるサイトやサービスの構築を行います。'
    },
    {
      title: `大規模システム構築マネジメント`,
      text: '企業内常駐などで、大規模Projectにおけるプロジェクトマネジメントや、ディレクション対応を行います。'
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
    document.title = 'Webシステム開発 | Channel Works';

    // // ブログ記事の取得
    // const RssParser = require('rss-parser');
    // const url = 'http://tanakan.conohawing.com/wp/category/marketing//feed/';
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
          url = '/service/system'
          linkname = 'System Development'
        />

        <div className={styles.top}>
          <LowerPageTop 
            titleja = 'サービス内容'
            titleen = 'Service'
            text = 'Webシステム開発'
            img = '/Assets/img/service-content/service05.jpg'
            alt= 'Webシステム開発'
            icon = '/Assets/img/service-content/service04.png'
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
        戦略・施策を支える汎用性の高いWebシステム開発およびパッケージ開発
      </motion.p>

      <motion.section id="service-contain01" className={styles.content01}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>このような課題を解決します。</h3>
        <ul>
          <li>
            ECやマッチングサイトを作りたいが、<span>他では、かなり高額の見積もり</span>が出てきてしまい、困っている。
          </li>
          <li>
            <span>想定コスト内でも、できるだけ豊富な機能を有したサイトを構築</span>する方法がないか探している。
          </li>
          <li>
            サービスに最適なシステムを構築したいが、<span>大規模PJTを任せることができる人材が社内にいない。</span>
          </li>
        </ul>
      </motion.section>
      
      <ServiceLowerPage 
        name = 'Webシステム開発'
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
          contents={contents}
        />
      </MediaQuery>
      
    </>
  )
}

export default ServiceSystem;