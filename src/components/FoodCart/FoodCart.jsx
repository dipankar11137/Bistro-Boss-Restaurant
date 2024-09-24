import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = food => {
    if (user && user.email) {
      console.log(food);
    } else {
      Swal.fire({
        title: 'You are not logged In',
        text: 'Please To login to add to the cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-3 p-1 rounded-md top-4">
        $ {price}
      </p>
      <div className="card-body p-3 flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-yellow-700 bg-slate-100 border-b-4 mt-4 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
