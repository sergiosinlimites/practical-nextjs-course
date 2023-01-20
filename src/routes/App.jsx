import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '@context/AppContext';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import Home from '@templates/Home';
import NotFound from '@templates/NotFound';
import NewPassword from '@containers/NewPassword';
import RecoverPassword from '@containers/RecoverPassword';
import Products from '@templates/Products';
import Orders from '@templates/Orders';
import Categories from '@templates/Categories';
import Checkout from '@templates/Checkout';
import '@styles/global.css';
import useInitialState from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={ <Home /> }></Route>
            <Route exact path='/login' element={ <Login /> }></Route>
            <Route exact path='/forgot' element={ <NewPassword /> }></Route>
            <Route exact path='/email-forgot' element={ <RecoverPassword /> }></Route>
            <Route exact path='/products' element={ <Products /> }></Route>
            <Route exact path='/categories' element={ <Categories /> }></Route>
            <Route exact path='/checkout' element={ <Checkout /> }></Route>
            <Route exact path='/orders' element={ <Orders /> }></Route>
            <Route path='*' element={ <NotFound /> }></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;