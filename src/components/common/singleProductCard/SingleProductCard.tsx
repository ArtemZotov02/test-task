import React, { useState } from 'react'
import style from './style.module.scss'
import { Button } from "@mui/material"
import Reviews from '../reviews/Reviews.tsx'
import FeedBack from '../feedBack/FeedBack.tsx'
import Slider from '../slider/Slider.tsx'
import { SingleProduct } from '../../pages/singleProductPage/SingleProduct.types.ts'

export default function SingleProductCard({
  id,
  name,
  descr,
  price,
  img,
  reviewsTitle,
  reviews,
  btn,
  feedback
}: SingleProduct){
  const [newReviews, setNewReviews] = useState(reviews)


  return (
    <div className={style.singleProduct}>
      {!!img.length && 
       <Slider name={name} img={img}/>
      }
      <div className={style.info}>
          <h2 className={style.info_name}>{name}</h2>
          {price && <p className={style.info_price}>{price} грн.</p>}
          {btn && <Button 
            variant="contained" 
            className={style.info_buy}
            sx={{backgroundColor: 'var(--black-10)', color: 'var(--white)', width: '50%', fontWeight: '500', padding:'10px 5px'}}
          >
            {btn}
          </Button>}
          <span className={style.info_descr}>{descr}</span>
          <h3 className={style.info_reviewsTitle}>{reviewsTitle} ({reviews.length})</h3>
          <Reviews reviews={newReviews}/>
          {Object.keys(feedback).length && <FeedBack {...feedback} setNewReviews={setNewReviews}/>}
      </div>
    </div>
  )
}
