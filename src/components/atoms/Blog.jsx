// ブログ記事の表示

import React from 'react';

const Blog = ( props ) => {

  const img = props.img[0].replace('src="', ""); // アイキャッチのsrc中を取得
  const deletTime = props.data.substring(0, props.data.indexOf('T')); // 時刻表示を削除
  const data = deletTime.replace(/-/g, '.'); // 表示を2020-01-01から2020.01.01に変更

  return(
    <>
      <article key={ props.index }>
        <a href={ props.url }>
          <div>
            <img src={ img } alt={ props.title } />
          </div>
          <div>
            <span>
              <data>{ data }</data> / { props.category }
            </span><br />
            <h4><span>{ props.title }</span></h4>
          </div>
          </a>
      </article>
    </>
  )
}

export default Blog;