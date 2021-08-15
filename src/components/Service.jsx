// サービスページ

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MediaQuery from 'react-responsive';
import LowerPageTop from './atoms/LowerPageTop';
import TopicPath from './atoms/TopicPath';
import Blog from './atoms/Blog';
import Contact from './atoms/Contact';
import ScrollToTop from './atoms/scrollToTop';
import Index from './atoms/Index';

const Service = () => {

  // 目次
  const contents = [
    {text: 'サービス一覧', to: 'service01'},
    {text: '制作の流れ', to: 'service02'},
    {text: '関連記事', to: 'blog'}
  ]

  // サービス内容一覧
  const serviceLists = [
    {
      img: './Assets/img/icon-service/service01.png',
      alt: 'マーケティング戦略',
      title: 'マーケティング戦略支援・運用',
      menu: ['LP制作', 'ECサイト制作', 'UI/UX設計', '保守・運用', 'ホームページ・サイト制作', 'SEO対策・サイトコンサルティング', ],
      text: '新たな体制を社内に作ることなく、短期間で高度なデジタルマーケティングを実現します。新たな体制を社内に作ることなく実現します。',
      linktitle: '「マーケティング戦略支援・運用」の詳細をみる',
      url: '/service/marketing',
    },
    {
      img: './Assets/img/icon-service/service02.png',
      alt: 'UI/UX設計',
      title: 'UI/UX設計・構築',
      menu: ['ホームページ・サイト制作', 'LP制作', 'ECサイト制作'],
      text: 'すでにある製品のUI/UXを改善するのか、より新しい表現をするのか的確なご提案をいたします。',
      linktitle: '「UI/UX設計・構築」の詳細をみる',
      url: '/service/ui_ux',
    },
    {
      img: './Assets/img/icon-service/service03.png',
      alt: 'Webサイト設計・構築',
      title: 'Webサイト設計・構築',
      menu: ['ホームページ・サイト制作', 'LP制作', 'ECサイト制作', 'SEO対策・サイトコンサルティング', 'UI/UX設計', '保守・運用'],
      text: 'ビジネスの成長を目的としたWebサイト制作や、Webサービスの企画、制作を行います。',
      linktitle: '「Webサイト設計・構築」の詳細をみる',
      url: '/service/web_production',
    },
    {
      img: './Assets/img/icon-service/service04.png',
      alt: 'システム開発',
      title: 'Webシステム開発',
      menu: ['ホームページ・サイト制作', 'SEO対策・サイトコンサルティング', 'UI/UX設計', '保守・運用'],
      text: 'さまざまなプラットフォームのWebサービス・システム開発に対応することが可能です。',
      linktitle: '「Webシステム開発」の詳細をみる',
      url: '/service/system',
    },
    {
      img: './Assets/img/icon-service/service05.png',
      alt: 'コンテンツ開発',
      title: 'コンテンツ開発',
      menu: ['SEO対策・サイトコンサルティング', 'UI/UX設計', '保守・運用'],
      text: '課題を正しく理解し、常に「ビジネスオーナーはどう考える」という視点で取り組みます。',
      linktitle: '「コンテンツ開発」の詳細をみる',
      url: '/service/content',
    },
    {
      img: './Assets/img/icon-service/service06.png',
      alt: 'イメージ制作',
      title: 'イメージ撮影・PR動画制作',
      menu: ['UI/UX設計', '保守・運用'],
      text: '商品・サービス・既存サイトなどの課題や強みを探し、最適な動画マーケティングプランをご提案いたします。',
      linktitle: '「イメージ撮影・PR動画制作」の詳細をみる',
      url: '/service/image',
    }
  ]

  // 制作の流れ
  const flowLists = [
    {
      num: 1,
      title: 'ご契約',
      text: 'ご契約に際しては、事前に与件を細かく抽出し、対応内容を整理した上で、正式なご案内を申し上げます。',
      period: '(約1〜2週間以内)'
    },
    {
      num: 2,
      title: 'ヒアリング・要件定義',
      text: '与件やご要望を、詳細な実装設計へ落とし込む工程です。何を、どのように実現するかをここで定めます。',
      period: '(約2〜3週間以内)'
    },
    {
      num: 3,
      title: '詳細設計',
      text: '実画面を想定した「ワイヤーフレーム」という画面設計図・ラフイメージを作成し、配置や訴求を定めます。',
      period: '(約3〜4週間以内)'
    },
    {
      num: 4,
      title: 'デザイン・コーディング',
      text: '「ワイヤーフレーム」を基にした、「本デザイン」を作成後、「コーディング(Web 化)」を行います。',
      period: '(約2〜3週間以内)'
    },
    {
      num: 5,
      title: '検証確認・リリース',
      text: '弊社のテスト環境にて実サイトをご確認願い、 修正等の対応後、問題なければリリースとなります。',
      period: '(約1〜2週間以内)'
    }
  ]

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

  // ブログ記事取得
  const [article, setArticle] = useState([]);
  const [ajaxError, setAjaxError] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
    document.title = 'サービス内容 | Channel Works';

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

  }, []);

  return (
    <>

      <nav id='topic-path' >
        <TopicPath
          url = '/service'
          linkname = 'Service'
        />
      </nav>

      <section id="lowerpage-top">
        <LowerPageTop
          titleja = 'サービス内容'
          titleen = 'Service'
          text = '幅広いご要望範囲をカバーします。'
          img = './Assets/img/service-content/service01.jpg'
          alt= 'サービス内容'
          icon = ''
          content = { contents }
        />
      </section>

      <motion.p className="lowerpage-toptext"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        各分野の専門家にマイクロタスクとして対応を振り分け、<br/>分業・高速化を実現したアウトプット体制をとっております。
      </motion.p>

      <motion.section id="service01"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>提供するサービス一覧</h3>
        <ul data-aos='fade-up'>
          {serviceLists.map((service, index) => {
            return(
              <li key={index}>
                <div>
                  <img src={service.img} alt={service.alt} />
                </div>
                <h4>{service.title}</h4>
                <ul>
                  {service.menu.map((menu, index) => {
                    return (
                      <li key={index}>{menu}</li>
                      )
                    })}
                </ul>
                <p>{service.text}</p>
                <Link to={{ pathname: service.url, state: 'active' }}>
                  <span className='other-sp'>{service.linktitle}</span>
                  <span className='only-sp'>詳細をみる</span>
                  </Link>
              </li>
            )
          })}
        </ul>
      </motion.section>

      <motion.section id="service02"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>ご相談から納品までの、<br className='only-sp'/>おおまかな流れ</h3>
        <p data-aos='fade-up'>
          製作・開発の対応におきましては、一般的に以下のような流れでご提供をさせていただいております。 
          ご要望を詳しくお伺いしそれを整理・見える化し、さらに具体的なアウトプットに落とし込んでいく形で、進行をさせていただきます。
        </p>
        <dl data-aos='fade-up'>
          {flowLists.map((flow, index) => {
            return(
              <div key={index}>
                <dt>
                  <span>{flow.num}</span>
                  {flow.title}
                </dt>
                <dd>
                  {flow.text}
                  <span>{flow.period}</span>
                </dd>
              </div>
            )
          })}
        </dl>
      </motion.section>

      <motion.section className="blog" id='blog'
        variants={ mainVariants }
        initial='initial'
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
        <a href='https://channelworks.biz/blog/' data-aos='fade'>
            <span>ブログをみる</span>
        </a>
      </motion.section>

      <motion.section className="contact"
        variants={ mainVariants }
        initial='initial'
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
          contents={ contents }
        />
      </MediaQuery>
      
    </>
  )
}
  
export default Service;