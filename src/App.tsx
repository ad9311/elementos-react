import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import ElementProvider from './providers/element';
import ElementsPage, { ElementPage } from './pages/element';
import './assets/css/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ElementProvider>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/elements" />} />
            <Route path="/elements" element={<ElementsPage />} />
            <Route path="/elements/:name" element={<ElementPage />} />
          </Routes>
        </main>
      </ElementProvider>
    </QueryClientProvider>
  );
}

export default App;
