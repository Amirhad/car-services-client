import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import SignIn from './components/Sign/SignIn'
import SignInUp from './components/Sign/SignInUp'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignInUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
