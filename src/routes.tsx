import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import Home from 'src/pages/home/home';
import About from 'src/pages/about/about';
import ActivateUser from 'src/pages/activate-user/activate-user';

const AppRoutes = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/activate/:token' element={<ActivateUser />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRoutes;
