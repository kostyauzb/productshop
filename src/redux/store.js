import {configureStore} from "@reduxjs/toolkit"
import data from "./features/productsSlice"

export const store = configureStore({
  reducer: {
    data,
  },
})
