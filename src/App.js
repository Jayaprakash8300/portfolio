import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Project from './routes/Project';
import About from './routes/About';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/project' element={<Project></Project>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
    </>
  );
}

export default App;
