
import { Container } from 'react-bootstrap'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Doctors from './Components/Doctors/Doctors'
function App() {

  return (
    <>
    <Header/>
    
      <Container fluid>
    
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/doctors' element={<Doctors/>}></Route>

      </Routes>
      <Footer/>

      </Container>
    </>
  )
}

export default App
