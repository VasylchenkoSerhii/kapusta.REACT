import { Router, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Router path='/' element={<Layout />}></Router>
    </Routes>
  );
}
