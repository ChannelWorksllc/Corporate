// 各ページの下に設置している、お問い合わせページへのリンクを貼ったセクション
import React from 'react';
import Button from './Button';
import styles from '../../styles/components/contact.module.scss'

const Contact = () => {
  return(
    <article className={styles.contact}>
    <div>
      <h3>Contact</h3>
      <p>
        お気軽に<br className='only-sp'/>お問い合わせください。
      </p>
    </div>
    <div>
      <Button
        url = '/contact_estimate'
        name = 'お見積もり依頼'
      />
      <Button
        url = '/contact_us'
        name = '各種お問い合わせ'
      />
    </div>
    </article>
  )
}

export default Contact;