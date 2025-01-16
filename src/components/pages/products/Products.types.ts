export interface Product {
  id: number
  name: string
  price: number
  img: string
  imgHover: string
  reviews: number
  btn: string
}
export interface ProductsPage {
  title: string
  allProducts: Product[]
}