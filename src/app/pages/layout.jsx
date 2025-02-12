import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
  return (
    <div className='bg-blue-200 h-screen'>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout