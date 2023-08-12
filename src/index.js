import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './store/ProductsContext';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>
);
