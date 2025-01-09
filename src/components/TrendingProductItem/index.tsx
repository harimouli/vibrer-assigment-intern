
import React from "react";
import "./index.css";
interface TrendingProductItemProps {
    title: string;
    imagUrl: string;
    index: number;
}

const TrendingProductItem: React.FC<TrendingProductItemProps> = ({ title, imageUrl,index }) => {
    return (
        <li className="trending-product-item">
            <div className="image-container">
                <img src={imageUrl} alt={title} className="trending-product-item-image" />
                {index === 1 && (
                    <button className="enquire-button">Enquire Now</button>
                )}
            </div>
            <p className="trending-product-item-heading">{title}</p>
        </li>
    );
};

export default TrendingProductItem;