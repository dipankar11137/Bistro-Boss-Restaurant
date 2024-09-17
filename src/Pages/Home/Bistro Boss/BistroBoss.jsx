import chefSpecialImage from '../../../assets/home/chef-special.jpg';

const BistroBoss = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${chefSpecialImage})`,
      }}
      className="px-20 py-28"
    >
      <div className=" bg-white text-center p-20">
        <h1 className="text-3xl">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          numquam temporibus, doloremque perspiciatis doloribus earum
          repellendus cumque repudiandae debitis illo itaque laudantium saepe
          dolorum nam natus nemo non vel ducimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At, nam.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
