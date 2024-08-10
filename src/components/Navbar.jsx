import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css'
const Navbar = ({size,setshow}) => {
  return (
    <div>
      <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setshow(true)}>Dxo Shop</span>
            <div className="cart" onClick={()=>setshow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
