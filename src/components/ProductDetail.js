import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const {id} = useParams();
    const product = useSelector(state => state.product);
    const {title, date_display, place_of_origin, thumbnail, artist_display} = product;
    const dispatch = useDispatch();
    console.log(product);

    const getProductDetail = async () => {
        const res = await axios
                        .get(`https://api.artic.edu/api/v1/artworks/${id}`)
                        .catch((err)=>{
                            console.log("Error,err")
                        })
        dispatch(selectedProduct(res.data.data))
        console.log(res.data.data)
    }

    useEffect(() => {
        if(id && id!== "") {
            getProductDetail();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    },[id])

    return (
        <div className="my-4 w-8/12 h-screen mx-auto border-2 border-gray-200">
            {Object.keys(product).length === 
            0 ? (
                <div>Loading...</div>
            ) :(
                <div className="flex h-full">
                    <div className="flex-1 p-4 border-r-2 border-gray-200">
                        <img className="w-full h-5/6  object-cover" src={thumbnail.lqip} alt={thumbnail.alt_text} />
                    </div>
                    <div className="flex-1 p-4">
                        <p className="text-2xl">{title}</p>
                        <p>Artist - {artist_display}</p>
                        <p>Origin - {place_of_origin}</p>
                        <p>Date - {date_display}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail