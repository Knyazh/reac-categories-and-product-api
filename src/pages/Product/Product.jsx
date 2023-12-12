import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
import Card from '../../components/Card/Card'
import Categories from '../../components/Categories/Categories'
const Product = () => {
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            await axios.get('https://fakestoreapi.com/products')
                .then(response => setItems(response.data))
        }

        getProducts()
    }, [])

    useEffect(() => {

        const getCategories = async () => {
            await axios.get('https://fakestoreapi.com/products/categories')
                .then(response => setCategories(response.data))

        }
        getCategories()

    }, [])

    return (
        <div className='container mt-5'>
            <div className='categories'>
            {
                categories&& categories.map(cat=>{
                    return(
                        <Categories sort={cat} />
                    )
                })
            }

            </div>

            <div className="row gy-4">

                {
                    items && items.map(item => {
                        return (
                            <Card data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product