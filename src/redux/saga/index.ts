import {all} from "redux-saga/effects"
import { fetchUserWatcher } from "./fetchSaga.ts"

export function* rootWatcher() {
  yield all([fetchUserWatcher()])
}