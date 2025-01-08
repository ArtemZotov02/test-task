import { Dispatch, SetStateAction } from 'react';

export interface MenuItem {
  name: string
  link: string
}
export interface HeaderData {
  logo: string
  menu: MenuItem[]
  login: string
  registration: string
}

export interface Product {
  id: number
  name: string
  price: number
  img: string
  imgHover: string
  reviews: number
  btn: string
}
export interface SingleProduct {
  id: number
  name: string
  descr: string
  price: number
  img: string[]
  reviewsTitle: string
  reviews: Review[]
  btn: string
  feedback: FeedBack;
}

export interface ProductsItemProps {
  id:  number,
  name: string,
  price: number,
  img: string,
  imgHover: string,
  reviews: number,
  btn: string
}



export interface Review {
  date:string;
  author: string;
  descr: string;
  grade: number;
}
export interface ReviewsProps {
  reviews: Review[];
}

export interface FeedBack {
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