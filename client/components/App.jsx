import React from 'react'

const App = React.createClass({
  getInitialState () {
    return {
      items: [],
      total: 0
    }
  },
  render () {
    const childrenWithItems = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        items: this.state.items,
        total: this.state.total,
        addItem: this.addItem
      })
    )
    return (
      <div className='app'>
        <h1> Your Shopping List </h1>
        {childrenWithItems}
      </div>
    )
  },
  addItem (item, total) {
    this.setState({
      items: [
        ...this.state.items,
        item
      ],
      total: total
    })
  }
})

export default App
