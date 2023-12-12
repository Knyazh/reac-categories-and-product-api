import React from 'react'
const Card = (props) => {
    const {image,title,price}=props.data
  return (
    <div className="col-lg-3">
    <div className="card" >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title.length >20 ? title.slice(0,20) + '...' : title}</h5>
            <p>{price} $</p>
        </div>
    </div>
    </div>
  )
}

export default Card