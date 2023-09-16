import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import Elements from './pages/element';
import './assets/css/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Elements />} />
        <Route path="/elements" element={<Navigate to="/" />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
