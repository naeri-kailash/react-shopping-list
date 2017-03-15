import React from 'react'
import {Link} from 'react-router'

const AddItem = React.createClass({
  getInitialState () {
    return {
      item: {
        name: '',
        quantity: 0
      }
    }
  },
  render () {
    return (
      <div className='add'>
        <p>Add Item</p>
        <input type='text' name='name'
          onChange={this.updateFormState}
          value={this.state.item.name} />

        <input type='text' name='quantity'
          onChange={this.updateFormState}
          value={this.state.item.quantity} />

        <button onClick={() => this.props.addItem(this.state.item)}>Add Item</button>
        <Link to='/'>Go to Shopping List</Link>
      </div>
    )
  },
  updateFormState (evt) {
    const field = evt.target.name
    const newState = {
      item: {
        name: this.state.item.name,
        quantity: this.state.item.quantity
      }
    }
    newState.item[field] = evt.target.value
    this.setState(newState)
  }
})
export default AddItem
// const Add = props => {
//   return (
//     <div className='shoppingList'>
//       <ul>
//         {props.items.map(item => {
//           return (
//             <li>{item.name}</li>
//           )
//         })}
//       </ul>
//       <Link to='/addItem'>Add an Item</Link>
//     </div>
//   )
// }
// export default ShoppingList
