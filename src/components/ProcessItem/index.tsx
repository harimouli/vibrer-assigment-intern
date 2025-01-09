import React from 'react';
import './index.css';

interface ProcessItemProps {
    imageUrl: string;
    title: string;
    description: string;
}

const ProcessItem: React.FC<ProcessItemProps> = ( {imageUrl, title, description }) => {
    return (
        <div className="process-item">
            <div className="process-item__icon">
                <img src={imageUrl} alt= "img" />
            </div>
            <div className="process-item__content">
                <h3 className="process-item__title">{title}</h3>
                <p className="process-item__description">{description}</p>
            </div>
        </div>
    );
};

export default ProcessItem;