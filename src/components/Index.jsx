import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './atoms/Button';
import Blog from './atoms/Blog';
import Contact from './atoms/Contact';
import Data from '../json/works.json';
import ScrollToTop from './atoms/scrollToTop';

// サービス一覧の画像取得
const serviceIcons = [
  './Assets/img/icon-service/service01.png',
  './Assets/img/icon-service/service02.png',
  './Assets/img/icon-service/service03.png',
  './Assets/img/icon-service/service04.png',
  './Assets/img/icon-service/service05.png',
  './Assets/img/icon-service/service06.png'
]

// サービス一覧のテキスト設定
const services = [
  {
    name: `マーケティング\n戦略支援・運用`, 
    text: '新たな体制を社内に作ることなく、短期間で高度なデジタルマーケティングを実現します。新たな体制を社内に作ることなく実現します。', 
    img: serviceIcons[0], 
    url: '/service/marketing',
    alt: 'マーケティング戦略'
  },
  {
    name: `UI/UX\n設計・構築`, 
    text: 'すでにある製品のUI/UXを改善するのか、より新しい表現をするのか的確なご提案をいたします。', 
    img: serviceIcons[1], 
    url: '/service/ui_ux',
    alt: 'UI/UX設計'
  },
  {
    name: `Webサイト\n設計・構築`, 
    text: 'ビジネスの成長を目的としたWebサイト制作や、Webサービスの企画、制作を行います。', 
    img: serviceIcons[2], 
    url: '/service/web_production',
    alt: 'サイト制作'
  },
  {
    name: 'Webシステム開発', 
    text: 'さまざまなプラットフォームのWebサービス・システム開発に対応することが可能です。', 
    img: serviceIcons[3], 
    url: '/service/system',
    alt: 'システム開発'
  },
  {
    name: 'コンテンツ開発', 
    text: '課題を正しく理解し、常に「ビジネスオーナーはどう考える」という視点で取り組みます。', 
    img: serviceIcons[4], 
    url: '/service/content',
    alt: 'コンテンツ開発'
  },
  {
    name: `イメージ撮影・\nPR動画制作`, 
    text: '商品・サービス・既存サイトなどの課題や強みを探し、最適な動画マーケティングプランをご提案いたします。',
    img: serviceIcons[5], 
    url: '/service/image',
    alt: 'イメージ制作'
  }
]

// 実績セクションでスライドショー表示するデータのidを指定
const slideData1 = Data.find((data) => data.id === 9);
const slideData2 = Data.find((data) => data.id === 8);
const slideData3 = Data.find((data) => data.id === 7);
// 実績セクションで小窓で表示するデータのidを指定
const smallDisplay1 = Data.find((data) => data.id === 7);
const smallDsiplay2 = Data.find((data) => data.id === 6);
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
    transition: { duration: .22, ease: 'easeInOut'}
  }
}

const Index = () => {

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

  const [article, setArticle] = useState([]);
  const [ajaxError, setAjaxError] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' }); // スクロールアニメーションの設定
    document.title = 'Channel Works'; // タイトルの設定

    // ブログ記事の取得
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

  return(
    <>

      <motion.section id="index-top" 
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.h2
          variants={ mainVariants }
          initial='initial'
          animate={{ opacity: 1 }}
          transition={{ delay: 1 ,duration: 1, ease: 'easeInOut' }}
        >
          マーケティングで<br/>Web戦略に最大の成果を<br className='only-sp'/>提供します。
        </motion.h2>
        <span>scroll</span>
      </motion.section>

      <motion.section id="index-strength"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>Web戦略に最大の成果を</h3>
        <p data-aos='fade-up'>私たちは、<br className='only-sp'/>マーケティングノウハウを基軸に<br className='only-sp'/>集客・購買・認知UPなどの<br className='only-sp'/>具体的な効果を<br className='only-sp'/>確実に上げる専門集団です。</p>
        <Button
          url = '/strength'
          name = '強みと特徴をみる'
        />
      </motion.section>
      
      <motion.section id="index-service"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>Service</h3>
        <p data-aos='fade-up'>各分野の専門家が、幅広い範囲の<br className='only-sp'/>課題に率直に向き合います。</p>
        <ul data-aos='fade-up'>
          {services.map((service, index) => {
            return(
              <li key={ index }>
                <Link to={{ pathname: service.url, state: 'active' }}>
                  <div>
                    <img src={ service.img } alt={ service.alt } />
                  </div>
                  <h4>{ service.name }</h4>
                  <p className='only-pc'>{ service.text }</p>
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

      <motion.section id="index-works"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>Works</h3>
        <p data-aos='fade-up'>Web戦略を、さまざまな知見や<br className='only-sp'/>スキルでご支援します。</p>
        <article data-aos='fade-up'>
          <div id='index-works01'>
            <Slider
              {...settingMain}
              asNavFor={nav2}
              ref={slider1 => setNav1(slider1)}
            >

              <Link to={{ pathname: '/works', state: slideData1.id }}>
                <ul>
                  {slideData1.category.map((category, index) => {
                    return(
                      <li key={index}>{category}</li>
                    )
                  })}
                </ul>
                <h4>{slideData1.title}</h4>
                <p>{slideData1.client} 様</p>
              </Link>
              <Link to={{ pathname: '/works', state: slideData2.id }}>
                <ul>
                  {slideData2.category.map((category, index) => {
                    return(
                      <li key={index}>{category}</li>
                    )
                  })}
                </ul>
                <h4>{slideData2.title}</h4>
                <p>{slideData2.client} 様</p>
              </Link>
              <Link to={{ pathname: '/works', state: slideData3.id }}>
                <ul>
                  {slideData3.category.map((category, index) => {
                    return(
                      <li key={index}>{category}</li>
                    )
                  })}
                </ul>
                <h4>{slideData3.title}</h4>
                <p>{slideData3.client} 様</p>
              </Link>

            </Slider>
          </div>
          <div id='index-works02'>
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
        <div data-aos='fade-up'>
          <article>
            <Link to={{ pathname: '/works', state: smallDisplay1.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={smallDisplay1.img} alt={smallDisplay1.client} />
                </div>
              </div>
              <h4>{smallDisplay1.title}</h4>
              <ul>
                {smallDisplay1.category.map((category, index) => {
                  return(
                    <li key={index}>{category}</li>
                  )
                })}
              </ul>
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
              <ul>
                {smallDsiplay2.category.map((category, index) => {
                  return(
                    <li key={index}>{category}</li>
                  )
                })}
              </ul>
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
              <ul>
                {smallDsiplay3.category.map((category, index) => {
                  return(
                    <li key={index}>{category}</li>
                  )
                })}
              </ul>
            </Link>
          </article>
        </div>
        <Button
          url = '/works'
          name = 'すべての実績をみる'
        />
      </motion.section>

      <motion.section className="blog plus"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>Blog</h3>
        <p data-aos='fade-up'>Web領域の豆知識や新情報<br className='only-sp'/>などを、記載しています。</p>
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
      
      <ScrollToTop />
      
    </>
  )
}

export default Index;