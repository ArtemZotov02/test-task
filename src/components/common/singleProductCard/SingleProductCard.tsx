import React from 'react'
import style from './style.module.scss'
import { Button } from "@mui/material"
import classNames from 'classnames';
import Reviews from '../reviews/Reviews.tsx';

interface Review {
  author: string;
  descr: string;
  grade: number;
}
interface SingleProductProps {
  id: number;
  name: string;
  descr: string;
  price: number;
  img: string[];
  reviewsTitle: string,
  reviews: Review[];
  btn: string;
  btnReview: string;
}

export default function SingleProductCard({
  id,
  name,
  descr,
  price,
  img,
  reviewsTitle,
  reviews,
  btn,
  btnReview
}: SingleProductProps){
  const [currentImg, setCurrentImg] = React.useState(0)

  return (
    <div className={style.singleProduct}>
      {!!img.length && 
        <div className={style.imageSlider}>
          <div className={style.imageSlider__slider}>
            {img.map((item, index) => (

                <img 
                  src={item} 
                  alt={name} 
                  key={index} 
                  className={classNames(style.imageSlider__slider_img, {[style.active]: index === currentImg})} 
                  onClick={()=>setCurrentImg(index)}/>
            ))}
          </div>
          <div className={style.imageSlider__current}>
            <img src={img[currentImg]} alt={name} className={style.imageSlider__current_img}/>
          </div>
        </div>
      }
      <div className={style.info}>
          <h2 className={style.info_name}>{name}</h2>
          {price && <p className={style.info_price}>{price} грн.</p>}
          {btn && <Button 
            variant="contained" 
            className={style.info_buy}
            sx={{backgroundColor: 'var(--black-10)', color: 'var(--white)', width: '50%', fontWeight: '500'}}
          >
            {btn}
          </Button>}
          <span className={style.info_descr}>{descr}</span>
          <h3 className={style.info_reviewsTitle}>{reviewsTitle}</h3>
          <Reviews reviews={reviews}/>
          {btnReview && <Button 
            variant="contained" 
            className={style.info_buy}
            sx={{backgroundColor: 'var(--green)', color: 'var(--white)', width: '50%', fontWeight: '500', margin:'20px auto 0', borderRadius:'10px'}}
          >
            {btnReview}
          </Button>}
      </div>
    </div>
  )
}
