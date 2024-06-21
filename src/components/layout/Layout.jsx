// import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

export const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout