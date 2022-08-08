import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';

import Top_Bar from './components/Header/TopBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Clock from './components/Clock/Clock';
import Market from './components/grid-section/Market';
import Search from './components/grid-section/Search/Search';
import './App.css'

function App() {
  return (

    <div id="box">

      <Top_Bar />
      <main id='main-content'>
        <Routes>


          <Route path='/' element={
          [<Clock />,<Home />, ]
          } />

          <Route path='/market' element={[<Search />,<Market />]} />


        </Routes>
      </main>
      <Footer />
    </div>


  );
}

export default App;
