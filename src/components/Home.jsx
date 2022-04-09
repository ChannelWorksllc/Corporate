import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeadBlock from './atoms/HeadBlock';
import { Button, Contact, ScrollToTop, /* Blog */ } from './atoms'

import Data from '../json/works.json';
import styles from '../styles/components/home.module.scss'

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

// 実績セクションでスライドショー表示するデータのidを指定
const slideData1 = Data.find((data) => data.id === 21);
const slideData2 = Data.find((data) => data.id === 18);
const slideData3 = Data.find((data) => data.id === 15);
// 実績セクションで小窓で表示するデータのidを指定
const smallDisplay1 = Data.find((data) => data.id === 12);
const smallDsiplay2 = Data.find((data) => data.id === 10);
const smallDsiplay3 = Data.find((data) => data.id === 5);

// 画面遷移時のアニメーション設定
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
    transition: { duration: .10, ease: 'easeInOut'}
  }
}

const Home = () => {

  // 実績のスライドショー設定
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settingMain = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 7000,
    dots: true,
  }

  const settingThumbs = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  }

  // const [article, setArticle] = useState([]);
  // const [ajaxError, setAjaxError] = useState(false);

  useEffect(() => {
    document.title = 'Channel Works'; // タイトルの設定

    // ブログ記事の取得
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

  return(
    <>
      <HeadBlock />
      <motion.section className={styles.top}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h2>
          マーケティングで<br/>Web戦略に最大の成果を<br className={styles.spOnly} />提供します。
        </h2>
        <span>scroll</span>
      </motion.section>

      <motion.section className={styles.strength}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>Web戦略に最大の成果を</h3>
        <p>私たちは、<br className={styles.spOnly} />マーケティングノウハウを基軸に<br className={styles.spOnly} />集客・購買・認知UPなどの<br />具体的な効果を<br className={styles.spOnly} />確実に上げる専門集団です。</p>
        <Button
          url = '/strength'
          name = '強みと特徴をみる'
        />
      </motion.section>
      
      <motion.section className={styles.service}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>Service</h3>
        <p>各分野の専門家が、幅広い範囲の<br className={styles.spOnly} />課題に率直に向き合います。</p>
        <ul>
          {services.map((service, index) => {
            return(
              <li key={ index } className={styles[service.class]}>
                <Link to={{ pathname: service.url, state: 'active' }}>
                  <div>
                    <img src={ service.img } alt={ service.alt } />
                  </div>
                  <h4>{ service.name }</h4>
                  <p>{ service.text }</p>
                  <small>詳しくみる</small>
                </Link>
              </li>
            )
          })}
        </ul>
        <Button
          url = '/service'
          name = 'サービスの詳細をみる'
        />
      </motion.section>

      <motion.section className={styles.works}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>Works</h3>
        <p>Web戦略を、さまざまな知見や<br />スキルでご支援します。</p>
        <article>
          <div className={styles.works01}>
            <Slider
              {...settingMain}
              asNavFor={nav2}
              ref={slider1 => setNav1(slider1)}
            >

              <Link to={{ pathname: '/works', state: slideData1.id }}>
                <p>{slideData1.client} 様</p>
                <h4>{slideData1.title}</h4>
              </Link>
              <Link to={{ pathname: '/works', state: slideData2.id }}>
                <p>{slideData2.client} 様</p>
                <h4>{slideData2.title}</h4>
              </Link>
              <Link to={{ pathname: '/works', state: slideData3.id }}>
                <p>{slideData3.client} 様</p>
                <h4>{slideData3.title}</h4>
              </Link>

            </Slider>
          </div>

          <div className={styles.works02}>
            <Slider
              {...settingThumbs}
              asNavFor={nav1}
              ref={slider2 => setNav2(slider2)}
            >

              <img src={slideData1.img} alt={slideData1.client} />
              <img src={slideData2.img} alt={slideData2.client} />
              <img src={slideData3.img} alt={slideData3.client} />

            </Slider>
          </div>
        </article>
        <div>
          <article>
            <Link to={{ pathname: '/works', state: smallDisplay1.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={smallDisplay1.img} alt={smallDisplay1.client} />
                </div>
              </div>
              <h4>{smallDisplay1.title}</h4>
            </Link>
          </article>
          <article>
            <Link to={{ pathname: '/works', state: smallDsiplay2.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={smallDsiplay2.img} alt={smallDsiplay2.client} />
                </div>
              </div>
              <h4>{smallDsiplay2.title}</h4>
            </Link>
          </article>
          <article>
            <Link to={{ pathname: '/works', state: smallDsiplay3.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={smallDsiplay3.img} alt={smallDsiplay3.client} />
                </div>
              </div>
              <h4>{smallDsiplay3.title}</h4>
            </Link>
          </article>
        </div>
        <Button
          url = '/works'
          name = 'すべての実績をみる'
        />
      </motion.section>

      {/* <motion.section className="blog plus"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>Blog</h3>
        <p>Web領域の豆知識や新情報<br className='only-sp'/>などを、記載しています。</p>
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
      
      <motion.section
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <Contact />
      </motion.section>
      
      <ScrollToTop />
      
    </>
  )
}

export default Home;