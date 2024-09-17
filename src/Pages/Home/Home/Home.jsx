import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import BistroBoss from '../Bistro Boss/BistroBoss';
import Category from '../Category/Category';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBoss />
      <PopularMenu />
      <Chef />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
