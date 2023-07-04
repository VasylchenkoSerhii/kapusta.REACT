import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Balance from 'pages/Balance/Balance';
import Home from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { MobileProductPage } from 'components/MobileProductPage/MobileProductPage';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrevateRoute';
import Reports from 'pages/Reports/Reports';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={<RestrictedRoute component={Home} redirectTo='/balance' />}
        />
        <Route
          path='/balance'
          element={<PrivateRoute component={Balance} redirectTo='/' />}
        />
        <Route path='/mobile-product-page' element={<MobileProductPage />} />
        <Route path='/balance/reports' element={<Reports />} />
      </Route>
    </Routes>
  );
}
