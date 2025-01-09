import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContextComponent";
import "./joinasdonnerstyles.css"

const JoinAsDonner = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return;
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center  gap-6 py-4 bg-red-100 mt-8 rounded-t-3xl rounded-b-lg">
      <div className="px-2">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase">
          Join as <span className="text-red-500">a Donner</span>
        </h2>
        <Link
          className="w-full bg-red-500 px-4 py-2 rounded-md inline-block text-center font-semibold text-white text-xl"
          to={"/register"}
        >
          JOIN NOW
        </Link>
      </div>
      <div className="border-2 border-red-700 bg-red-300 rounded-full custom-shadow">
        <img
          src="/donner_hero.png"
          alt="donner"
          className="h-[250px] lg:h-[500px] hover:bg-red-500 border-2 border-red-500 border-anim rounded-full"
        />
      </div>
    </div>
  );
};

export default JoinAsDonner;
