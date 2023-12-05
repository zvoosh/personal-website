import { useEffect, useRef } from 'react';
import './App.css'
import { Header } from './components/Header';
import { NewHome } from './components/NewHome';


function App() {
  const welcomeDiv = document.getElementById('welcomeDiv');
  useEffect(() => {
    welcomeDiv?.classList.add('animated');
  }, [welcomeDiv])


  const scrollToTop = () => {
    const targetDiv = document.getElementById('yourDivId');



    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scrolls to the top of the div
      });
    }
  };


  return (
    <div className='workSpace'>
      <div className='headerSpace'>
        <Header fn={scrollToTop} />
      </div>
      <div className='contentSpace'>
        <NewHome />
      </div>
    </div >
  )
}

export default App;
