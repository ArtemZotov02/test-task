
import { Feedback } from "../../common/feedBack/Feedback.types"
import { Review } from "../../common/reviews/Reviews.types"

export interface SingleProduct {
  id: number
  name: string
  descr: string
  price: number
  img: string[]
  reviewsTitle: string
  reviews: Review[]
  btn: string
  feedback: Feedback; 
}