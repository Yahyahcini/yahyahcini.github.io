
import app from './App.css';
import Mainpage from "./hooks/Mainpage";
import { Routes, Route } from 'react-router-dom';
import Projects from './hooks/Projects';
import Contact from './hooks/Contact';


function App() {
  
  return (
    <div className=" !scroll-smooth">
      <Routes className=" !scroll-smooth">
        <Route path='/' element={<Mainpage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
 
    </div>
  );
}
export default App;
