import { BrowserRouter } from 'react-router-dom';
import './main.css';
import MainPage from "./components/MainPage/MainPage";
import Projects from './components/Projects/Projects';
import MyStack from './components/MyStack/MyStack';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MainPage />
        <MyStack />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
