import React from 'react'

import './index.css'
interface ProductItemProps {
    text: string;
    imageUrl: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ text, imageUrl }) => {
    return (
        <div className="product-item">
            <p>{text}</p>
            <img src = {imageUrl} alt = {text} className = "product-image"/>
        </div>
    );
}

export default ProductItem;
