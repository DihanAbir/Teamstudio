import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import AboutHomeThree from './AboutHomeThree';
import FooterHomeThree from './FooterHomeThree';
import HeaderHomeThree from './HeaderHomeThree';
import HeroHomeThree from './HeroHomeThree';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroHomeThree />
            {/* <ServicesHomeThree /> */}
            {/* <FunFactHomeThree /> */}
            <AboutHomeThree />
            {/* <ShowCaseHomeThree /> */}
            {/* <DownloadHomeThree /> */}
            {/* <BlogHomeThree /> */}
            {/* <ProjectHomeThree /> */}
            <FooterHomeThree />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default HomeThree;
