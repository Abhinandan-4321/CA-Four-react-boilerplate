import { useState } from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';
import day from './assets/day.jpg'
import night from './assets/night.jpeg'

function App() {
  // setting states for dark mode, game start button
  const [isLight, setLight] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  // function for handling dark mode
  const handleBgChange = () => {
    isLight
      ? (document.body.style.backgroundImage = `url(${day})`)
      : (document.body.style.backgroundImage = `url(${night})`);
    console.log(isLight);
    setLight(!isLight);
  };

  //function for handling start button
  const start = () => {
    setIsGameStarted(true);
  };

  //for start button
  const renderStartPage = () => {
    return (
      <div>
        <button className="start" onClick={start}>Start Quiz</button>
      </div>
    )
  }

  //function for rendering quiz page
  const renderQuizPage = () => {
    return (
      <div>
        <div id="logoandbtn">
          <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" className="logo" />
          <button className="changeBg" onClick={handleBgChange}>{isLight ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
        <QuestionBox />
      </div>
    );
  };

  return <div>{isGameStarted ? renderQuizPage() : renderStartPage()}</div>;
}

export default App;
