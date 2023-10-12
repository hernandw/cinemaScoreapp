
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className='layout'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
