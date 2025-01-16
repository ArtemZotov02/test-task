import {put, takeEvery, call, CallEffect, PutEffect} from "redux-saga/effects"
import { fetch_header } from "../headerData"
import { fetch_products } from "../productsData"
import { HeaderData } from "../../components/common/header/Header.types"
import { ProductsPage } from "../../components/pages/products/Products.types"

interface FetchAction<T> {
  type: string;
  payload: {
    url: string;
    method: (data: T) => any;
  };
}


export function* fetchDataSaga<T>(action: FetchAction<T>): Generator<
  CallEffect<any> | PutEffect<any>,
  void,
  any
> {
  const { url, method } = action.payload;

  try {
    const fetchApi = () => fetch(url);
    const data = yield call(fetchApi);
    const json: T = yield call(() => data.json());
    yield put(method(json));

  } catch (error) {
    console.error(error);
  }
}

export function* fetchUserWatcher() {
  yield takeEvery(fetch_header, fetchDataSaga<HeaderData>);
  yield takeEvery(fetch_products, fetchDataSaga<ProductsPage>);
}



