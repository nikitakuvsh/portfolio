import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import './main.css';
import MainPage from "./components/MainPage/MainPage";
import Projects from './components/Projects/Projects';
import MyStack from './components/MyStack/MyStack';
import AboutMe from './components/AboutMe/AboutMe';
import Achievements from './components/Achievements/Achievements';
import backgroundAnimations from './components/backgroundAnimations/backgroundAnimations';

function App() {

  useEffect(() => {
    backgroundAnimations();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="animated-background">
            <canvas id="lines-canvas"></canvas>
        </div>
        <MainPage />
        <MyStack />
        <Projects />
        <Achievements />
        <AboutMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
