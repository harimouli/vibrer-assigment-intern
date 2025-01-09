

import React from 'react';


import './index.css';

import { IoMdCube } from "react-icons/io";


const Segments: React.FC = () => {
    const renderViewButton = () => {
        return (
            <div className = "view-button">
                <p className = "view-text">View More</p>
            </div>
        );
    }
    return (
        <>
            <div className = "segments-bar">
                <IoMdCube size = {30}/>
                <p className = "segments-heading">Segments</p>
            </div>
            <div className = "segment-container">
                    <div className="segment-product segment-background residential-background">
                        <p className = "segment-heading">Residential</p>
                        {renderViewButton()}
                    </div>
                    <div className = "segment-product segment-background  institutional-background">
                        <p className = "segment-heading">Institutional</p>
                        {renderViewButton()}
                    </div>
                    <div className = "segment-product segment-background commercial-background">
                        <p className = "segment-heading">Commercial</p>
                        {renderViewButton()}
                    </div>
            </div>
        </>
    );
}
export default Segments;