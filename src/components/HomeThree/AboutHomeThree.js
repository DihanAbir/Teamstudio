import React from 'react';
import aboutThumb3 from '../../assets/images/app.png';
import aboutThumb from '../../assets/images/app2.png';

function AboutHomeThree() {
    return (
        <>
            <section className="appie-about-3-area pt-100 pb-100" id="features">
                <div className="container">

                    {
                        appData.map((item, index) =>  index %2 === 0 ? <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <img  className='mb-3'  src={item.appicon} alt="" />
                                <h3 className="title">
                                   {item.title}
                                </h3>
                                <p>
                                   {item.desc}
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <div style={{cursor:'pointer'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img src={item.ios} alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                    <div style={{cursor:'pointer', marginLeft:'1rem'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img style={{objectFit:'cover', height:'48px', width:'148px', borderRadius:'7px'}} src={item.android} alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>: <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                            <img className='mb-3' src={item.appicon} alt="" />
                                <h3 className="title">{item.title}</h3>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <div style={{cursor:'pointer'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img src={item.ios} alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                    <div style={{cursor:'pointer', marginLeft:'1rem'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img style={{objectFit:'cover', height:'48px', width:'148px', borderRadius:'7px'}} src={item.android} alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    </div> )
                    }
                    <div className="d-none row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">
                                    Wecode lets you launch your app in minutes.
                                </h3>
                                <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <div style={{cursor:'pointer'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                    <div style={{cursor:'pointer', marginLeft:'1rem'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img style={{objectFit:'cover', height:'48px', width:'148px', borderRadius:'7px'}} src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none row align-items-center mt-100 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">Browse over 40k Apps over the world</h3>
                                <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <div style={{cursor:'pointer'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                    <div style={{cursor:'pointer', marginLeft:'1rem'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img style={{objectFit:'cover', height:'48px', width:'148px', borderRadius:'7px'}} src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="d-none row mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">
                                    Wecode lets you launch your app in minutes.
                                </h3>
                                <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p>
                            </div>
                            <div className="row">
                                {/* <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <img src={icon5} alt="" />
                                        </div>
                                        <h5 className="title">Carefully designed</h5>
                                        <p>Mucker plastered bugger all mate morish are.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <h5 className="title">Seamless Sync</h5>
                                        <p>Mucker plastered bugger all mate morish are.</p>
                                    </div>
                                </div> */}
                                <div className="col-lg-12 d-flex">
                                    <div style={{cursor:'pointer'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                    <div style={{cursor:'pointer', marginLeft:'1rem'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img style={{objectFit:'cover', height:'48px', width:'148px', borderRadius:'7px'}} src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none row align-items-center mt-100 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">Browse over 40k Apps over the world</h3>
                                <p>
                                    He nicked it tickety boo harry the cras bargy chap mush spiffing
                                    spend a penny the full monty burke butty.
                                </p>
                            </div>
                            <div className="row">
                                {/* <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30 item-3">
                                        <div className="icon">
                                            <img src={icon6} alt="" />
                                        </div>
                                        <h5 className="title">User Interactive</h5>
                                        <p>Mucker plastered bugger all mate morish are.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30 item-4">
                                        <div className="icon">
                                            <img src={icon7} alt="" />
                                        </div>
                                        <h5 className="title">Choose a App</h5>
                                        <p>Mucker plastered bugger all mate morish are.</p>
                                    </div>
                                </div> */}
                                <div className="col-lg-12 d-flex">
                                    <div style={{cursor:'pointer'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                    <div style={{cursor:'pointer', marginLeft:'1rem'}} className="traffic-btn mt-50">
                                        <a className="" href="#">
                                            <img style={{objectFit:'cover', height:'48px', width:'148px', borderRadius:'7px'}} src="https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png" alt="" />
                                            {/* Learn More <i className="fal fa-arrow-right" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeThree;


const appData = [
    {
        title: "Wecode lets you launch your app in minutes.", 
        desc:" He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.",
        ios:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        appicon:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        android:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png",
        image:aboutThumb
    },
    {
        title: "Wecode lets you launch your app in minutes.", 
        desc:" He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.",
        ios:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        appicon:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        android:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png",
        image:aboutThumb
    },
    {
        title: "Wecode lets you launch your app in minutes.", 
        desc:" He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.",
        ios:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        appicon:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        android:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png",
        image:aboutThumb
    },
    {
        title: "Wecode lets you launch your app in minutes.", 
        desc:" He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.",
        ios:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        appicon:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        android:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png",
        image:aboutThumb
    },
    {
        title: "Wecode lets you launch your app in minutes.", 
        desc:" He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.",
        ios:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        appicon:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        android:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png",
        image:aboutThumb
    },
    {
        title: "Wecode lets you launch your app in minutes.", 
        desc:" He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.",
        ios:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        appicon:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/60056aad49096a79c7412bbf_download_on_the_app_store.svg",
        android:"https://uploads-ssl.webflow.com/6003416b0aa4a84bf3bfbd91/6221d77aabba344636bef85f_google-play-badge.png",
        image:aboutThumb
    },
   
]
