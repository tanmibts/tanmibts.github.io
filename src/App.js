// import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"

function App() {

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
          <div className="App-div">
            my name is victoria tan
          </div>
          <div className="App-div">
            i am a software engineer at <a className="App-link" href="https://www.streetlightdata.com/" >streetlight</a>
          </div>
          <div className="App-div"><div className="App-dots">...</div></div>
          <div className="App-div"><a className="App-link" href="mailto:victoria.em1281@gmail.com">victoria.em1281@gmail.com</a></div>
          <div className="App-div"><a className="App-link" href="https://www.linkedin.com/in/victoria-t-a69777b6/">linkedin</a></div>
          <div className="App-div"><a className="App-link" href="https://github.com/tanmibts/">github</a></div>
        </div>
      </body >
    </div >
  );
}

export default App;
