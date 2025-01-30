import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './main.css';
import MainPage from "./components/MainPage/MainPage";
import Projects from './components/Projects/Projects';
import MyStack from './components/MyStack/MyStack';
import AboutMe from './components/AboutMe/AboutMe';
import Achievements from './components/Achievements/Achievements';
import Project from './components/Project/Project';
import ContactMe from './components/ContactMe/ContactMe';
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
        <Routes>
          <Route path="/" element={
            <>
              <MainPage />
              <MyStack />
              <Projects />
              <Achievements />
              <AboutMe />
              <ContactMe />
            </>
          } />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
