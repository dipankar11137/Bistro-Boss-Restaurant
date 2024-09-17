import { useEffect, useState } from 'react';
import MenuItem from '../../../components/MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      // .then(data => setMenu(data));
      .then(data => setMenu(data.filter(item => item.category === 'popular')));
  });
  return (
    <section>
      <SectionTitle
        heading={'From Our Menu'}
        subHeading={'Popular Items'}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {menu.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
