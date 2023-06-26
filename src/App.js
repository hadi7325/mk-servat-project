import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Nav from "./components/Nav";
import Product from "./components/product/Product";
import ShoppingBag from './components/shopping-bag/ShoppingBag'
import About from './components/about/About'
import SingleProduct from './components/single-product/SingleProduct'
import ContactUs from './components/contact-us/ContactUs'
import FinalFactor from './components/final-factor/FinalFactor'
import SignIn from './components/sign-in/SignIn'
import Grouping from './components/grouping/Grouping'
import Sminar from './components/sminar/Sminar'
import { BrowserRouter, Route, Routes,HashRouter } from "react-router-dom"

function App() {

  return (
    <div className="App">

      <HashRouter>
      <Nav />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/shopping-bag' element={<ShoppingBag />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/single-product' element={<SingleProduct />} />
          <Route path='/fianl-factor' element={<FinalFactor />} />
          <Route path='/grouping' element={<Grouping />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sminar' element={<Sminar />} />

        </Routes>
      <Footer />
      </HashRouter>

    </div>

  );
}

export default App;
