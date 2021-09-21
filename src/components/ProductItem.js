import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductItem = () => {
    const products  = useSelector(state => state.allProducts.products);
    
    const showProducts = products.map((product) => {
        const {id, title, place_of_origin, thumbnail} = product;
        return(
            <div key={id} className="rounded border-2 border-gray-200 p-4">
                <Link to={`product/${id}`}>
                    {thumbnail && <img src={thumbnail.lqip} alt={title} className="w-full h-64 object-cover mb-4"/>}
                    <p className="text-xl">{title}</p>
                    <p className="text-gray-600">Place of origin - {place_of_origin}</p> 
                </Link>            
            </div>
        );
    })
    return (
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3 font-mono">
            
            {showProducts}
            
        </div>
    )
}

export default ProductItem