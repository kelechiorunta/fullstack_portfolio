import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/projects" element={<Layout />} />
      <Route path="/about" element={<Layout />} />
    </Routes>
  );
}

export default App;
