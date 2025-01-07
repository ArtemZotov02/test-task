import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SingleProductCard from '../../common/singleProductCard/SingleProductCard.tsx'
interface Review {
  author: string
  descr: string
  grade: number
}
interface Product {
  id: number
  name: string
  descr: string
  price: number
  img: string[]
  reviewsTitle: string
  reviews: Review[]
  btn: string
  btnReview: string
}

export default function SingleProductPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://demo5408873.mockable.io${location.pathname}`)
        if (!response.ok) {
          navigate('/404')
          return
        }
        const data: Product = await response.json()
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
