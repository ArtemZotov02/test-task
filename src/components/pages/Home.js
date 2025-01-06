import React from 'react'
import { useEffect, useState } from "react";
import ProductsItem from '../common/productsItem/ProductsItem';
import style from './style.module.scss'
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
    <div className='container'>
      <div className={style.main}>
        <h2 className={style.main__title}>Товари</h2>
        <div className={style.products}>
          {products.map((product) => (
            <ProductsItem key={product.id} {...product} className={style.products__item}/>
          ))}
        </div>
      </div>    
    </div>
  )
}

export default Home
