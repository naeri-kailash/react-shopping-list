import React from 'react'
import {Link} from 'react-router'

const ShoppingList = props => {
  return (
    <div className='shoppingList'>
      <ul>
        {props.items.map(item => {
          return (
            <li>Name: {item.name} Quantity: {item.quantity} Cost: $ {item.cost}</li>
          )
        })}
      </ul>
      <p>Total: ${props.total}</p>
      <Link to='/addItem'>Add an Item</Link>
    </div>
  )
}

export default ShoppingList
