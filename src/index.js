import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider} from 'react-helmet-async';
import App from './App';
import reportWebVitals from './reportWebVitals';

// htmlに記載されている<div></div>部分に、全て挿入されます。
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <Helmet>
        <title>Channel Works</title>
        <meta name="description" content="チャネルワークス（Channel Works）は、マーケティングノウハウを基軸に集客・購買・認知UPなどの具体的な効果を確実に上げる専門集団です。Webサイトのことならお任せください。"></meta>
      </Helmet> */}
        <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.querySelector('div')
);

reportWebVitals();
