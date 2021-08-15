// 会社情報ページ

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LowerPageTop from './atoms/LowerPageTop';
import TopicPath from './atoms/TopicPath';
import Contact from './atoms/Contact';
import ScrollToTop from './atoms/scrollToTop';

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

const Company = () => {

  // 目次
  const contents = [
    {text: '会社概要', to: 'company01'},
    {text: '代表あいさつ', to: 'company02'},
    {text: 'メンバー紹介', to: 'company03'}
  ]

  // スクロールアニメーション設定
  const setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    dots: false
  }

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
    document.title='会社情報 | Channel Works' // タイトル
  }, []);

  return(
    
    <>
      <nav id="topic-path">
        <TopicPath
          url = '/company'
          linkname = 'Company'
        />
      </nav>

      <section id="lowerpage-top">
        <LowerPageTop
          titleja = '会社情報'
          titleen = 'Company'
          text = ''
          img = './Assets/img/company/company01.jpg'
          alt = '会社情報'
          content = { contents }
        />
      </section>

      <motion.section id="company01"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>会社概要</h3>
        <dl>
          <div>
            <dt>会社名</dt>
            <dd>合同会社チャネルワークス</dd>
          </div>
          <div>
            <dt>代表者</dt>
            <dd>代表社員：石田 真吾</dd>
          </div>
          <div>
            <dt>資本金</dt>
            <dd>60,000,000円</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>〒105-0013 東京都港区浜松町2-2-15 浜松町ダイヤビル2F</dd>
          </div>
          <div>
            <dt>創業/設立</dt>
            <dd>2017年2月3日 / 2018年4月2日</dd>
          </div>
          <div>
            <dt>主要事業</dt>
            <dd>
              マーケティング戦略・立案<br/>
              UI/UX設計および実施<br/>
              プロジェクトマネジメント・ディレクション<br/>
              Web・DTPデザイン全般<br/>
              Webシステム開発<br/>
              写真撮影<br/>
              イラストレーション<br/>
              PR動画制作<br/>
              コピーライティング<br/>
            </dd>
          </div>
          <div>
            <dt>対応スキル</dt>
            <div>
              <dd>
                <span>ビジュアル：</span>
                <span>Webサイト・システム設計、UI/UX設計、高度デザイン開発、写真撮影、イラスト制作、コピーライティング</span>
              </dd>
              <dd>
                <span>システム：</span>
                <span>HTML5（pug/Gulp対応可）、CSS3（sass対応可）、JavaScript（Jquery・Angular・React・Vue）、PHP、Python、Swift</span>
              </dd>
              <dd>
                <span>サーバー：</span>
                <span>Linux、AWS（EC2、S3など）</span>
              </dd>
            </div>
          </div>
          <div>
            <dt>対応ツール</dt>
            <div>
              <dd>
                <span>UI・UXツール：</span>
                <span>Figma、AdobeXD、sketch等</span>
              </dd>
              <dd>
                <span>デザインツール：</span>
                <span>Adobe Photoshop、Adobe Illustrator、Adobe InDesign、Video Studio等</span>
              </dd>
              <dd>
                <span>動画作成ツール：</span>
                <span>Adobe Premiers、Adobe After Effect、Adobe Audition、Video Studio等</span>
              </dd>
              <dd>
                <span>開発環境：</span>
                <span>Visual Stuido Code、Eclipse、php Storm等</span>
              </dd>
            </div>
          </div>
        </dl>
      </motion.section>

      <motion.section id="company02"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>代表あいさつ</h3>
        <article data-aos='fade-up'>
          <div></div>
          <div>
            <h5>初めまして。代表の石田真吾と申します。</h5>
            <p>
            私は、元々、雑誌・書籍のライター・編集者としてキャリアをスタートしました。
            その後、市場のITへの移り変わりと共にIT・Web界隈に足を踏み入れ、気づけば18年が経ちました。
            エリートコースからは程遠い何でも屋として過ごすうち、振り返れば、制作/開発・UI・UX設計・事業運営・マーケティング戦略 とさまざまな知見とノウハウ・スキル、実績を得るに至り、今日の生業となりました。
            </p>
            <p>
              これまで大・中・小あらゆる現場にて、億単位、数十人規模のプロジェクトから、単発数万円の案件まで、数多くの「実戦」を 経験し、現在に至っております。 
              弊社チャネルワークスは、そんな「実戦」の結果から、実のあるプロジェクト・課題解決のご支援提供を旨としております。
            </p>
          </div>
        </article>
      </motion.section>

      <motion.section id="company03"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>メンバー紹介</h3>
        <Slider {...setting}>
          <article data-aos='fade-up'>
            <div>
              <div></div>
              <h5>葵</h5>
              <p>Web・DTPデザイナー</p>
            </div>
            <p>
              Webの時代に馴染むや、たちまち紙からの脱却を目指す時代適合型デザイナー兼アートディレクター。
            </p>
            <p>
              基本的に知らない人はニガテだが、いざ知り合うと長い。仕事中に確認・質問などで邪魔をされるのを嫌がる代わりに仕事は早い。
            </p>
            <p>
              顧客のニーズを的確に汲み取りビジュアルイメージに落とすのがもっとも得意。
            </p>
          </article>
          <article data-aos='fade-up'>
            <div>
              <div></div>
              <h5>伊藤</h5>
              <p>Web・DTPデザイナー</p>
            </div>
            <p>
              Webの時代に馴染むや、たちまち紙からの脱却を目指す時代適合型デザイナー兼アートディレクター。
            </p>
            <p>
              基本的に知らない人はニガテだが、いざ知り合うと長い。仕事中に確認・質問などで邪魔をされるのを嫌がる代わりに仕事は早い。
            </p>
            <p>
              顧客のニーズを的確に汲み取りビジュアルイメージに落とすのがもっとも得意。
            </p>
          </article>
          <article data-aos='fade-up'>
            <div>
              <div></div>
              <h5>伊藤</h5>
              <p>Web・DTPデザイナー</p>
            </div>
            <p>
              Webの時代に馴染むや、たちまち紙からの脱却を目指す時代適合型デザイナー兼アートディレクター。
            </p>
            <p>
              基本的に知らない人はニガテだが、いざ知り合うと長い。仕事中に確認・質問などで邪魔をされるのを嫌がる代わりに仕事は早い。
            </p>
            <p>
              顧客のニーズを的確に汲み取りビジュアルイメージに落とすのがもっとも得意。
            </p>
          </article>
        </Slider>
      </motion.section>
      
      <motion.section className='contact'
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

export default Company;