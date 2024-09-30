import "./App.css";
import B from "./components/B/B";
// import Home from "./components/Home/Home";
import Latest from "./components/Latest/Latest";
import Recent from "./components/Recent/Recent";
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
import Search from './component/search/Search'
import Edit from './pages/Edit';
import fav from './pages/fav'
import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <>
//       <Home />
//       <Latest />
//       <Recent />
//       <B />
//     </>
//   );


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={HomePage}></Route>
          <Route path='/podcast' exact Component={Podcast}></Route>
          <Route path='/profile' exact Component={profile}></Route>
          <Route path='/signin' exact Component={Signin}></Route>
          <Route path="/Singlepage/:id" exact Component={Singlepage}></Route>
          <Route path="/AddAudioForm" exact Component={AddAudioForm}></Route>
          <Route path="/search" exact Component={Search}></Route>
          <Route path="/fav" exact Component={fav}></Route>
          <Route path="/edit/:id" exact Component={Edit}></Route>
          {/* <Home />
          <Latest />
          <Recent />
          <B /> */}
        </Routes>
        <Footer />
      </Router>





    </>
  )
}

export default App;
