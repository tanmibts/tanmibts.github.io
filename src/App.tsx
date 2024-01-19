// import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { BusinessCard } from './BusinessCard/BusinessCard';
import { Projects } from './Projects/Projects';
import { Dots } from './Misc/Misc';

const App = () => {

  useEffect(() => {
    document.title = "victoria"
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <link rel="icon" href="/favicon.ico"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300i,400&amp;display=swap" rel="stylesheet"></link>
      </header>
      <body>
        <div className="App-text">
          <BusinessCard />
          <Dots />
          <Projects />
        </div>
      </body >
    </div >
  );
}

export default App;
