import React, { useEffect } from 'react'
import ProductsCard from '../../common/productsCard/ProductsCard.tsx'
import style from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../redux/asyncActions/fetchData.ts'
import { fetchProducts, loadProductsData } from '../../../redux/productsData.ts'
import { ProductsPage } from './Products.types.ts'
import { RootState } from '../../../redux/store.ts'



export default function Products() {
  const dispatch = useDispatch()

  const products = useSelector((state: RootState) => state.productsDataState)

  useEffect(() => {
    // dispatch(fetchData<ProductsPage>('https://demo5408873.mockable.io/products', loadProductsData));
    dispatch(fetchProducts('https://demo5408873.mockable.io/products', loadProductsData))
  
  }, [dispatch])
  
  if (!products) {
    return <div style={{padding:'25vh 0px', textAlign: 'center', fontSize:'30px', fontWeight: '600'}}>Завантаження...</div>
  }

  return (
    <div className='container'>
      <div className={style.products__container}>
        <h2 className={style.products__container__title}>{products.title}</h2>
        <div className={style.products}>
          {!!products.allProducts.length && products.allProducts.map((product) => (
            !!Object.keys(product).length && <ProductsCard key={product.id || 0} {...product}/>
          ))} 
        </div>
      </div>   
    </div>
  )
}
