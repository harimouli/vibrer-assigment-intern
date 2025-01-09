
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./index.css";

const Interior: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      };

    return (
        <div className = "interior-container">
                <div className = "interior-content">
                    <h1 className = "interior-heading">Interior Designing </h1>
                    <p className = "interior-description">Kitchen Interior - Let us help you desing your kitchen, Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless look for a seamless experience.</p>    
                </div>
                <div className="slider-container">
                <Slider {...settings}>
                    <div className = "interior-carousel">
                        <img src = "https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__" alt = "interior" className = "interior-image"/>
                    </div>
                    <div className = "interior-carousel">
                        <img src = "https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__" alt = "interior" className = "interior-image"/>
                    </div>
                </Slider>
                </div>


        </div>

    )
}

export default Interior;