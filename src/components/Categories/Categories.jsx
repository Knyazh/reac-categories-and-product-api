import React from 'react'
import './categories.css'

const Categories = (props) => {
  return (
    <div>
      <button>{props.sort}</button>
    </div>
  )
}

export default Categories