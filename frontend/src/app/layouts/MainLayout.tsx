
import Navbar from '@/shared/layouts/Navbar'
import Footer from '@/shared/layouts/Footer'
import Home from '@/modules/home/Home'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
