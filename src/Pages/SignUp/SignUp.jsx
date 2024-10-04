import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log('dado', loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            img: data.photoURL,
          };
          axiosPublic.post('/users', userInfo).then(res => {
            console.log('dado2', res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          });
        })
        .catch(error => console.log(error));
    });
  };

  // Watch the password field
  const password = watch('password');

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register('photoURL', { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">
                    Password must have one uppercase, one lowercase, one number,
                    and one special character.
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register('confirmPassword', {
                    required: true,
                    validate: value =>
                      value === password || "Passwords don't match",
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="p-3">
              <small>
                Already have an account?{' '}
                <Link
                  className="text-orange-700 ml-2 font-semibold"
                  to="/login"
                >
                  Login
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

// import { useContext } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../providers/AuthProvider';

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const onSubmit = data => {
//     console.log(data);
//     createUser(data.email, data.password).then(result => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       updateUserProfile(data.name, data.photoURL)
//         .then(() => {
//           console.log('user profile info updated');
//           reset();
//           Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'User created successfully.',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           navigate('/');
//         })
//         .catch(error => console.log(error));
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Bistro Boss | Sign Up</title>
//       </Helmet>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Sign up now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register('name', { required: true })}
//                   name="name"
//                   placeholder="Name"
//                   className="input input-bordered"
//                 />
//                 {errors.name && (
//                   <span className="text-red-600">Name is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register('photoURL', { required: true })}
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                 />
//                 {errors.photoURL && (
//                   <span className="text-red-600">Photo URL is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   {...register('email', { required: true })}
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                 />
//                 {errors.email && (
//                   <span className="text-red-600">Email is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   {...register('password', {
//                     required: true,
//                     minLength: 6,
//                     maxLength: 20,
//                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//                   })}
//                   placeholder="password"
//                   className="input input-bordered"
//                 />
//                 {errors.password?.type === 'required' && (
//                   <p className="text-red-600">Password is required</p>
//                 )}
//                 {errors.password?.type === 'minLength' && (
//                   <p className="text-red-600">Password must be 6 characters</p>
//                 )}
//                 {errors.password?.type === 'maxLength' && (
//                   <p className="text-red-600">
//                     Password must be less than 20 characters
//                   </p>
//                 )}
//                 {errors.password?.type === 'pattern' && (
//                   <p className="text-red-600">
//                     Password must have one Uppercase one lower case, one number
//                     and one special character.
//                   </p>
//                 )}
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <input
//                   className="btn btn-primary"
//                   type="submit"
//                   value="Sign Up"
//                 />
//               </div>
//             </form>
//             <p className="p-3">
//               <small>
//                 Already have an account{' '}
//                 <Link
//                   className="text-orange-700 ml-2 font-semibold"
//                   to="/login"
//                 >
//                   Login
//                 </Link>
//               </small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
