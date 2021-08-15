// 強みと特徴ページ

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MediaQuery from 'react-responsive';
import Button from './atoms/Button';
import Contact from './atoms/Contact';
import LowerPageTop from './atoms/LowerPageTop';
import TopicPath from './atoms/TopicPath';
import ScrollToTop from './atoms/scrollToTop';
import Index from './atoms/Index';

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
      transition: { delay: .28, duration: 1, ease: 'easeInOut'  }
    },
    exit: {
      opacity: 0, 
      transition: { duration: .2, ease: 'easeInOut'}
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
    document.title='強みと特徴 | Channel Works'
  }, []);

  return(
    <>

      <nav id="topic-path">
        <TopicPath
          url = '/strength'
          linkname = 'Strength'
        />
      </nav>

      <section id="lowerpage-top">
        <LowerPageTop
          titleja = '強みと特徴'
          titleen = 'Strength'
          text = '実践的なマーケティングノウハウを基軸とした、効果創出を得意とします。'
          img = './Assets/img/strength/strength01.jpg'
          alt = '強みと特徴'
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
        チャネルワークスは、実践的なマーケティングノウハウを基軸に、<br className='other-sp'/>集客・ 購買・認知UPなどの具体的な効果創出に特化した<br className='other-sp'/>企画・設計・制作・開発のご提供を得意とします。<br/><br className='only-sp'/>
        また、品質と完了確実性を高めるため、独自の案件進行方法で<br className='other-sp'/>ご提案しております。
      </motion.p>

      <motion.section id="strength01"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>得意とする業務</h3>
        <article data-aos='fade-up'>
          <div>
              <h4>短期間で高度に実現する。<br/>マーケティング戦略</h4>
              <img src={articleImgs[0]} alt="マーケティング戦略" />
            <div>
              <p>
                <span>
                  実戦(実際のサイトやサービスの運営)を基とする、実践的なマーケティング実績が豊富です。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。
                </span>
              </p>
            </div>
          </div>
          <Button
            url = '/service/marketing'
            name = 'サービス内容をみる'
          />
        </article>
        <article data-aos='fade-up'>
          <div>
            <h4>
              <span>ターゲットユーザーを導く。<br/>UI/UX設計</span>
            </h4>
            <img src={articleImgs[1]} alt="UI/UX設計" />
            <div>
              <p>
                <span>
                  実戦(実際のサイトやサービスの運営)を基とする、実践的なマーケティング実績が豊富です。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。
                </span>
              </p>
            </div>
          </div>
          <Button
            url = '/service/ui_ux'
            name = 'サービス内容をみる'
          />
        </article>
        <article data-aos='fade-up'>
          <div>
            <h4>高い集客力を得ることが可能な、<br/>Webデザイン</h4>
            <img src={articleImgs[2]} alt="Webデザイン" />
            <div>
              <p>
                <span>
                  実戦(実際のサイトやサービスの運営)を基とする、実践的なマーケティング実績が豊富です。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。
                </span>
              </p>
            </div>
          </div>
          <Button
            url = '/service/web_production'
            name = 'サービス内容をみる'
          />
        </article>
        <article data-aos='fade-up'>
          <div>
            <h4>
              <span>高い集客力を得ることが可能な、<br/>各種フォーム開発</span>
            </h4>
            <img src={articleImgs[3]} alt="フォーム開発" />
            <div>
              <p>
                <span>
                  実戦(実際のサイトやサービスの運営)を基とする、実践的なマーケティング実績が豊富です。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。
                </span>
              </p>
            </div>
          </div>
          <Button
            url = '/service/system'
            name = 'サービス内容をみる'
          />
        </article>
        <article data-aos='fade-up'>
          <div>
            <h4>高い集客力を得ることが可能な、<br/>PR動画制作・写真撮影</h4>
            <img src={articleImgs[4]} alt="イメージ制作" />
            <div>
              <p>
                <span>
                  実戦(実際のサイトやサービスの運営)を基とする、実践的なマーケティング実績が豊富です。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。<br/>
                  <br/>
                  目的・ゴールが何なのかを明確にしたWebプロモーション広告。広告のプランニングは、ターゲットの明確化が重要となります。緻密な分析による、的確な広告戦略の設計をいたします。
                </span>
              </p>
            </div>
          </div>
          <Button
            url = '/service/image'
            name = 'サービス内容をみる'
          />
        </article>
      </motion.section>

      <motion.section id="strength02"
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3 data-aos='fade-up'>効果的な進め方</h3>
        <p data-aos='fade-up'>
          弊社では豊富な経験・実績から、進捗やタスクをわかりやすく、そして手戻りや検討不足、責任範囲の不明確化などによる諸問題を発生させないよう、以下のような方法をご提案しております。
        </p>
        <dl data-aos='fade-up'>
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
        <Index 
          contents = {contents}
        />
      </MediaQuery>
      
    </>
  )
};

export default Strength;