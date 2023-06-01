import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Balance from 'pages/Balance/Balance';
import Home from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/balanse' element={<Balance />} />
      </Route>
    </Routes>
  );
}
