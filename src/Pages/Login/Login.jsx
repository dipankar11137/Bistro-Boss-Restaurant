import { useEffect, useRef, useState } from 'react';
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = event => {
    event.preventDefault();

    // const from = event.target;
    // const email = from.email.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  };

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    ref={captchaRef}
                    placeholder="Type The text avobe"
                    className="input input-bordered"
                    name="captcha"
                    required
                  />
                  <button
                    onClick={handleCaptcha}
                    className="btn btn-outline btn-xs border-0  border-b-4 border-orange-800 "
                  >
                    Validate
                  </button>
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
