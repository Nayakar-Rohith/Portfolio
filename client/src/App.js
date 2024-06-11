import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Nopage from './components/Nopage';
import Navbar from './components/Navbar';
function App() {
  return (
  <>
    <Navbar/>
        <Home/>
  </>
  );
}

export default App;
