import { Helmet } from 'react-helmet-async';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../Menucategory/Menucategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'} />
      {/* main cover */}
      <SectionTitle heading={"today's Offer"} subHeading={"Don't miss"} />
      {/* offered menu items*/}
      <MenuCategory items={offered} />
      {/* dessert menu items*/}
      <MenuCategory items={dessert} title={'Dessert'} coverImg={dessertImg} />
      {/* pizza menu items*/}
      <MenuCategory items={pizza} title={'Pizza'} coverImg={pizzaImg} />
      {/* salad menu items*/}
      <MenuCategory items={salad} title={'Salad'} coverImg={saladImg} />
      {/* soup menu items*/}
      <MenuCategory items={soup} title={'Soup'} coverImg={soupImg} />
    </div>
  );
};

export default Menu;
