
import { Container } from 'react-bootstrap'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Doctors from './Components/Doctors/Doctors'
import Contact from './Components/ContactUs/Contact'
import Health from './Components/HealthPackage/Health'
import Blog from './Components/BlogPage/Blog'
import BookYourScan from './Components/BookYourScans/Scans'
function App() {

  return (
    <>
    <Header/>
    
      <Container fluid>
    
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/doctors' element={<Doctors/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/health' element={<Health/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/bookyourscans' element={<BookYourScan/>}></Route>

      </Routes>
      <Footer/>

      </Container>
    </>
  )
}

export default App
