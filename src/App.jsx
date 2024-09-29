
import './App.css'
import Footer from './common/footer/Footer'
import Register from './common/LoginRegister/Register'
import Navbar from './common/navbar/Navbar'
// import About from './pages/About'
import Home from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Podcast from './pages/Podcast'
import Signin from './pages/Signin'
import profile from './pages/profile'
import Singlepage from './pages/Singlepage'
import AddAudioForm from './pages/AddAudioForm'
import Edit from './pages/Edit';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          {/* <Route path="/about" exact Component={About}></Route> */}
          <Route path='/podcast' exact Component={Podcast}></Route>
          <Route path='/profile' exact Component={profile}></Route>
          <Route path='/signin' exact Component={Signin}></Route>
          <Route path="/Singlepage/:id" exact Component={Singlepage}></Route>
          <Route path="/AddAudioForm" exact Component={AddAudioForm}></Route>
          <Route path="/edit/:id" exact Component={Edit}></Route>
          
        </Routes>
        <Footer />
      </Router>





    </>
  )
}

export default App;
