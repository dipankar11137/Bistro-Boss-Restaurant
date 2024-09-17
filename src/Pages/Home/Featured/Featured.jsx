import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import fImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item text-white  bg-fixed ">
      <div className="bg-slate-600 bg-opacity-60 pt-3">
        <SectionTitle
          heading={'Featured Item'}
          subHeading={'Check it Out'}
        ></SectionTitle>
        <div className="  md:flex justify-center items-center pt-12 pb-20 px-36 gap-10 ">
          <div>
            <img src={fImg} alt="" />
          </div>
          <div>
            <p>Aug 20, 2029</p>
            <p className="uppercase">What Can i get some</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              culpa similique. Reiciendis nihil placeat impedit atque sapiente
              beatae assumenda! Eaque temporibus unde consectetur nihil ipsa
              nemo magni dolorem quos rem reiciendis, ex quas, tenetur nisi
              harum vitae pariatur, similique provident vero! Deserunt tempora
              nulla quidem voluptatem alias deleniti neque tempore.
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-slate-400 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
