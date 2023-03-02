import React from 'react';
import News from "./layouts/News/News";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <News />
      <div className="sidebar">Hot News</div>
    </div>
  )
}

export default App