// お問い合わせ完了ページ
import React, { useState ,useEffect } from 'react';
import { useLocation, Redirect, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TopicPath, LowerPageTop, LinkRelatedContent, ScrollToTop, Button, /* Blog */ } from './atoms';
import styles from '../styles/components/contactDone.module.scss'

const ContactDone = () => {

  const contents = [];

  // 関連ページへのリンク
  const relatedLinks = [
    {
      url: '/contact_estimate',
      name: 'お見積もり依頼'
    },
    {
      url: '/contact_us',
      name: '各種お問い合わせ'
    }
  ]

// サービス一覧の画像取得
const serviceImg = [
  '/Assets/img/service-content/service03.jpg',
  '/Assets/img/service-content/service01.jpg',
  '/Assets/img/service-content/service04.jpg',
  '/Assets/img/service-content/service02.jpg',
  '/Assets/img/service-content/service05.jpg',
  '/Assets/img/service-content/service06.jpg',
  '/Assets/img/service-content/service07.jpg',
  '/Assets/img/service-content/service08.jpg'
]

// サービス一覧のテキスト設定
const services = [
  {
    name: `マーケティング戦略支援・運用`, 
    img: serviceImg[0], 
    url: '/service/marketing',
    alt: 'マーケティング戦略',
    class: 'service01'
  },
  {
    name: `CI/VI/BIなどの\n策定コンサルティング`, 
    img: serviceImg[1], 
    url: '/service/marketing',
    alt: '策定コンサルティング',
    class: 'service02'
  },
  {
    name: `UI/UXの設計・構築`, 
    img: serviceImg[2], 
    url: '/service/ui_ux',
    alt: 'UI/UX設計',
    class: 'service03'
  },
  {
    name: `Webサイトの設計・構築`, 
    img: serviceImg[3], 
    url: '/service/web_production',
    alt: 'サイト制作',
    class: 'service04'
  },
  {
    name: 'Webシステム開発', 
    img: serviceImg[4], 
    url: '/service/system',
    alt: 'システム開発',
    class: 'service05'
  },
  {
    name: 'コンテンツ開発', 
    img: serviceImg[5], 
    url: '/service/content',
    alt: 'コンテンツ開発',
    class: 'service06'
  },
  {
    name: `イメージ撮影・PR動画制作`, 
    img: serviceImg[6], 
    url: '/service/image',
    alt: 'イメージ制作',
    class: 'service07'
  }
]

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

  const location = useLocation();
  const [doneMessage, setDoneMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // const [article, setArticle] = useState([]);
  // const [ajaxError, setAjaxError] = useState(false);
  
  // phpからの返事が000の場合、メール送信完了
  // phpからの返事が111の場合、メール送信失敗
  useEffect(() => {

    const setMessage = () => {
      if(location.state === undefined) {
        setRedirect(true);
        }else if(location.state.status === "000") {
        setDoneMessage(true);
      } else if(location.state.status === "111") {
        setErrorMessage(true);
      }
    }
    setMessage()

    Aos.init({ duration: 1000, easing: 'ease-in-out' });

    // // ブログ記事の取得
    // const RssParser = require('rss-parser');
    // const url = 'https://channelworks.biz/blog/feed/';
    // const rssParser = new RssParser();

    // rssParser.parseURL(url)
    //   .then((feed) => {
    //     const data = feed.items;
    //     setArticle([...data]);
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setAjaxError(true); // ajax通信に失敗した場合は、メッセージを表示
    //   })

  }, [location.state]);

  return(
    <>

    {redirect && <Redirect to='/' />}
    {doneMessage && 
      <>

        <TopicPath
          url = { location.state.url }
          linkname = { location.state.name }
        />

        <div className={styles.top}>
          <LowerPageTop
            titleja = 'お見積もり依頼'
            titleen = 'Contact'
            text = 'お問い合わせありがとうございました。'
            img = '/Assets/img/contact/contact01.jpg'
            icon = ''
            content = {contents}
          />

          <motion.nav className={styles.linkRelatedContent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition:{ delay: .28, duraition: .5 } }}
            exit={{ opacity: 0, y: 10 ,transition: { duration: .2, ease: 'easeInOut' } }}
          >
            <ul>
              {relatedLinks.map((link, index) => {
                return(
                  <LinkRelatedContent
                    key = {index}
                    link = {link}
                  />
                )
              })}
            </ul>
          </motion.nav>
        </div>

      <motion.section className={styles.done01}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <p>お問い合わせ、ありがとうございました。<br />送信が完了しました。<br />確認次第、速やかに担当者よりご連絡いたします。</p>
        </motion.section>
        <motion.section className={styles.done02}
          variants={ mainVariants }
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <h3>提供するサービス</h3>
          <ul>
            {services.map((service, index) => {
              return(
                <li key={ index } className={styles[service.class]}>
                  <Link to={{ pathname: service.url, state: 'active' }}>
                    <div>
                      <img src={ service.img } alt={ service.alt } />
                    </div>
                    <h4>{ service.name }</h4>
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
        {/* <motion.section className="blog" id='blog'
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
        </motion.section> */}
        <ScrollToTop />
      </>
    }

    {errorMessage && 
      <>

        <TopicPath
          url = { location.state.url }
          linkname = { location.state.name }
        />

        <div className={styles.top}>
          <LowerPageTop
            titleja = 'お見積もり依頼'
            titleen = 'Contact'
            text = 'お気軽にお問い合わせください。'
            img = '/Assets/img/contact/contact01.jpg'
            icon = ''
            content = {contents}
          />
          <motion.nav className={styles.linkRelatedContent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition:{ delay: .28, duraition: .5 } }}
            exit={{ opacity: 0, y: 10 ,transition: { duration: .2, ease: 'easeInOut' } }}
          >
            <ul>
              {relatedLinks.map((link, index) => {
                return(
                  <LinkRelatedContent
                    key = {index}
                    link = {link}
                  />
                )
              })}
            </ul>
          </motion.nav>
        </div>

        <motion.section className={styles.done01}
          variants={ mainVariants }
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <p className={styles.errorMessage}>申し訳ございません。<br className='only-sp' />エラーが発生しました。<br />もう一度フォームからご入力ください。</p>
          <Button
            url = { location.state.url }
            name = '入力フォームに戻る'
          />
        </motion.section>

        <motion.section className={styles.done02}
          variants={ mainVariants }
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <h3>提供するサービス</h3>
          <ul>
            {services.map((service, index) => {
              return(
                <li key={ index } className={styles[service.class]}>
                  <Link to={{ pathname: service.url, state: 'active' }}>
                    <div>
                      <img src={ service.img } alt={ service.alt } />
                    </div>
                    <h4>{ service.name }</h4>
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

        {/* <motion.section className="blog" id='blog'
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
      </motion.section> */}
      <ScrollToTop />
    </>
    }
    
    </>
  )
};

export default ContactDone;
