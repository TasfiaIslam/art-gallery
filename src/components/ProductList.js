import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductItem from './ProductItem';

const ProductList = () => {
    const products  = useSelector(state => state);
    const dispatch = useDispatch();

    const getProducts = async () => {
        const res = await axios
                    .get("https://api.artic.edu/api/v1/artworks")
                    .catch((err) => {
                        console.log("Error", err)
                    });
        dispatch(setProducts(res.data.data));
    }

    useEffect(() => {
        getProducts();
    })

    return (
        <div className="w-8/12 mx-auto">
            Product List
            <ProductItem />
        </div>
    )
}

export default ProductList
