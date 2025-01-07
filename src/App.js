
import { Routes, Route } from 'react-router-dom'

import Layout from "./components/common/layout/Layout";
import Home from "./components/pages/Home";
import Products from "./components/pages/products/Products";
import NotFoundPage from "./components/pages/404/404";
import ProductPage from './components/pages/productPage/ProductPage.tsx';



function App() {
  return (
    <div className="App">
      <Layout >
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/product/:productId" element={<ProductPage />} /> 

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
      </Layout>
    </div>
  );
}

export default App;
