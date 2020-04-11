import React from "react";
import "./App.css";

function App() {
  return (
    <div className=".App">
      <div>
        <span className="text">my name is victoria tan</span>
      </div>
      <div>
        <span className="text">
          {"i am a software engineer at "}
          <a className="styledLink" href="https://www.transposit.com/">
            {"transposit"}
          </a>
        </span>
      </div>
      <div className="dots">...</div>
      <div>
        <a className="styledLink" href="mailto:victoria.em1281@gmail.com">
          {"victoria.em1281@gmail.com"}
        </a>
      </div>
      <div>
        <a
          className="styledLink"
          href="https://www.linkedin.com/in/victoria-tan-a69777b6/"
        >
          {"linkedin"}
        </a>
      </div>
      <div>
        <a className="styledLink" href="https://github.com/tanmibts">
          {"github"}
        </a>
      </div>
    </div>
  );
}

export default App;
