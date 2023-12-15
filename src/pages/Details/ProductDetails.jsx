import React, { useEffect, useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../utility/api'
const ProductDetails = () => {

  const { id } = useParams()
  const [item, setItem] = useState({})  
  const[active,setActive]=useState(false)

  useEffect(() => {
    const getProductsById = async () => {
      await axios.get(`${apiUrl.productApi}/${id}`)
        .then(response => setItem(response.data))
        .catch(err => console.log(err))
    }

    getProductsById()

  }, [id])
let list =[]

// const getRating=(rating)=>{
//   let value =Math.round(rating)
//   for(let i=0; i<value;i++){
//     list.push(i)
//   }
//   return list

// }

// if(item){
//   getRating(item.rating.rate)
// }


  return (
    item ? <div className='container'>
      <div className="row">
        <div className="col-lg-3">
          <img className='details-image' src={item.image} alt="" />
        </div>
        <div className="col-lg-9">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <button onClick={()=>setActive(!active)}>{active ? 'less info': 'show more information'}</button>

          {
            active ?   <div>

            <p>{item.price}$</p>
  
            {
              item.rating && (<p>Reyting : {item.rating.rate}/5  ({item.rating.count} person)</p>)
            }
  
            <div className='all-stars'>
              {
                list.map(item=>{
                  return (
                    <div className='p332'></div>
                  )
                })
              }
            </div>
            </div> : null
  
          }
        
        </div>
      </div>

    </div> : 'no data...'
  )
}

export default ProductDetails