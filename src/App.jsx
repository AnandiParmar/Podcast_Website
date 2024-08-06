
import './App.css'
import Footer from './common/footer/Footer'
import Navbar from './common/navbar/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Podcast from './pages/Podcast'
import Signin from './pages/Signin'

function App() {


  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about" exact Component={About}></Route>
          <Route path='/podcast' exact Component={Podcast}></Route>
          <Route path='/signin' exact Component={Signin}></Route>
        </Routes>
      <Footer/>
    </Router>
    


     
    </>
  )
}

export default App
