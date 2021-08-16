import React from 'react'
import { useSelector } from 'react-redux'

const ProductItem = () => {
    const products  = useSelector(state => state.allProducts.products);
    
    const showProducts = products.map((product) => {
        const {id, title, place_of_origin, thumbnail} = product;
        return(
            <div key={id} className="border-2 border-gray-200 p-4">
                
                    <img src={thumbnail.lqip} className="w-full h-64 object-cover mb-4"/>
                    <p className="text-xl">{title}</p>
                    <p className="text-gray-600">Place of origin - {place_of_origin}</p>             
            </div>
        );
    })
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 font-mono">
            {showProducts}
        </div>
    )
}

export default ProductItem