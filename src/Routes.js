import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Return from './components/Contact/Return';
import Error from './components/Error';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeThree from './components/HomeThree';

function Routes() {
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // });
    return (
        <>
            {/* {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )} */}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={HomeThree} />
                            {/* <Route exact path="/" component={HomeOne} /> */}
                            {/* <Route exact path="/home-two" component={Hometwo} />
                            <Route exact path="/home-three" component={HomeThree} />
                            <Route exact path="/home-four" component={HomeFour} />
                            <Route exact path="/home-five" component={HomeFive} />
                            <Route exact path="/home-six" component={HomeSix} />
                            <Route exact path="/home-seven" component={HomeSeven} />
                            <Route exact path="/home-eight" component={HomeEight} />
                            <Route exact path="/home-dark" component={HomeDark} />
                            <Route exact path="/home-rtl" component={HomeRtl} /> */}
                            {/* <Route exact path="/news" component={News} />
                            <Route exact path="/news/single-news" component={SingleNews} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/about-us" component={AboutUs} /> */}
                            <Route exact path="/privacy" component={Contact} />
                            <Route exact path="/Returun_policy" component={Return} />
                            {/* <Route exact path="/error" component={Error} />
                            <Route exact path="/about-us-another" component={AboutUsTwo} /> */}
                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
