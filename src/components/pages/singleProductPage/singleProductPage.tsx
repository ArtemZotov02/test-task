import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SingleProductCard from '../../common/singleProductCard/SingleProductCard.tsx'
import { SingleProduct } from './SingleProduct.types.ts'


export default function SingleProductPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const [product, setProduct] = useState<SingleProduct | null>(null)


  useEffect(() => {
    fetch(`https://demo5408873.mockable.io${location.pathname}`)
      .then((response) => {
        if (!response.ok) {
          navigate('/404')
          return Promise.reject('Response not ok')
        }
        return response.json()
      })
      .then((data: SingleProduct) => {
        if (data && data.id) {
          setProduct(data)
        } else {
          navigate('/404')
        }
        if (!Object.keys(data).length) {
          navigate('/404');
          return null
        }
      })
      .catch((error) => {
        console.error('Помилка під час завантаження даних про продукт:', error)
        navigate('/404')
      })
  }, [location.pathname, navigate])

  if (!product) {
    return <div style={{padding:'25vh 0px', textAlign: 'center', fontSize:'30px', fontWeight: '600'}}>Завантаження...</div>
  }


  return (
    <div className="container">
        {!!Object.keys(product).length && <SingleProductCard {...product}/>}
    </div>
  )
}
