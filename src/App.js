import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile"; 
import FAQ from "./components/FAQ/Faq"; 
import Partners from "./components/Partners/Partners"; 
import { Wallets } from "./components/Wallets/Wallets";
import {Switch, Route} from "react-router-dom";
import Documents from "./components/Documents/Documents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
      <Switch>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Wallets" component={Wallets}/>
        <Route path="/settings" component={Profile} />
        <Route path="/faq" component={FAQ} />
        <Route path="/Partners" component={Partners} />
        <Route path="/Documents" component={Documents} />
      </Switch>
      </main>
      <nav className="App-nav">
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
