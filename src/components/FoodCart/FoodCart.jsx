import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCart = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/carts', cartItem).then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 3000,
          });
          // refetch the cart
          refetch();
        }
      });
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
          navigate('/login', { state: { from: location } });
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
            onClick={() => handleAddToCart()}
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
