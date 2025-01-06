import React from 'react'
import style from './style.module.scss'
import { Button } from '@mui/material'
export default function ProductsItem({
  name='',
  price='',
  img=[],
  btn=''
}) {


  return (
    <div className={style.product}> 
      <div className={style.item}>
        <img src={img[0]} className={style.item__img}/>
        <img src={img[1]} className={style.item__imgHover}/>
        <div>
          <h3>{name}</h3>
          <p className={style.item__price}>{price} грн.</p>
          <div></div>
        </div>
      </div>  
      <Button variant="contained" className={style.item__buy}>{btn}</Button>
    </div>
  )
}
