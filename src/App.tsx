
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { NewHome } from './components/NewHome';
import { HeaderPage } from './layout/HeaderPage';
import { Profile } from './components/Profile';


function App() {

  return (
    // <div>DUSAN</div>
    <div className='workSpace'>
      <div className='headerSpace'>
        <HeaderPage />
      </div>
      <div className='contentSpace'>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="" element={<NewHome />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
