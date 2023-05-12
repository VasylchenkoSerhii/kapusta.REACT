import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
    </Routes>
  );
}
