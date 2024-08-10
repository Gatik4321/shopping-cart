import React from 'react';
import '../styles/Shop.css';
import list from '../list';
import Card from './Card';
const Shop = ({handleClick}) => {
  return (
    <div>
      <section>
       {list.map((item)=>{
           return <Card item={item} key={item.id} handleClick={handleClick}/>
       })
       } 
      </section>
    </div>
  )
}

export default Shop;
