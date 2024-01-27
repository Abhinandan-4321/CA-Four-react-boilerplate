import { useState } from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';

function App() {
  const [isLight, setLight] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleBgChange = () => {
    isLight
      ? (document.body.style.backgroundImage = `url('/src/assets/day.jpg')`)
      : (document.body.style.backgroundImage = `url('/src/assets/night.jpeg')`);
    console.log(isLight);
    setLight(!isLight);
  };

  const start = () => {
    setIsGameStarted(true);
  };


  const renderStartPage = () => {
    return (
      <div>
        <button className="start" onClick={start}>Start Quiz</button>
      </div>
    );
  };

  const renderQuizPage = () => {
    return (
      <div>
        <div id="logoandbtn">
          <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" className="logo" />
          <button className="changeBg" onClick={handleBgChange}>
            {isLight ? 'Light Mode' : 'Dark'}
          </button>
        </div>
        <QuestionBox />
      </div>
    );
  };

  return <div>{isGameStarted ? renderQuizPage() : renderStartPage()}</div>;
}

export default App;
