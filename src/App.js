
import { Routes, Route } from 'react-router-dom'

import Layout from "./components/common/layout/Layout";
import Products from "./components/pages/products/Products.tsx";
import NotFoundPage from "./components/pages/404/404";
import SingleProductPage from './components/pages/singleProductPage/singleProductPage.tsx';



function App() {
  return (
    <div className="App">
      <Layout >
              <Routes>
                <Route path="/products" element={<Products/>} />
                <Route path="/product/:productId" element={<SingleProductPage />} /> 

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
      </Layout>
    </div>
  );
}

export default App;
