import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import ServicesHomeTwo from '../HomeTwo/ServicesHomeTwo';
import Drawer from '../Mobile/Drawer';
import DetailsService from './DetailsService';
import HeaderService from './HeaderService';
import HeroService from './HeroService';

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroService />
            <DetailsService />
            {/* <ProjectHomeOne /> */}
            <ServicesHomeTwo />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Service;
