import React from 'react'
import {Link} from 'react-router'

const AddItem = React.createClass({
  getInitialState () {
    return {
      item: {
        name: '',
        quantity: 0,
        cost: 0
      },
      total: 0
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

        <input type='text' name='cost'
          onChange={this.updateFormState}
          value={this.state.item.cost} />

        <button onClick={() => this.props.addItem(this.state.item, this.state.total)}>Add Item</button>
        <Link to='/'>Go to Shopping List</Link>
      </div>
    )
  },
  updateFormState (evt) {
    const field = evt.target.name
    const newState = {
      item: {
        name: this.state.item.name,
        quantity: this.state.item.quantity,
        cost: this.state.item.cost
      },
      total: this.state.total
    }
    newState.item[field] = evt.target.value
    if (field === 'cost') {
      newState.total = Number(newState.item.cost) + newState.total
    }
    this.setState(newState)
  }
})
export default AddItem
