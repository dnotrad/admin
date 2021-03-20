import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import FAQ from "./components/FAQ/Faq";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
      <Switch>
        <Route path='/Dashboard' component={Dashboard} />
        <Route path="/settings" component={Profile} />
        <Route path="/faq" component={FAQ} />
        <Route path="/Partners" component={Partners} />
      </Switch>
      </main>
      <nav className="App-nav">
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
