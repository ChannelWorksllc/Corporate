// マーケティング戦略支援・運用ページ

import React, { useEffect, /* useState */ } from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Data from '../json/works.json';
import { ServiceLowerPage, TopicPathService, LowerPageTop, LinkRelatedContent, ScrollToTop, Table, Contact, /* Blog */ } from './atoms'
import styles from '../styles/components/service.module.scss'

const ServiceMarketing = () => {

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
      title: '貴社課題を客観視し、整理、分類。課題カテゴリごとの施策に落とし込み。',
      text1: '自社課題において難しいのが「課題の客観視」です。これは外部支援業者だからこそ可能になるといえる目線でもあり、社内人材では検討・実施が難しい施策立案を可能とします。加えて、課題を細かなファクターに分割することで、個別成果を計測しやすくし、より施策全体の効果を見えやすくするアプローチを行います。',
      text2: '大きな施策は社内で立案し、実行フェイズの細かな施策を外部業者と共に遂行する。これが、もっとも効果を出しやすい方法のひとつと考えます。'
    },
    {
      title: '専門サービスならではの、新しい知見を貴社課題に適応し施策をご提案。',
      text1: '外部の専門サービスの特徴や強みとして、ある意味で「無責任に施策立案ができる」ことにあります。社内では、さまざまなしがらみなどで検討にしにくいアイデアもどんどん出すことができるので、それまでできなかった数多くの施策を実施できるようになる場合が多くあります。',
      text2: 'より数多くの検討角度を貴社施策にご提供するのが弊社ご提案の特徴です。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `集客戦略・施策の立案支援`,
      text: 'Webサイト運用や、広告展開などの各種プロモーションにおけるKPI設定、戦略設計などの立案をご支援します。'
    },
    {
      title: `集客施策の各種運用支援`,
      text: 'サイト更新やコンテンツ更新、アクセス解析や改善課題の抽出などといった運用対応全般をご支援します。'
    },
    {
      title: `広告運用・改善支援、および代行`,
      text: 'リスティングやDSPなどの各種広告施策の運用代行やご支援、レポートなどからの課題抽出をご支援します。'
    },
    {
      title: `各種SNSの運用支援・代行`,
      text: 'TwitterやFacebook、Instagramなどの代表的なSNSにおける配信代行を始めとして運用支援を行います。'
    },
    {
      title: `CI/BIの策定支援`,
      text: 'コーポレート・ブランドアイデンティティの策定から、コーポレートキャッチコピー、ロゴの作成などをご支援。'
    },
  ]

  // 表示する実績のデータ
  const display1 = Data.find((data) => data.id === 21);
  const display2 = Data.find((data) => data.id === 20);
  const display3 = Data.find((data) => data.id === 19);

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
    document.title = 'マーケティング戦略 | Channel Works';

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
          url = '/service/marketing'
          linkname = 'Marketing'
        />

        <div className={styles.top}>
          <LowerPageTop 
            titleja = 'サービス内容'
            titleen = 'Service'
            text = 'マーケティング戦略支援・運用'
            img = '/Assets/img/service-content/service03.jpg'
            alt= 'webサイト制作'
            icon = '/Assets/img/service-content/service01.png'
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
        貴社の集客・販促の課題解決を豊富なノウハウと柔軟なアイデアでご支援
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
            新しく集客や販促などのマーケティング施策を行いたいが、<span>なにから始めたらよいかがわからない。</span>
          </li>
          <li>
            社内にマーケティングの専門家がおらず、専門の部署や知見もないため、<span>課題解決が進まない。</span>
          </li>
          <li>
            施策を実施しているが、改善課題の抽出や改善施策の実施に対して<span>技術やノウハウが不足していると感じる。</span>
          </li>
        </ul>
      </motion.section>
      
      <ServiceLowerPage 
        name = 'マーケティング戦略支援・運用'
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

export default ServiceMarketing;