import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayoutes = () => {
  return (
    <div>
        {/* NAvabar */}
        <Navbar />


        {/* dynamic Layoute */}
        <div className='min-h-[calc(100vh-220px)]'>
            <Outlet />
        </div>

        {/* Footer */}
        <Footer />


    </div>
  )
}

export default MainLayoutes