import React from 'react'
import style from './style.module.scss'
import { Button, Rating } from '@mui/material'
import { Link } from 'react-router-dom';
import { ProductsItemProps } from '../../../types/Types';


const ProductsCard: React.FC<ProductsItemProps> = ({
  id,
  name,
  price,
  img,
  imgHover,
  reviews,
  btn
}) => {

  return (
    <div className={style.product}> 
      <Link className={style.item} to={`/product/${id}`}>
        <img src={img || imgHover} className={style.item__img} alt={name}/>
        <img src={imgHover || img} className={style.item__imgHover} alt={name}/>
        <h3>{name}</h3>
        {price && <p className={style.item__price}>{price} грн.</p>}
        <Rating 
          name="read-only" 
          defaultValue={reviews} 
          readOnly size="small" 
          className={style.item__rating}
        />
      </Link>  
      {btn && <Button variant="contained" className={style.item__buy}>
        {btn}
      </Button>}
    </div>
  )
}
export default ProductsCard;
