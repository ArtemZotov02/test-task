import React, { useEffect, useState } from 'react'
import ProductsCard from '../../common/productsCard/ProductsCard.tsx'
import style from './style.module.scss'

interface Product {
  id: number
  name: string
  price: number
  img: string
  imgHover: string
  reviews: number
  btn: string
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://demo5408873.mockable.io/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <div className={style.products__container}>
        <h2 className={style.products__container__title}>Товари</h2>
        <div className={style.products}>
          {products.map((product) => (
            !!Object.keys(product).length && <ProductsCard key={product.id || 0} {...product}/>
          ))}
        </div>
      </div>   
    </div>
  )
}
