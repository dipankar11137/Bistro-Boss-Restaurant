const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-3 p-1 rounded-md top-4">
        $ {price}
      </p>
      <div className="card-body p-3 flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-yellow-700 bg-slate-100 border-b-4 mt-4 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
