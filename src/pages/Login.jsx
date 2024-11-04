import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextComponent";

const Login = () => {
  const { logInWithEmailPass } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const userEmail = form.email.value;
    const password = form.password.value;
    console.log(userEmail, password);
    logInWithEmailPass(userEmail, password)
    .then((cred)=>console.log(cred.user))
    .catch((err)=>console.error(err))
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse">
        <div className="">
          <img src="./login.jpg" alt="login" className="w-28 md:w-60 lg:w-96" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">ই-মেইল</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="ই-মেইল অ্যাড্রেস"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">পাসওয়ার্ড</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="পাসওয়ার্ড দিন"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-400 font-bold text-lg text-white">
                লগইন
              </button>
            </div>
            <p className="text-center mt-6">
              আপনার কি অ্যাকাউন্ট নাই?{" "}
              <Link to="/register" className="underline">
                রেজিস্টার করুন
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
