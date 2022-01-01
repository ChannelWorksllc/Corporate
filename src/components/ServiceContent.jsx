// コンテンツ開発ページ

import React, { useEffect, /* useState */} from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'

const ServiceContent = () => {

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
      title: 'オリジナルコンテンツは、もっとも説得力のある「サイト資産」です。',
      text1: '昨今のWebにおいて、オリジナルかつ有用性の高いコンテンツは何よりも効果的な訴求ポイントです。しかし、独自コンテンツや継続性のあるコンテンツは容易に作成できるものではありません。たとえば、ブログ要素は多くのWebサイトにおいて取り入れられていますが、有効に更新されていることはほとんどありません。',
      text2: '有効性の高いコンテンツを継続的に発信する、実はこれだけでも大きな成果を生み出します。弊社のコンテンツ制作はこの点をサポート致します。'
    },
    {
      title: '良質なコンテンツの継続発信こそが、サイトパワーを向上させます。',
      text1: 'どのようなコンテンツなら、継続発信できるのか。継続発信するための社内の仕組みはどのように作るのか。コンテンツ発信はいつもそれが課題。',
      text2: '弊社ではコンテンツを作成するだけではなく、継続して作成し続ける仕組みも含めてご提供が可能です。社内だけではなく、社外のリソースなども柔軟に取り入れるなど、さまざまな方法をご提案させていただきます。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `サービス独自コンテンツ企画・制作`,
      text: '広告などのプロモーション目的で制作するサービス紹介のための独自コンテンツを企画・制作します。'
    },
    {
      title: `各種取材および取材記事の制作`,
      text: 'さまざまな取材の対応、および取材記事の撮影を行います。出張実費がかかりますが遠方への取材も可能です。'
    },
    {
      title: `各種専門記事・テクニカルコピー制作`,
      text: '士業などの専門分野の記事や、技術的な知見が必要な専門記事の作成、種文の制作などを行います。'
    },
    {
      title: `記事広告・サービス記事制作`,
      text: '広告掲載などのためのサービス紹介記事の制作を行います。LP内のコンテンツなどの制作も可能です。'
    },
    {
      title: `映像・LPシナリオの制作`,
      text: 'さまざまなPR映像や、サービス紹介映像などの撮影シナリオやナレーション台本などの作成を行います。'
    },
  ]

  // 表示する実績のデータIDを指定
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
            text = 'コンテンツ開発'
            img = '/Assets/img/service-content/service06.jpg'
            alt= 'コンテンツ開発'
            icon = '/Assets/img/service-content/service05.png'
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
        集客施策でもあり、サイト資源ともなるさまざまなコンテンツ開発をご支援
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
            サイトオリジナルのコンテンツを作成したいが、<span>コンテンツ制作の知見やノウハウがない</span>ため作れない。
          </li>
          <li>
            ブログ更新を継続して行いたいが、どんなコンテンツを更新したらよいかわからず、<span>更新が続かない。</span>
          </li>
          <li>
            サービス固有の専門情報を発信したく、情報はあるが<span>記事作成などのスキルやノウハウがない。</span>
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

export default ServiceContent;