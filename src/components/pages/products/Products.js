import React from 'react'
import { useEffect, useState } from "react";
import ProductsItem from '../../common/productsItem/ProductsItem.tsx';
import style from './style.module.scss'

export default function Products() {
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
      <div className={style.products__container}>
        <h2 className={style.products__container__title}>Товари</h2>
        <div className={style.products}>
          {products.map((product) => (
            !!Object.keys(product).length && <ProductsItem key={product.id || 0} {...product} className={style.products__item}/>
          ))}
        </div>
      </div>   
    </div>
  )
}
