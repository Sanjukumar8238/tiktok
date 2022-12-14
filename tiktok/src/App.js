import "./App.css";
import React from "react";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>This is good</h1>

      <div className="app__videos">
        <Video />
        <Video />
      </div>
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
