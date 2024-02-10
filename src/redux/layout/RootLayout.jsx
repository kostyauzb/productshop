import React from "react"
import Navbar from "../../components/Navbar"
import {Outlet} from "react-router-dom"

function RootLayout() {
  return (
    <div className="max-w-7xl w-full mx-auto p-5 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
