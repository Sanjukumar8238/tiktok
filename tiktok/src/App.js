import "./App.css";
import React from "react";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>This is good</h1>

      <div className="app__videos">
        <Video
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          channel="sanju"
          desciption="too  fndjn afd fa"
          song="fkasjf jeajf df nanjk ajl"
          likes={124}
          messages={21}
          shares={43}
        />
        <Video />
      </div>
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
