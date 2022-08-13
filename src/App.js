import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { AuthProvider } from './context/AuthContext';

import {PrivateRoute} from './components/Common/PrivateRoute';
import {PrivateGuard} from './components/Common/PrivateRoute';
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
import Logout from './components/Logout/Logout';

import './App.css'

function App() {
  return (
    <AuthProvider>
      <div id="box">
        {/* Navigation */}
        <Top_Bar />
        <main id='main-content'>
          <Routes>
            {/*Home Page*/}
            <Route path='/' element={
              [<Clock />, <Home />,]
            } />
            {/* Market Page*/}
            <Route path='/market' element={[<Search />, <Market />]} />
            <Route path='/market/:productId' element={[<Search />, <Market />]} />
            {/* Login Page ( Only for Guest users ) */}
            <Route path='/login' element={<PrivateGuard><Login /></PrivateGuard>} />
            {/* Register Page ( Only for Guest users ) */}
            <Route path='/register' element={<PrivateGuard><Register /></PrivateGuard>} />
            {/* Logout Page ( Only for Logged-in users ) */}
            <Route path='/logout' element={<PrivateRoute><Logout /></PrivateRoute>} />
            {/* Create Page ( Only for logged-in users ) */}
            <Route path='/create' element={<PrivateRoute><Create /></PrivateRoute>} />
            {/*Product-Details Page*/}
            <Route path='/product-details/:productId' element={<ProductDetails />} />
            {/* 404 Page */}
            <Route path='/*' element={<Page404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>

  );
}

export default App;
