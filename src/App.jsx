import React, {useEffect} from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "./redux/layout/RootLayout"
import Home from "./components/Home"
import {totalFunc} from "./redux/features/productsSlice"
import {useDispatch, useSelector} from "react-redux"
import CardLink from "./pages/CardLink"
import Card from "./components/Card"
import AddCard from "./pages/AddCard"

function App() {
  const {allData} = useSelector((store) => store.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(totalFunc())
  }, [allData])

  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/addCard",
          element: <AddCard />,
        },

        {
          path: "/:id",
          element: <CardLink datas={allData} />,
        },
      ],
    },
  ])
  return <RouterProvider router={routest} />
}

export default App
