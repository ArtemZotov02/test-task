import { ProductsPage } from "../components/pages/products/Products.types";


interface ActionProduct {
  type: string;
  payload: ProductsPage
}

const defaultProductsData: ProductsPage = {
  title: '',
  allProducts: []
}

export const set_products = 'set_products'
export const fetch_products = 'fetch_products'

export const productsDataState = (state = defaultProductsData, action: ActionProduct):ProductsPage => {
  switch (action.type) {
    case set_products: 
      return {...state,...action.payload}
    default: 
      return state
  }
}
export const loadProductsData = (payload:ProductsPage) => ({type:set_products, payload})

export const fetchProducts = (url:string, method: (data: ProductsPage)=> ActionProduct) => ({
  type: fetch_products, 
  payload: {
    url,       
    method    
  }
});
