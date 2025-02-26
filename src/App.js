import './App.css';
import Typing from '././Components/Typing/Typing'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import MemoryMove from './Components/MemoryMove/MemoryMove';
import Main from './Components/Main Page/Main';

function App() {
  return (
    
    <Router>
      <div className='App'>
        
        
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/typing' element={<Typing/>} />
      <Route path='/memorymove' element={<MemoryMove/>} />
    </Routes>
      </div>
    
    </Router>

    


  );
}

export default App;
