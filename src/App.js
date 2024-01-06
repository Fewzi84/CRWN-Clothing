import React from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
   <div>
    
        <Header/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>} />
    </Routes>
    
   </div>
  );
}

export default App;
