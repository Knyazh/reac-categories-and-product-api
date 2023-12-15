import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
    const { id ,image,title,price}=props.data
  return (
    <div className="col-lg-3">
    <div className="card" >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title.length >20 ? title.slice(0,20) + '...' : title}</h5>
            <p>{price} $</p>
        </div>
        <div className='d-flex justify-content-center'>
          <Link to={`/products/details/${id}`} className='btn btn-success'>view details</Link>
        </div>
    </div>
    </div>
  )
}

export default Card