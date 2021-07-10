import withRoot from '../../components/mainLandingPage/withRoot';
// import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import React from 'react';
import ProductCategories from '../../components/mainLandingPage/views/ProductCategories'; 
import ProductSmokingHero from '../../components/mainLandingPage/views/ProductSmokingHero';
import AppFooter from '../../components/mainLandingPage/views/AppFooter';
import ProductHero from '../../components/mainLandingPage/views/ProductHero';
import ProductValues from '../../components/mainLandingPage/views/ProductValues';
import ProductHowItWorks from '../../components/mainLandingPage/views/ProductHowItWorks';
import ProductCTA from '../../components/mainLandingPage/views/ProductCTA';
import AppAppBar from '../../components/mainLandingPage/views/AppAppBar';

function Index() {
  return (
  

    <React.Fragment>
    <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
    
   
    
      
    
  );
}

export default withRoot(Index);
