import { Outlet } from 'react-router-dom'
import Navbar from '@/shared/layouts/Navbar'
import Footer from '@/shared/layouts/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
