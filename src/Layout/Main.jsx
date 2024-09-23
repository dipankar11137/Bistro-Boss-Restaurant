import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/NavBar/Navbar';

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('signUp');
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
