import React from "react";
import "../Styles/Banner.scss";

// Images
import BannerImage from "../Img/banner-img.png";
import GooglePlay from "../Img/google-play.png";
import AppStore from "../Img/app-store.png";

const Banner = () => {
    return(
        <>
            <div className="top-banner">
                <div className="banner-details">
                    <p className="banner-heading">real people. real passion</p>
                    <h1 className="banner-title">IT Solutions</h1>
                    <p className="banner-caption">Full Service mobile, web, software, Artificial Inteligence, 3D and IoT technology solutions</p>
                    <p>Start your 90-day free trial now.</p>
                    <div className="banner-downloadlinks">
                        <img src={GooglePlay} alt="Download On Google-play" />
                        <img src={AppStore} alt="Download On App-Store" />
                    </div>
                </div>

                <div className="banner-img-container">
                    <img src={BannerImage} alt="Banner Pic" className="banner-img" />
                </div>
            </div>
        </>
    )
}

export default Banner;