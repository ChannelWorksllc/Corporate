
// コンサルティングページ
import React, { useEffect, /* useState */} from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'

const ServiceConsulting = () => {

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
      title: '「自分の会社はこうである」と明言できることは、何よりの強みです。',
      text1: '代表や幹部であれば、肌感で理解している企業の方針や強みも、すべての社員には浸透していないことも多くあります。この状態は、さまざまな営業機械を損失こともあります。また、サービス提供や商品作りにおいても、基準となる方針が定まっていることはブレないサービス提供や、製品に繋がります。',
      text2: '改めて「自社とは」を見つめ直すことで新たなサービスが生まれることもあるなど、数多くのメリットがあるのがCI/BIの策定です。'
    },
    {
      title: '社員全員が自社の特徴を語れることは最強のマーケティング手法です。',
      text1: '企業と社員が一貫したアイデンティティを有することは、顧客に向けての大きな訴求効果を生み出します。',
      text2: 'さまざまな顧客コミュニケーションの場において、一貫した姿勢を見せていくことは、顧客からの信頼を生み出し、サービスや製品にも、好影響を発生させます。継続的に効果を生み出す会社の資産。それがCI/BIです。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `コーポレートアイデンティティ策定`,
      text: '企業の特徴、思い、方針、行動指針といった要項を抽出し、メインコピーやサブコピーとして設定していきます。'
    },
    {
      title: `ブランドアイデンティティ策定`,
      text: '商品・サービスごとにバリューやスローガンなどを定めてブランドを表現するキャッチフレーズを定めます。'
    },
    {
      title: `コーポレートロゴの作成`,
      text: 'コーポレートアイデンティティを元に企業ロゴを作成します。ロゴデータはWeb・印刷すべての利用可能。'
    },
    {
      title: `ブランド・サービス・製品ロゴ作成`,
      text: 'ブランドアイデンティティや製品コンセプトなどを元にして、サービスや製品ロゴを作成します。'
    },
    {
      title: `訴求ビジュアル基準の策定`,
      text: 'CI/BIに合わせて、Web・印刷物・製品などのさまざまなビジュアルアウトプットの基準を策定します。'
    },
  ]

  // 表示する実績のデータIDを指定
  const display1 = Data.find((data) => data.id === 18);
  const display2 = Data.find((data) => data.id === 17);
  const display3 = Data.find((data) => data.id === 16);

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
    document.title = 'コンテンツ開発 | Channel Works';

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
          url = '/service/content'
          linkname = 'Content Development'
        />

        <div className={styles.top}>
          <LowerPageTop 
            titleja = 'サービス内容'
            titleen = 'Service'
            text = 'CI/VI/BIなどの策定コンサルティング'
            img = '/Assets/img/service-content/service01.jpg'
            alt= 'CI/VI/BIなどの策定コンサルティング'
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
        貴社の魅力と立ち位置を改めて定義し、揺るぎないブランドを確立します
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
            施策検討やサービス訴求を行う際に、<span>何を強みや特徴として打ち出せばよいのかがわからない。</span>
          </li>
          <li>
            <span>社内に自社特徴や目指す方向などを周知したい</span>が、より客観的に整理し、無理なく受け入れられるようにしたい。
          </li>
          <li>
            社員教育や、採用などにおいて、自社サービスや製品などの<span>特徴や強みをわかりやすく打ち出したい。</span>
          </li>
        </ul>
      </motion.section>
      
      <ServiceLowerPage 
        name = 'CI/VI/BIなどの策定コンサルティング'
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

export default ServiceConsulting;