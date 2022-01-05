// 強みと特徴ページ
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MediaQuery from 'react-responsive';
import { Button, Contact, TopicPath, ScrollToTop, Table, LowerPageTop } from './atoms'
import styles from '../styles/components/strength.module.scss'

const Strength = () => {

  // 目次
  const contents = [
    {text: '得意とする業務', to: 'strength01'},
    {text: '効果的な進め方', to: 'strength02'}
  ]

  // 各強み項目画像
  const articleImgs = [
    './Assets/img/strength/strength02.jpg',
    './Assets/img/strength/strength03.jpg',
    './Assets/img/strength/strength04.jpg',
    './Assets/img/strength/strength05.jpg',
    './Assets/img/strength/strength06.jpg'
  ]

  // アニメーション設定
  const mainVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: { delay: .15, duration: 1, ease: 'easeInOut'  }
    },
    exit: {
      opacity: 0, 
      transition: { duration: .1, ease: 'easeInOut'}
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500, easing: 'ease-in-out' });
    document.title='強みと特徴 | Channel Works'
  }, []);

  return(
    <>

      <TopicPath
        url = '/strength'
        linkname = 'Strength'
      />

      <LowerPageTop
        titleja = '強みと特徴'
        titleen = 'Strength'
        text = '実践的なマーケティングノウハウを基軸とした、効果創出を得意とします。'
        img = './Assets/img/strength/strength01.jpg'
        alt = '強みと特徴'
        icon = ''
        content = { contents }
      />

      <motion.p className={styles.lowerpageToptext}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        チャネルワークスは、実践的なマーケティングノウハウを基軸に、<br className={styles.pc}/>集客・ 購買・登録・認知UPなどの具体的な効果（CV）創出に特化した<br className={styles.pc}/>Web/アプリの企画・設計・制作・開発のご提供を得意としています。<br/><br className={styles.sp} />
        また、あらゆるお客様・案件での品質向上・安定化と案件完了確実性を<br className={styles.pc}/>高めるため、独自の案件進行方法でのご提案をさせていただきます。
      </motion.p>

      <motion.section className={styles.strength01} id='strength01'
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>得意とする業務</h3>
        <article data-aos='fade-up'>
          <div>
            <span>1. Marketing</span>
            <h4>短期間で確実・高度に実現する、貴社に最適化した<br/>マーケティング戦略立案・実践支援</h4>
            <p>
              実戦(実際のサイトやサービスの運営)経験からのノウハウを基軸とした、実践的なマーケティング実績を多数保有します。
              コンテンツマーケティングを中心としたSEO施策や、UI/UX向上を基とした最適な導線設計から、継続的な効果創出をご支援。
              この他にも、検索エンジン連動広告、バナー広告ネットワーク、SNS運用などあらゆるプロモーション手段をサポートします。
            </p>
            <Button
              url = '/service/marketing'
              name = 'サービス内容をみる'
            />
          </div>
          <div>
            <img src={articleImgs[0]} alt="マーケティング戦略" />
          </div>
        </article>

        <article data-aos='fade-up'>
          <div>
            <span>2. UI/UX</span>
            <h4>
              ターゲットユーザーを正確に目的へと導く、<br/>先端ニーズにマッチしたUI/UX設計
            </h4>
            <p>
              表現手法の進化・発展に伴うさまざまな形態や形状に最適化したユーザーインターフェイスは効果創出の最短経路。
              技術だけでも、デザインだけでも到達し得ない、高度なユーザー定義とインターフェイス設計をご提供します。
              数多くの事例・実例に裏打ちされたチャネルワークスのUI/UX設計が、貴社サービスを成功に導きます。
            </p>
            <Button
              url = '/service/ui_ux'
              name = 'サービス内容をみる'
            />
          </div>
          <div>
            <img src={articleImgs[1]} alt="UI/UX設計" />
          </div>
        </article>

        <article data-aos='fade-up'>
          <div>
            <span>3. Design</span>
            <h4>企業・サービス・製品のブランド価値を<br />最大限に表現する、デザイン技術</h4>
            <p>
              好き・嫌いだけではない、多くのユーザーが「これだ」と感じる無理のないデザイン表現。
              華美でもなく、質素すぎることもない、最適な装飾・イメージ作りはブランディングに不可欠の要素です。
              チャネルワークスのデザイン技術は、「”顧客の顧客”にとって最適なアウトプット」を目指します。
            </p>
            <Button
              url = '/service/web_production'
              name = 'サービス内容をみる'
            />
          </div>
          <div>
            <img src={articleImgs[2]} alt="Webデザイン" />
          </div>
        </article>

        <article data-aos='fade-up'>
          <div>
            <span>4. Form development</span>
            <h4>
              あらゆるサイトのゴールである”フォーム”。<br />その最適化をご支援します。
            </h4>
            <p>
              EC/通販サイト、予約、登録、問い合わせ、それらすべてはフォームに集約されます。
              フォームは時代ごとに進化し、チャットボット、AI応答など形状はますます進化を遂げていくでしょう。
              チャネルワークスでは、それらの進化に合わせて、サービスに最適なフォーム構造をご提案します。
            </p>
            <Button
              url = '/service/system'
              name = 'サービス内容をみる'
            />
          </div>
          <div>
            <img src={articleImgs[3]} alt="フォーム開発" />
          </div>
        </article>

        <article data-aos='fade-up'>
          <div>
            <span>4. Video production</span>
            <h4>なによりも雄弁に企業・製品・サービスの魅力を<br />訴求する、イメージ撮影＆PR動画制作</h4>
            <p>
              100万言のテキストよりも1枚の写真、1分の動画のほうが効果を発揮することがあります。
              しかし、ありふれたイメージ・動画では、かえって冗長な情報発信になりかねません。
              チャネルワークスでは、それが効果創出のための最適な表現となる箇所に適切なイメージ・動画を制作します。
            </p>
            <Button
              url = '/service/image'
              name = 'サービス内容をみる'
            />
          </div>
          <div>
            <img src={articleImgs[4]} alt="イメージ制作" />
          </div>
        </article>
      </motion.section>

      <motion.section className={styles.strength02} id='strength02'
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>効果的な進め方</h3>
        <p>
          弊社では豊富な経験・実績から、進捗やタスクをわかりやすく、そして手戻りや検討不足、責任範囲の不明確化などによる諸問題を発生させないよう、以下のような方法をご提案しております。
        </p>
        <dl>
          <div>
            <dt>
              <span>STEP 01</span>
              事前認識を共通化
            </dt>
            <dd>
              サービスご提供に際しての前提認識すり合わせを行います。<br/>
              雛形資料を元に<span>内容調整の上で合意形成</span>します。
            </dd>
          </div>
          <div>
            <dt>
              <span>STEP 02</span>
              双方の全タスク明確化
            </dt>
            <dd>
              ブラウザで利用できるタスク管理ツールを元に、<span>納品までに必要なタスクを明示</span>し、各工程を明確化します。
            </dd>
          </div>
          <div>
            <dt>
              <span>STEP 03</span>
              進捗・対応内容明確化
            </dt>
            <dd>
            いつ、誰が、何を、どうするのか、したのかを、<span>クラウドで「見える化」</span>しリアルタイムで管理します。
            </dd>
          </div>
          <div>
            <dt>
              <span>STEP 04</span>
              アウトプット共通管理
            </dt>
            <dd>
              作成した設計・デザインなどは、同じくクラウド上で管理し、<span>最新状態でチェックやご要望</span>をいただけます。
            </dd>
          </div>
        </dl>
        <p>
          Webサイトシステムやアプリ、サービスなどを構築する際、案件の進行方法は品質やスケジュールに大きく影響します。
          上手に管理し、トラブルや、案件が途中終了してしまうなどの大きな損失を発生させる原因を作らないよう、進めてまいります。
        </p>
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
        <Table
          contents = {contents}
        />
      </MediaQuery>
      
    </>
  )
};

export default Strength;