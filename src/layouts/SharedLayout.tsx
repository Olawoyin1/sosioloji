// src/layouts/SharedLayout.tsx

// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from '../components/ScrollToTop'
import ScrollToTop from '../utils/ScrollTT'

const SharedLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <ScrollToTopButton />
      <ScrollToTop />
        <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
