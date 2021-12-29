// 表示に必要なファイルなどをここで宣言します。
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Strength from './components/Strength';
import Service from './components/Service';
import ServiceWebProduction from './components/ServiceWebProduction';
import ServiceMarketing from './components/ServiceMarketing';
import ServiceUi from './components/ServiceUi';
import ServiceSystem from './components/ServiceSystem';
import ServiceContent from './components/ServiceContent';
import ServiceImage from './components/ServiceImage';
import Works from './components/Works';
import Estimate from './components/Estimate';
import Contact from './components/Contact';
import Company from './components/Company';
import ContactDone from './components/ContactDone';
import './styles/global.scss'

// ここでは各urlにどのファイルを表示するかを決めています。
const App = () => (
  
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <main>
      <Route render={({location}) => (
        <AnimatePresence exitBeforeEnter initial={false}>

          <Switch location={location} key={location.key}>
            <Route exact path="/" component={ Index } />
            <Route path="/strength" component={ Strength } />
            <Route exact path="/service" component={ Service } />
            <Route path="/service/web_production" component={ ServiceWebProduction } />
            <Route path="/service/marketing" component={ ServiceMarketing } />
            <Route path="/service/ui_ux" component={ ServiceUi } />
            <Route path="/service/system" component={ ServiceSystem } />
            <Route path="/service/content" component={ ServiceContent } />
            <Route path="/service/image" component={ ServiceImage } />
            <Route path="/works" component={ Works } />
            <Route path="/contact_estimate" component={ Estimate } />
            <Route path="/contact_us" component={ Contact } />
            <Route path="/contact/done" component={ ContactDone } />
            <Route path="/company" component={ Company } />
          </Switch>

        </AnimatePresence>
      )} />

    </main>
    <Footer />
  </BrowserRouter>
)

export default App;
