import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextComponent";
import axios from "axios";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Register = () => {
  const { registerWithEmailPass, updateUserProfile, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const village = form.village.value;
    const bloodGroup = form.bloodGroup.value;
    const lastDonationDate = form.date.value;
    const file = form.photo.files[0]; // Access the file from input

    // validation blood group
    if (!bloodGroup) {
      return Swal.fire({
        icon: "error",
        title: "কিছুটা ভুল হয়েছে...",
        text: "একটি রক্ত গ্রুপ নির্বাচন করুন!",
      });
    }
    // password validation
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "কিছুটা ভুল হয়েছে...",
        text: "কম পক্ষে ৬ সংখ্যার একটি পাসওয়ার্ড দিন!",
      });
    }
    const isValidPhoneNumber = (phone) => /^01[789534][0-9]{8}$/.test(phone);
    if (!isValidPhoneNumber(phone)) {
      return Swal.fire({
        icon: "error",
        title: "দুঃখিত",
        text: "আপনার ১১ সংখ্যার ফোন নাম্বার দিন ।",
      });
    }
    // Validation: Check if all fields contain only English characters
    const isEnglishOnly = (text) => /^[a-zA-Z0-9\s.,'@#?!%&+-]+$/.test(text);
    if (!isEnglishOnly(password) || !isEnglishOnly(phone)) {
      return Swal.fire({
        icon: "error",
        title: "দুঃখিত",
        text: "পাসওয়ার্ড/ফোন নাম্বার ইংরেজি তে দিন!",
      });
    }

    setLoad(true);

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

          const userInfo = {
            userName,
            userEmail,
            password,
            phone,
            village,
            bloodGroup,
            lastDonationDate,
            photoUrl,
          };

          // save users data in database
          axios
            .post(`${import.meta.env.VITE_BASE_URL}/save-user`, userInfo)
            .then((res) => {
              if (res.status === 202) {
                setLoad(false);
                return Swal.fire({
                  position: "center",
                  icon: "error",
                  title: `দুঃখিত!`,
                  text: "এই ফোন নাম্বার/ইমেইল দিয়ে অ্যাকাউন্ট আছে",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              // Register the user with email, password
              registerWithEmailPass(userEmail, password)
                .then(() => {
                  updateUserProfile(userName, photoUrl)
                    .then(() => {
                      setLoading(true);
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "রেজিস্ত্রেশন সফল হয়েছে !",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    })
                    .catch((err) => {
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: `${err.message}`,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    });
                  // redirect the user to home page if registration success
                  navigate("/");
                })
                .catch((err) => {
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
            })
            .catch((err) => {
              return Swal.fire({
                position: "center",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        } else {
          console.error("Image upload failed:", data.error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "কিছুটা ভুল হয়েছে....",
        text: "একটি ছবি নির্বাচন করুন!",
      });
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">ফোন নাম্বার</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="ফোন নাম্বার"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">ঠিকানা</span>
                </label>
                <input
                  type="text"
                  name="village"
                  placeholder="আপনার গ্রাম এর নাম"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="options" className="label font-semibold">
                রক্তের গ্রুপ
              </label>
              <select
                id="options"
                name="bloodGroup"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="">রক্ত গ্রুপ নির্বাচন করুন</option>
                <option value="A-positive">A+</option>
                <option value="A-negative">A-</option>
                <option value="B-positive">B+</option>
                <option value="B-negative">B-</option>
                <option value="AB-positive">AB+</option>
                <option value="AB-negative">AB-</option>
                <option value="O-positive">O+</option>
                <option value="O-negative">O-</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  বিগত রক্ত দানের তারিখ
                </span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="বিগত রক্ত দানের তারিখ"
                max={new Date().toISOString().split("T")[0]}
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                disabled={load}
                className="btn bg-red-400 font-bold text-lg text-white"
              >
                {load ? (
                  <span className="loading loading-bars loading-md text-red-600"></span>
                ) : (
                  "রেজিস্টার"
                )}
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
