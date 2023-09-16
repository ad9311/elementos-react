import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import ElementProvider from './providers/element';
import ElementsPage from './pages/element';
import './assets/css/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ElementProvider>
        <main>
          <Routes>
            <Route path="/" element={<ElementsPage />} />
            <Route path="/elements" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </ElementProvider>
    </QueryClientProvider>
  );
}

export default App;
