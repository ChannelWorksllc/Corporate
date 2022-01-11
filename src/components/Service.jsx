// サービスページ
import React, { useEffect, /* useState */ } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MediaQuery from 'react-responsive';
import { LowerPageTop, TopicPath, Contact, ScrollToTop, Table, /* Blog */ } from './atoms'
import styles from '../styles/components/services.module.scss'

const Service = () => {

  // 目次
  const contents = [
    {text: 'サービス一覧', to: 'service01'},
    {text: '制作の流れ', to: 'service02'},
    // {text: '関連記事', to: 'blog'}
  ]

  // サービス一覧の画像取得
  const serviceImg = [
    './Assets/img/service-content/service03.jpg',
    './Assets/img/service-content/service01.jpg',
    './Assets/img/service-content/service04.jpg',
    './Assets/img/service-content/service02.jpg',
    './Assets/img/service-content/service05.jpg',
    './Assets/img/service-content/service06.jpg',
    './Assets/img/service-content/service07.jpg',
    './Assets/img/service-content/service08.jpg'
  ]

  // サービス一覧のテキスト設定
  const services = [
    {
      name: `マーケティング戦略支援・運用`, 
      text: '新たな体制を社内に作ることなく、短期間で高度なデジタルマーケティングを実現します。新たな体制を社内に作ることなく実現します。', 
      img: serviceImg[0], 
      url: '/service/marketing',
      alt: 'マーケティング戦略',
      class: 'service01'
    },
    {
      name: `CI/VI/BIなどの\n策定コンサルティング`, 
      text: '企業・製品・サービスを象徴するコピーやビジュアルを通し、PRやマーケティング戦略において有効な要素となる各種アイデンティティ策定をご支援します。', 
      img: serviceImg[1], 
      url: '/service/consulting',
      alt: '策定コンサルティング',
      class: 'service02'
    },
    {
      name: `UI/UXの設計・構築`, 
      text: 'UI/UXはデジタルマーケティングの要。弊社では「誰のために、なにをするのか」を追求し、貴社のデジタルマーケティング施策に最適解をご提供致します。', 
      img: serviceImg[2], 
      url: '/service/ui_ux',
      alt: 'UI/UX設計',
      class: 'service03'
    },
    {
      name: `Webサイトの設計・構築`, 
      text: '登録・予約・購買などの「CV（成果創出）」に特化し、貴社ビジネスを支援する、EC・マッチング・サービスサイト・アプリなどの企画・制作を行います。', 
      img: serviceImg[3], 
      url: '/service/web_production',
      alt: 'サイト制作',
      class: 'service04'
    },
    {
      name: 'Webシステム開発', 
      text: 'ゼロベースの開発はもとより、ASPやパッケージシステムの利用など「成果」への最短距離を導き出す最適なシステム開発・システム構成をご提供します。', 
      img: serviceImg[4], 
      url: '/service/system',
      alt: 'システム開発',
      class: 'service05'
    },
    {
      name: 'コンテンツ開発', 
      text: 'コンテンツマーケティングを支援する、さまざまな分野の記事コンテンツや動画コンテンツの開発を請け負います。または貴社内での制作ご支援を行います。', 
      img: serviceImg[5], 
      url: '/service/content',
      alt: 'コンテンツ開発',
      class: 'service06'
    },
    {
      name: `イメージ撮影・PR動画制作`, 
      text: 'Webサイトやサービスのブランディングを強化する人物・建物・商品などのイメージ撮影や、SNS訴求などにも強力な打ち手となるPR動画の撮影・制作を行います。',
      img: serviceImg[6], 
      url: '/service/image',
      alt: 'イメージ制作',
      class: 'service07'
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
  // const [article, setArticle] = useState([]);
  // const [ajaxError, setAjaxError] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
    document.title = 'サービス内容 | Channel Works';

    // const RssParser = require('rss-parser');
    // const url = 'https://channelworks.biz/blog/feed/';
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

  }, []);

  return (
    <>
      <TopicPath
        url = '/service'
        linkname = 'Service'
      />

      <LowerPageTop
        titleja = 'サービス内容'
        titleen = 'Service'
        text = '幅広いご要望範囲をカバーします。'
        img = './Assets/img/service-content/service01.jpg'
        alt= 'サービス内容'
        icon = ''
        content = { contents }
      /> 

      <motion.p className={styles.lowerpage}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        各分野の専門家にマイクロタスクとして対応を振り分け、<br/>分業・高速化を実現したアウトプット体制をとっております。
      </motion.p>

      <motion.section id="service01" className={styles.services01}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>提供するサービス一覧</h3>
        <ul>
          {services.map((service, index) => {
            return(
              <li key={ index } className={styles[service.class]}>
                <Link to={{ pathname: service.url, state: 'active' }}>
                  <div>
                    <img src={ service.img } alt={ service.alt } />
                  </div>
                  <h4>{ service.name }</h4>
                  <p className='only-pc'>{ service.text }</p>
                  <small>詳しくみる</small>
                </Link>
              </li>
            )
          })}
        </ul>
      </motion.section>

      <motion.section id="service02"  className={styles.services02}
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

      {/* <motion.section className="blog" id='blog'
        variants={ mainVariants }
        initial='initial'
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
      </motion.section> */}

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
        <Table
          contents={ contents }
        />
      </MediaQuery>
      
    </>
  )
}
  
export default Service;