import MenuItem from '../../../components/MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     // .then(data => setMenu(data));
  //     .then(data => setMenu(data.filter(item => item.category === 'popular')));
  // });
  return (
    <section>
      <SectionTitle
        heading={'From Our Menu'}
        subHeading={'Popular Items'}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {popular.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <button className="btn btn-outline border-0 border-b-4 border-slate-400 mt-4">
          View Full Menu
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className="bg-black  px-28 py-16 text-3xl text-white text-center mb-10">
          Call Us : +8801725648051
        </h1>
      </div>
    </section>
  );
};

export default PopularMenu;
