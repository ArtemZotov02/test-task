import React from 'react'
import style from './style.module.scss'
interface SingleProductProps {
  id: number;
  name: string;
  descr: string;
  price: number;
  img: string[];
  reviews: string[];
  btn: string;
}

export default function SingleProduct({
  id,
  name,
  descr,
  price,
  img,
  reviews,
  btn,
}: SingleProductProps){
  return (
    <div className={style.singleProduct}>
       <div>
      <h1>{name}</h1>
      <p>{descr}</p>
      <p>Price: ${price}</p>
      <div>
        {img.map((src, index) => (
          <img key={index} src={src} alt={name} />
        ))}
      </div>
      <ul>

      </ul>
      <button>{btn}</button>
    </div>
    </div>
  )
}
