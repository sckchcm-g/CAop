import React, { useEffect, useState } from "react";
import "./App.css";
// import questions from "./questions";
// import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Navbar from './components/Navibar'
// import DarkModeButton from "./components/Darkmodebtn";
// import ThemeChanger from "./components/ThemeChanger";



function App() {

  return (
    <div>
      <Navbar />
      <QuestionBox />
    </div>
  );
}

export default App;