import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import ElementProvider from './providers/element';
import Elements from './pages/element';
import './assets/css/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ElementProvider>
        <Routes>
          <Route path="/" element={<Elements />} />
          <Route path="/elements" element={<Navigate to="/" />} />
        </Routes>
      </ElementProvider>
    </QueryClientProvider>
  );
}

export default App;
