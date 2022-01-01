// 表示に必要なファイルなどをここで宣言します。
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './modules/ScrollToTop';
import * as Component from './components'
import './styles/global.scss'

// ここでは各urlにどのファイルを表示するかを決めています。
const App = () => (
  
  <BrowserRouter>
    <ScrollToTop />
    <Component.Header />
    <main>
      <Route render={({location}) => (
        <AnimatePresence exitBeforeEnter initial={false}>

          <Switch location={location} key={location.key}>
            <Route exact path="/" component={ Component.Home } />
            <Route path="/strength" component={ Component.Strength } />
            <Route exact path="/service" component={ Component.Service } />
            <Route path="/service/web_production" component={ Component.ServiceWebProduction } />
            <Route path="/service/marketing" component={ Component.ServiceMarketing } />
            <Route path="/service/consulting" component={ Component.ServiceConsulting } />
            <Route path="/service/ui_ux" component={ Component.ServiceUi } />
            <Route path="/service/system" component={ Component.ServiceSystem } />
            <Route path="/service/content" component={ Component.ServiceContent } />
            <Route path="/service/image" component={ Component.ServiceImage } />
            <Route path="/works" component={ Component.Works } />
            <Route path="/contact_estimate" component={ Component.Estimate } />
            <Route path="/contact_us" component={ Component.Contact } />
            <Route path="/contact/done" component={ Component.ContactDone } />
            <Route path="/company" component={ Component.Company } />
          </Switch>

        </AnimatePresence>
      )} />

    </main>
    <Component.Footer />
  </BrowserRouter>
)

export default App;
