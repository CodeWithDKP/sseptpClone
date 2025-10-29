import { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./pages/Home.jsx'));

function App() {
  return (
    <Suspense
      fallback={
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
