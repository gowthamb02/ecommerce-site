import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import ProductDetails from './components/productDetails';
import Cart from './components/CartPage';

function App() {
  return (
    <div className="App">
   
<BrowserRouter>
<Routes>
  <Route path='/' element={ <Home />} />
  <Route path='/productDetails' element={<ProductDetails />} />
  <Route path='/cart' element={<Cart />} />

</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
