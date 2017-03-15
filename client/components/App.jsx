import React from 'react'

const App = React.createClass({
  getInitialState () {
    return {
      items: []
    }
  },
  render () {
    const items = this.state.items
    const childrenWithItems = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        items: items,
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
  addItem (item) {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }
})
// const App = () => {
//   return (
//     <h1>React development has begun!</h1>
//   )
// }

export default App
