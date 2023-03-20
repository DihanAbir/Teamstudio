import React, { useState } from 'react';
import PopupVideo from '../PopupVideo';
 
import Typist from 'react-text-typist';

function HeroHomeThree() {
    const [showVideo, setVideoValue] = useState(false);
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    return (
        <>
            {showVideo && (
                <PopupVideo
                    videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
                    handler={(e) => handleShowVideo(e)}
                />
            )}
            <section className="appie-hero-area appie-hero-3-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="appie-hero-content text-center">
                                <h1 className="appie-title">We create <Typist sentences={['Apps', 'Websites', 'Games', "& More"]} typingSpeed ={180} loop={true} /></h1>
                                

                                {/* <h1 className="appie-title mb-5 pb-5">loved around the world </h1> */}
                                <p>
                                {/* Over 65 million users in more than 160 countries */}
                                </p>
                                {/* <div className="hero-btns">
                                    <a className="main-btn" href="#">
                                        Get a Quote
                                    </a>
                                    <a
                                        onClick={(e) => handleShowVideo(e)}
                                        className="appie-video-popup"
                                        href="https://www.youtube.com/watch?v=EE7NqzhMDms"
                                    >
                                        <i className="fas fa-play" /> Play Video
                                    </a>
                                </div> */}
                                {/* <div
                                    className="thumb mt-100 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <img src={heroThumb} alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeThree;
