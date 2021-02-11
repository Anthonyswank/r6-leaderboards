import React from 'react'
import ReactDOM from 'react-dom'
import UpdateStats from './UpdateStats'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UpdateStats />, div)
  ReactDOM.unmountComponentAtNode(div)
})