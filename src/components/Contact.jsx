// 各種お問い合わせページ
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { TopicPath, LowerPageTop, LinkRelatedContent } from './atoms';
import styles from '../styles/components/contact.module.scss';

const Contact = () => {

  const contents = [];
  const history = useHistory();

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

  // チェックリスト項目
  const serviceLists = [
    'マーケティング戦略支援・運用',
    'UI/UX設計・構築',
    'Webサイト設計・構築',
    'Webシステム開発',
    'イメージ撮影・PR動画制作',
    'コンテンツ開発   '
  ]

  const { register, formState: {errors}, handleSubmit, getValues } = useForm();
  const [phpError, setPHPError] = useState(false);

  // phpとのajax通信
  const onSubmit = (data) => {
    fetch("https://channelworks.biz/form/contact.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => done(data))
  }

  // 000はphpのバリデーションを通過し、メール送信が完了した場合 → お問い合わせ完了ページへ遷移
  // 111はphpのバリデーションを通過したが、メール送信に失敗した場合 → お問い合わせ完了ページへ遷移（エラーメッセージ表示）
  // その他（222）はphpのバリデーションでエラーが出た場合、または、何らかの理由で空送信された場合 → お問い合わせページへリダイレクト（エラーメッセージ表示）
  const done = (data) => {
    if(data.state === '000' || data.state === '111') {
      history.push({
        pathname: '/contact/done',
        state: {status: data.state, url: '/contact_us', name: 'Contact us'}
      })
    } else {
      setPHPError(true);
    }
  }

  // チェックボックスのバリデーション
  const serviceAtLeastOne = () => 
  getValues('service').length ? true : '選択してください。';

  // アニメーション設定
  const mainVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: { delay: .5, duration: 1, ease: 'easeInOut'  }
    },
    exit: {
      opacity: 0, 
      transition: { duration: .4, ease: 'easeInOut'}
    }
  }

  useEffect(() => {
    document.title='各種お問合わせ | Channel Works' // タイトル
  })

  return(
    <>
      <TopicPath
        url = '/contact_us'
        linkname = 'Contact us'
      />

      <div className={styles.top}>
        <LowerPageTop
          titleja = '各種ご相談'
          titleen = 'Contact'
          text = 'お気軽にお問い合わせください。'
          img = '/Assets/img/contact/contact01.jpg'
          icon = ''
          content = {contents}
        />
        <motion.nav className={styles.linkRelatedContent}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition:{ delay: .28, duraition: .5 } }}
          exit={{ opacity:0, y: 10 ,transition: { duration: .2, ease: 'easeInOut' } }}
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

      <motion.section className={styles.form}
        variants={ mainVariants }
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h3>各種お問い合わせ</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <dl>
            <div className={styles.form01}>
              <dt>
                お問い合わせ内容
                <span>必須</span>
              </dt>
              <div>
                {serviceLists.map((service, index) => {
                  return(
                    <dd key={index}>
                      <input 
                        type='checkbox' 
                        id={`contactService${index}`} 
                        value={service} {...register('service[]', 
                        {validate: serviceAtLeastOne}
                        )} 
                      />
                      <label htmlFor={`contactService${index}`}>
                        {service}
                      </label>
                    </dd>
                  )
                })}
                {errors.service && <small>{errors.service.message}</small>}
              </div>
            </div>
            <div>
              <dt>
                氏名
                <span>必須</span>
              </dt>
              <dd className={`${styles.contactWid} ${styles.half}`}>
                <input 
                  type="text" 
                  placeholder="例：田中太朗" 
                  {...register('yourName', 
                    {required: '入力してください。', maxLength: {value: 20, message: '20文字以下で入力してください。'}, pattern: {value: /^[a-zA-Zぁ-んァ-ン一-龥]+$/, message: '正しく入力してください。'}}
                  )} 
                />
                {errors.yourName && <small>{errors.yourName.message}</small>}
              </dd>
            </div>
            <div>
              <dt>
                メールアドレス
                <span>必須</span>
              </dt>
              <dd className={styles.contactWid}>
                <input 
                  type="text" 
                  placeholder="例：email@channelworks.biz" 
                  {...register('email', 
                    {required: '入力してください。', pattern: {value: /^\S+@\S+$/, message: '正しく入力してください。'}, maxLength: {value: 254, message: '254文字以内で入力してください。'}}
                  )} 
                />
                {errors.email && <small>{errors.email.message}</small>}
              </dd>
            </div>
            <div>
              <dt>
                電話番号
              </dt>
              <dd className={`${styles.contactWid} ${styles.half}`}>
                <input 
                  type="number" 
                  placeholder="例：0123456789" 
                  {...register('phoneNum', 
                    {pattern: {value: /[0-9０-９]/, message: '数字を入力してください。'}, maxLength: {value: 11, message: '11文字以内で入力してください。'}, minLength: {value: 9, message: '9文字以上で入力してください。'}}
                  )} 
                />
                {errors.phoneNum && <small>{errors.phoneNum.message}</small>}
              </dd>
            </div>
            <div>
              <dt>
                会社・組織名
              </dt>
              <dd className={styles.contactWid}>
              <input 
                  type="text"   
                  placeholder="例：合同会社チャネルワークス" 
                  {...register
                    ('companyName', {maxLength: {value: 50, message: '50文字以内で入力してください。'}}
                  )} 
                />
                {errors.companyName && <small>{errors.companyName.message}</small>}
              </dd>
            </div>
            <div>
              <dt>
                お問い合わせ内容詳細
              </dt>
              <dd className={styles.contactWid}>
                <textarea {...register('contain', {maxLength: {value: 1000, message: '1,000文字以内で入力してください。'}})} />
                {errors.contain && <samll>{errors.contain.message}</samll>}
              </dd>
            </div>
          </dl>
          <input id='submit' type='submit' value='送信する' className={styles.submit}/>
          {phpError && <small>入力内容をご確認ください。</small>}
        </form>
      </motion.section>
      
    </>
  )
}

export default Contact;