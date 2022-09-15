
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products'
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
   <>
   <div className="d-flex flex-column min-vh-100">
   <Header/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/products/:id" element={<ProductDetails/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
  </Routes>
  <br/>
  <br/>
  <br/>
  <Footer/>
  </div>
   </>
  );
}

export default App;

