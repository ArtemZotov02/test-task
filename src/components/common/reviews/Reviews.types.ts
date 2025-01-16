export interface Review {
  date:string;
  author: string;
  descr: string;
  grade: number;
}
export interface ReviewsProps {
  reviews: Review[];
}

