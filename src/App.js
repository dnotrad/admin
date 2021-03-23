import React   from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import FAQ from "./components/FAQ/Faq";
import Partners from "./components/Partners/Partners";
import Wallets from "./components/Wallets/Wallets";
import { Switch, Route } from "react-router-dom";
import Documents from "./components/Documents/Documents";
import Garant from "./components/Garant/Garant";
import Calc from "./components/Calc/Calc";

import { useTranslation } from "react-i18next";
import News from "./components/News/News";
import Invest from "./components/Invest/Invest";
import Portfolio from "./components/Portfolio/Portfolio";


function App() {

  const { t, i18n } = useTranslation(); //хук для смены языка
  const changeLanguage = (language) => { // меняет язык, принимает "ru" или "en"
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Wallets" component={Wallets} />
          <Route path="/settings" component={Profile} />
          <Route path="/Investments" component={Invest} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/faq" component={FAQ} />
          <Route path="/Partners" component={Partners} />
          <Route path="/Documents" component={Documents} />
          <Route path="/Garant" component={Garant} />
          <Route path="/Profit" component={Calc} />
          <Route path="/News" component={News} />
        </Switch>
      </main>
      <nav className="App-nav">
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
