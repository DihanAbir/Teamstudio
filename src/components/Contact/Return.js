import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Forms from '../Contact/Forms';
import FooterHomeThree from '../HomeThree/FooterHomeThree';
import HeaderHomeThree from '../HomeThree/HeaderHomeThree';
import Drawer from '../Mobile/Drawer';
import HeroNews from '../News/HeroNews';

function Return() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
             <HeroNews
                title="Returun  Policy"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'Returun Policy' },
                ]}
            /> 
             <Forms /> 
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Return;
