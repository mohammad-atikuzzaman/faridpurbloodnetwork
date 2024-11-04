import { BiMessageError } from "react-icons/bi";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <BiMessageError className="text-4xl text-yellow-600" />
        <p className="text-3xl text-yellow-600">
          Looks like this page is unavailable now.
        </p>
        <Link
          to="/"
          className=" btn font-bold bg-yellow-600 text-white"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
