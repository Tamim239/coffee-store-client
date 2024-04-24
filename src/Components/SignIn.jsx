import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, createGoogle, createGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  AOS.init();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        const user = {
          email,
          lastSignAt: res.user?.metadata?.lastSignInTime,
        };
        fetch("https://coffe-store-server-liart.vercel.app/user", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch(() => {
        toast.error("email and password combination is incorrect");
      });
  };

  const handleGoogleLogin = () => {
    createGoogle()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleGithubLogin = () => {
    createGithub()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-[url('/log.png')] p-5 my-5 rounded-xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Espresso || SignIn</title>
      </Helmet>
      <div
        data-aos="fade-down-right"
        data-aos-duration="1000"
        className="w-full max-w-md mx-auto p-8 space-y-2 my-6 rounded-xl text-white border"
      >
        <h1 className="text-2xl font-bold text-center">Sign In Here</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="w-full px-4 py-3 text-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <div className="flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 text-black rounded-md  dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span
                className="absolute text-black right-0 mr-2 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
              </span>
            </div>
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm bg-green-600">
            Sign in
          </button>
          <Toaster></Toaster>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
          </button>
          <button
            onClick={handleGithubLogin}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <FaGithub className="w-5 h-5 fill-current"></FaGithub>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Do not have an account?
          <Link to="/signUp" className="underline ml-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
