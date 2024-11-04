import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextComponent";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Register = () => {
  const { registerWithEmailPass } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const password = form.password.value;
    const file = form.photo.files[0]; // Access the file from input

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(imageHostingApi, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (data.success) {
          const photoUrl = data.data.display_url;
          console.log("Image uploaded:", photoUrl);

          // Register the user with email, password, and photo URL
          registerWithEmailPass(userEmail, password)
            .then(() => console.log("Registration successful"))
            .catch((err) => console.error(err));
        } else {
          console.error("Image upload failed:", data.error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No image selected");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content justify-between flex-col lg:flex-row">
        <div className="">
          <img src="./login.jpg" alt="login" className="w-28 md:w-60 lg:w-96" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">নাম</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="আপনার নাম"
                className="input input-bordered"
                required
              />
            </div>
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
                placeholder="পাসওয়ার্ড"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="photo" className="font-semibold my-3">
                ফটো নির্বাচন করুন
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-400 font-bold text-lg text-white">
                রেজিস্টার
              </button>
            </div>
            <p className="text-center mt-6">
              ইতিমদ্ধে একটি অ্যাকাউন্ট আছে?{" "}
              <Link to="/login" className="underline">
                লগইন করুন
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
