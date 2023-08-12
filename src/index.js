import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store/products-store';
import './index.css';
import App from './App';

configureStore();

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
