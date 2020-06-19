import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PianoPage from "./pages/pianopage/pianopage.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/piano" component={PianoPage} />
      </Switch>
      <Footer />
    </div>
  );
}
