import {createSlice} from "@reduxjs/toolkit"
import allData from "../../../data"

const productsSlice = createSlice({
  name: "product",
  initialState: {
    allData,
    allDataCount: 0,
    allDataPrice: 0,
  },
  reducers: {
    incrementData: (state, {payload}) => {
      state.allData.find((data) => data.id == payload && data.dataCount++)
    },
    decrimentData: (state, {payload}) => {
      state.allData.find((data) => data.id == payload && data.dataCount--)
    },
    totalFunc: (state) => {
      let allCount = 0
      let allPrice = 0
      state.allData.forEach((data) => {
        allCount += data.dataCount
        allPrice += data.dataPrice * data.dataCount
      })
      state.allDataCount = allCount
      state.allDataPrice = allPrice
    },
    addData: (state, {payload}) => {
      state.allData.push(payload)
    },
  },
})
export const {incrementData, decrimentData, totalFunc, addData} =
  productsSlice.actions

export default productsSlice.reducer
