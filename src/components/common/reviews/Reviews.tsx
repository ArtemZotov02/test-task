import React from 'react'
import style from './style.module.scss'
import { Rating } from '@mui/material';


interface Review {
  author: string;
  descr: string;
  grade: number;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className={style.reviews}>
      {reviews.map((review, index) => (
        review.author && review.descr && review.grade !== undefined && (
          <div key={index} className={style.reviews_item}>
            <div className={style.reviews_item__header}>
              <h4 className={style.reviews_item__header_name}>{review.author}</h4>
              <Rating 
                name="read-only" 
                defaultValue={review.grade} 
                readOnly 
              />
            </div>
            <p className={style.reviews_item__descr}>{review.descr}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default Reviews;