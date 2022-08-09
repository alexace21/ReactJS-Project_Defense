import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';

import Top_Bar from './components/Header/TopBar';
import Clock from './components/Clock/Clock';
import Home from './components/Home/Home';
import Market from './components/grid-section/Market';
import Search from './components/grid-section/Search/Search';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Footer from './components/Footer/Footer';
import Page404 from './components/404/Page404';
import ProductDetails from './components/ProductDetails/ProductDetails';


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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/*' element={<Page404 />} />
          <Route path='/product-details' element={<ProductDetails />} />

        </Routes>
      </main>
      <Footer />
    </div>


  );
}

export default App;
