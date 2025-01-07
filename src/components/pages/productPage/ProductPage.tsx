import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SingleProduct from '../../common/singleProduct/SingleProduct.tsx'

interface Product {
  id: number
  name: string
  descr: string
  price: number
  img: string[]
  reviews: string[]
  btn: string

}

export default function ProductPage() {
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
        setProduct(data)
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

  return (
    <div className="container">
        {!!Object.keys(product).length && <SingleProduct {...product}/>}
    </div>
  )
}
