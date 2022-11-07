import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import PostDetails from './Component/PostDetails';
import Banner from './Component/HomePage/Banner';
import Posts from './Component/HomePage/Posts';
import Home from './Component/HomePage/Home';
import Footer from './Component/Footer';
import About from './Component/About/About';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="my-28 p-8">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/post/:id' element={<PostDetails></PostDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
