import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleToggleSidebar = () => {
    setShowSidebar(() => !showSidebar)
  }
  return (
    <>
      <Navbar onToggle={handleToggleSidebar} />
      <Sidebar isOpen={showSidebar} onToggle={handleToggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
