import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { Contactme } from './Components/Contactme';
import { Home } from './Components/Home';
import GithubCalendar from './Components/GithubCalendar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubCalendar />
      <Contactme />
    </div>
  );
}

export default App;
