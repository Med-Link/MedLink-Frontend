import withRoot from '../../components/mainLandingPage/withRoot';
// import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import React from 'react';
import AppFooter from '../../components/mainLandingPage/views/AppFooter';
import ProductHero from '../../components/mainLandingPage/views/ProductHero';
import ProductValues from '../../components/mainLandingPage/views/ProductValues';
import ProductCTA from '../../components/mainLandingPage/views/ProductCTA';
import AppAppBar from '../../components/mainLandingPage/views/AppAppBar';
import WhyMedLink from '../../components/mainLandingPage/views/WhyMedLink';

function Index() {
  return (


    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <WhyMedLink />
      <ProductValues />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
