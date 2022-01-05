// サービス下層ページの共通部分
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from './index'
import styles from '../../styles/components/service.module.scss'

const ServiceLowerPage = (props) => {

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

  const [state, setState] = useState('none');
  const [btnState, btnSetState] = useState('block');

  const openFlow = () => {
    setState('block');
    btnSetState('none');
  }
  const visibility = {
    display: state
  };
  const hidden = {
    display: btnState
  }

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
  }, []);

  return(
    <>
      <motion.section id="service-contain02" className={styles.content02}
        variants={ mainVariants }
        initila='initial'
        animate='animate'
        exit='exit'
      >
        <h3>{props.name}の事例</h3>
        <div>
          <article>
            <Link to={{ pathname: '/works', state: props.works1.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={props.works1.img} alt={props.works1.client} />
                </div>
              </div>
              <h4>{props.works1.title}</h4>
            </Link>
          </article>
          <article>
            <Link to={{ pathname: '/works', state: props.works2.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={props.works2.img} alt={props.works2.client} />
                </div>
              </div>
              <h4>{props.works2.title}</h4>
            </Link>
          </article>
          <article>
            <Link to={{ pathname: '/works', state: props.works3.id }}>
              <div>
                <span>pick up</span>
                <div>
                  <img src={props.works3.img} alt={props.works3.client} />
                </div>
              </div>
              <h4>{props.works3.title}</h4>
            </Link>
          </article>
        </div>
        <Button
          url = '/works'
          name = 'すべての実績をみる'
        />
      </motion.section>
      <motion.section id="service-contain03" className={styles.content03}
        variants={ mainVariants }
        initila='initial'
        animate='animate'
        exit='exit'
      >
        <h3>{props.name}のサービス内容</h3>
        {props.contains.map((contain, index) => {
          return(
            <article key={index}>
              <h4>{contain.title}</h4>
              <p>{contain.text1}</p>
              <p>{contain.text2}</p>
            </article>
          )
        })}
        <div onClick={openFlow} style={hidden}>おおまかな流れをみる</div>
        <section style={visibility} data-aos='fade'>
          <h3>ご相談から納品までの、おおまかな流れ</h3>
          <p>
            製作・開発の対応におきましては、一般的に以下のような流れでご提供をさせていただいております。 
            ご要望を詳しくお伺いしそれを整理・見える化し、さらに具体的なアウトプットに落とし込んでいく形で、進行をさせていただきます。
          </p>
          <dl>
            {flowLists.map((flow, index) => {
              return(
                <div key={index}>
                  <dt>
                    {flow.title}
                    <span>{flow.period}</span>
                  </dt>
                  <dd>
                    {flow.text}
                  </dd>
                </div>
              )
            })}
          </dl>
        </section>
      </motion.section>
      <motion.section id="service-contain04" className={styles.content04}
        variants={ mainVariants }
        initila='initial'
        animate='animate'
        exit='exit'
      >
        <h3>{props.name}のメニュー</h3>
        <p>{props.name}には以下の内容があります。</p>
        <ul>
          {props.menu.map((menu, index) => {
            return(
              <li key={index}>
                <h4>{menu.title}</h4>
                <p>{menu.text}</p>
              </li>
            )
          })}
        </ul>
      </motion.section>
    </>
  )
}

export default ServiceLowerPage;