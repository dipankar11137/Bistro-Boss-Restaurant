import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import img1 from '../../../assets/home/04.jpg';
import img2 from '../../../assets/home/05.png';
import img3 from '../../../assets/home/06.png';

const Chef = () => {
  return (
    <section>
      <SectionTitle heading={'chef recommends'} subHeading={'Should Try'} />

      <div className="my-10 grid md:grid-cols-3 gap-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl rounded-b-none w-full h-64"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 border-slate-400 mt-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="">
            <img
              src={img2}
              alt="Shoes"
              className="rounded-xl rounded-b-none w-full h-64"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 border-slate-400 mt-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="">
            <img
              src={img3}
              alt="Shoes"
              className="rounded-xl rounded-b-none w-full h-64"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 border-slate-400 mt-4">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
