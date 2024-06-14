import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Header, NewHome, ProjectComponent} from './components';


function App() {

  return (
    <div className='workSpace'>
      <div className='headerSpace'>
        <Header/>
      </div>
      <div className='contentSpace'>
        <Routes>
          <Route path='/' element={<NewHome />}></Route>
          <Route path='/projects' element={<ProjectComponent />}></Route>
        </Routes>
      </div>
    </div >
  )
}

export default App;
