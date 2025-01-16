import { Dispatch, SetStateAction } from 'react';
import { Review } from '../reviews/Reviews.types';


export interface Feedback {
  title:string
  name: string;
  comment: string;
  btnReview: string;
  rating: string;
}
export interface FeedBackProps {
  title:string
  name: string;
  comment: string;
  rating: string
  btnReview: string;
  setNewReviews: Dispatch<SetStateAction<Review[]>>;
}