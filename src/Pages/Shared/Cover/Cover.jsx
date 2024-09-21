import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content  text-center text-white">
          <div className="w-[600px] bg-black bg-opacity-60 px-28 py-5">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
