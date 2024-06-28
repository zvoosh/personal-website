import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Header, NewHome, ProjectComponent} from './components';


function App() {

  const primaryColor = {
    cornBlue: '#6495ED',
    green: "#388e3c",
    red: "#fd5959",
    orange: "#FF7F50",
    purple: {
      header: "#2E5EAA",
      card: "#2E5EAA",
      puzzle: "#EDB458",
    },
  }

  return (
    <div className='workSpace'>
      <div className='headerSpace'>
        <Header primaryColor={primaryColor.orange}/>
      </div>
      <div className='contentSpace'>
        <Routes>
          <Route path='/' element={<NewHome primaryColor={primaryColor.purple.card}/>}></Route>
          <Route path='/projects' element={<ProjectComponent primaryColor={primaryColor.purple.puzzle}/>}></Route>
        </Routes>
      </div>
    </div >
  )
}

export default App;
