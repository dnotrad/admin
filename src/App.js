import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Switch, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
      <Switch>
        <Route path="/settings" component={Profile} />
      </Switch>
      </main>
      <nav className="App-nav">
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
