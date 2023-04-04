import { useState } from 'react';
import './App.css';
import Flipcart from './NavBar/Flipcart';
import NavBar from './NavBar/NavBar';
import Cart from './NavBar/Cart';

function App() {
  const [show, setShow] =  useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if(cart.indexOf(item) !== -1) return;

    setCart([...cart, item]);
  }
  
  return (
    <div className="App">
      <NavBar setShow={setShow}/>
      {show ? <Flipcart handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} />}

    </div>
  );
}

export default App;
