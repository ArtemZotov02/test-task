import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SingleProductCard from '../../common/singleProductCard/SingleProductCard.tsx'
import { SingleProduct } from '../../../types/Types.tsx'


export default function SingleProductPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const [product, setProduct] = useState<SingleProduct | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://demo5408873.mockable.io${location.pathname}`)
        if (!response.ok) {
          navigate('/404')
          return
        }
        const data: SingleProduct = await response.json()
        if (data && data.id) {
          setProduct(data)
        } else {
          navigate('/404')
        }
      } catch (error) {
        console.error('Помилка під час завантаження даних про продукт:', error)
        navigate('/404')
      }
    }
    fetchData()
  }, [location.pathname, navigate])

  if (!product) {
    return <div>Завантаження...</div>
  }

  if (!Object.keys(product).length) {
    navigate('/404');
    return null
  }
  return (
    <div className="container">
        {!!Object.keys(product).length && <SingleProductCard {...product}/>}
    </div>
  )
}
