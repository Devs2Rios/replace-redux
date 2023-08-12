import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore as configureProductsStore } from './store/products-store';
import { configureStore as configureCounterStore } from './store/counter-store';
import './index.css';
import App from './App';

configureProductsStore();
configureCounterStore();

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
