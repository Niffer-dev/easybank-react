import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import About from './pages/about/About'
import Blogs from './pages/blogs/Blogs'
import HomePage from './pages/homePage/HomePage'

// Components
import Footer from './componnts/footer/Footer'
import Navbar from './componnts/navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blogs' element={<Blogs />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
