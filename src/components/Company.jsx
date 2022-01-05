// 会社情報ページ

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { LowerPageTop, TopicPath, Contact, ScrollToTop } from './atoms';
import styles from '../styles/components/company.module.scss'

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
  ]

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
    document.title='会社情報 | Channel Works' // タイトル
  }, []);

  return(
    <>
      <TopicPath
        url = '/company'
        linkname = 'Company'
      />

      <LowerPageTop
        titleja = '会社情報'
        titleen = 'Company'
        text = ''
        img = './Assets/img/company/company01.jpg'
        alt = '会社情報'
        content = { contents }
      />

      <motion.section id="company01" className={styles.company01}
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
            <dd>6,000,000円</dd>
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
            <div>
              <dd>デジタルマーケティング戦略立案・改善・運用</dd>
              <dd>UI/UX設計・改善、および実装</dd>
              <dd>プロジェクトマネジメント・ディレクション</dd>
              <dd>Web・アプリ・DTPデザイン全般</dd>
              <dd>Web・アプリのシステム開発</dd>
              <dd>写真（スチール）撮影</dd>
              <dd>PR・セールス動画制作</dd>
              <dd>イラストレーション</dd>
              <dd>コピーライティング</dd>
            </div>
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

      <motion.section id="company02" className={styles.company02}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>代表あいさつ</h3>
        <article>
          <div>
            <img src='./Assets/img/company/company03.jpg' alt='石田真吾' />
          </div>
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