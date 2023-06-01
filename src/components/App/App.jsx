import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Balance from 'pages/Balance/Balance';
// import Home from 'pages/Home/Home';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='/' element={<Balance/>}/>
      </Route>
    </Routes>
  );
}
