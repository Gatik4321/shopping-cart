import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
function App() {
  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false);
  const[show,setshow]=useState(true); 
  const handleClick=(item) =>{
    let isPresent = false;
    cart.forEach((product) =>{
      if(item.id === product.id)
      isPresent= true;
    })

    if(isPresent){
      // alert("items already Present");
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      },2000);
      return;
    }else{
    setCart([...cart,item]);
    }
  }
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <Navbar size={cart.length} setshow={setshow}/>
      {
        show?<Shop handleClick={handleClick}/>:<Cart cart={cart} setCart={setCart}/>
      }
      {warning && <div className='warning'>Item is alrady Present</div>}
    </div>
  );
}

export default App;
