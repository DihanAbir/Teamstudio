import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import WorkPartHomeEight from '../HomeEight/WorkPartHomeEight';
import CounterArea from '../HomeTwo/CounterArea';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo';
import Drawer from '../Mobile/Drawer';
import FaqHomeOne from './FaqHomeOne';
import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
import ServicesHomeOne from './ServicesHomeOne';
import TeamHomeOne from './TeamHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import TrafficHomeOne from './TrafficHomeOne';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <ServicesHomeOne />
            <FeaturesHomeOne />
            <TrafficHomeOne />
            <TestimonialHomeOne />
            <TeamHomeOne />
            {/* <PricingHomeOne /> */}
            <CounterArea style={{ backgroundColor: '#EEF1F6' }} />
            <FeaturesHomeTwo />
            <SponserHomeTwo className="pt-90" />
            <FaqHomeOne />
            <WorkPartHomeEight />
            {/* <BlogHomeOne /> */}
            {/* <ProjectHomeOne /> */}
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
