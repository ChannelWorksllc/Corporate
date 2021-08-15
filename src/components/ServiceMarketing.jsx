// マーケティング戦略支援・運用ページ

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import ServiceLowerPage from './atoms/ServiceLowerPage';
import TopicPathService from './atoms/TopicPathService';
import LowerPageTop from './atoms/LowerPageTop';
import LinkRelatedContent from './atoms/LinkRelatedContent';
import Data from '../json/works.json';
import ScrollToTop from './atoms/scrollToTop';
import Index from './atoms/Index';
import Blog from './atoms/Blog';
import Contact from './atoms/Contact';

const ServiceMarketing = () => {

  // 目次
  const contents = [
    {text: '解決できる課題', to: 'service-contain01'},
    {text: '事例', to: 'service-contain02'},
    {text: 'サービス内容', to: 'service-contain03'},
    {text: 'サービス一覧', to: 'service-contain04'},
    {text: '関連記事', to: 'blog'}
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
      title: '徹頭徹尾こだわりぬく課題解決型のWeb制作',
      text1: 'Web制作の基本的な流れとして、まずお客様が感じる課題のヒアリング、その後各種分析調査から潜在的な課題も抽出した上で、課題解決の方針をご提案します。方針が定まれば、要件定義にて構造や必要な機能、予算、スケジュールを定め、設計、デザイン、システム開発などの実制作へ進みます。',
      text2: '弊社のWeb制作は、ビジネスで成果を上げることを第一として課題抽出と戦略策定を徹底的に行い、それに基づいて細部までこだわりぬいたサイト設計が特徴です。'
    },
    {
      title: '幅広い知見を活かし、最適解を選ぶWeb制作',
      text1: 'Webサイトを制作する上でツールを導入することも多くありますが、豊富な実績と経験から幅広い知見を得てきたチャネルワークスは、お客様の解決すべき課題に適したツールを選定・提案することが可能です。',
      text2: '例えばCMSであれば、約30種類の中から複数の候補製品を選定し、その上でお客様と一緒に採用するCMSを協議させていただきます。'
    }
  ]

  // サービス一覧
  const menu = [
    {
      title: `ホームページ・サイト制作 \n `,
      icon: '/Assets/img/service-content/menu01.svg',
      text: '各種分析やユーザー視点に基づく、ロジカルな設計・デザインで制作します。'
    },
    {
      title: `LP制作\n `,
      icon: '/Assets/img/service-content/menu02.svg',
      text: 'ユーザーがアクションすることに特化した、ランディングページを制作します。'
    },
    {
      title: `ECサイト制作\n `,
      icon: '/Assets/img/service-content/menu03.svg',
      text: 'マーケティング全体像と整合性を取ったサイト設計を構築します。'
    },
    {
      title: `コーディング\n `,
      icon: '/Assets/img/service-content/menu04.svg',
      text: '高い知見と豊富なネットワークを活用し、幅広い種類のサイトを構築します。'
    },
    {
      title: `UI/UX設計\n `,
      icon: '/Assets/img/service-content/menu05.svg',
      text: '集客・売上・申し込み増大を実現する、UI設計をご提供します。'
    },
    {
      title: `SEO対策・\nサイトコンサルティング`,
      icon: '/Assets/img/service-content/menu06.svg',
      text: '着実にゴールを目指す、本格的かつ良質なSEO対策を提案します。'
    },
    {
      title: `Webサイト保守・運用\n `,
      icon: '/Assets/img/service-content/menu07.svg',
      text: '各種分析やユーザー視点に基づく、ロジカルな設計・デザインで制作します。'
    }
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
  
  const [article, setArticle] = useState([]);
  const [ajaxError, setAjaxError] = useState(false);

  useEffect(() => {
    document.title = 'マーケティング戦略 | Channel Works';


    // ブログ記事の取得
    const RssParser = require('rss-parser');
    const url = 'http://tanakan.conohawing.com/wp/category/marketing//feed/';
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

  }, [])

  return(
    <>

      <nav id='topic-path'>
        <TopicPathService
          url = '/service/marketing'
          linkname = 'Marketing'
        />
      </nav>

      <section id='lowerpage-top'>
        <LowerPageTop 
          titleja = 'サービス内容'
          titleen = 'Service'
          text = 'マーケティング戦略支援・運用'
          img = '/Assets/img/service-content/service03.jpg'
          alt= 'webサイト制作'
          icon = '/Assets/img/service-content/service01.png'
          content = { contents }
        />
        <nav id="related-content-link">
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
      </section>

      <motion.p className='lowerpage-toptext'
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        課題抽出から戦略・設計までこだわりぬいた「課題解決型のWeb制作」
      </motion.p>

      <motion.section id="service-contain01"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>このような課題を解決します。</h3>
        <ul>
          <li>
            <span>Webサイトが分かりにくい</span>、と指摘されたことがある。
          </li>
          <li>
            ただリニューアルするのではなく、細部まで設計された<span>成果の出るWebサイトにしたい。</span>
          </li>
          <li>
            Webの知見が少ないが、成果を出すために<span>案件進行をリードして欲しい。</span>
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

      <motion.section className="blog" id='blog'
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
      </motion.section>

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
        <Index 
          contents={contents}
        />
      </MediaQuery>
      
    </>
  )
}

export default ServiceMarketing;