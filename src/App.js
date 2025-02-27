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

  useEffect(() => {
    let scrollTarget = window.scrollY;
    let isScrolling = false;
    let easeFactor = 0.02; // Чем меньше, тем плавнее

    const handleWheel = (event) => {
      event.preventDefault();

      scrollTarget += event.deltaY * 1.5; // Меньший коэффициент ускорения для мягкости
      scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));

      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      const currentScroll = window.scrollY;
      const distance = scrollTarget - currentScroll;

      if (Math.abs(distance) > 0.5) {
        window.scrollTo(0, currentScroll + distance * easeFactor);
        requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
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
