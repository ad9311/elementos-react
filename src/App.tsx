import { Navigate, Route, Routes } from 'react-router-dom';
import Elements from './pages/element';
import './assets/css/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Elements />} />
      <Route path="/elements" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
