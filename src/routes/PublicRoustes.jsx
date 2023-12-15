import React from 'react'
import Layout from '../Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Index/HomePage';
import About from '../pages/About/About';
import Product from '../pages/Product/Product';
import { NotFound } from '../pages/NotFound/NotFound';
import ProductDetails from '../pages/Details/ProductDetails';

const PublicRoustes = () => {
    return (
        <div>
            <Layout>
                <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Product />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/products/details/:id' element={<ProductDetails />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default PublicRoustes