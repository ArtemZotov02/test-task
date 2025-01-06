import React from 'react'
import { useEffect, useState } from "react";
import ProductsItem from '../common/productsItem/ProductsItem';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://demo5408873.mockable.io/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []) 
  return (
    <div>
      <h2>Товари</h2>
      <div>
        {products.map((product) => (
          <ProductsItem key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home
