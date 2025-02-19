import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-red-100 text-gray-500 p-10">
      <aside>
        <p className="font-bold">
          Faridpur Blood Network
          <br />
          Providing reliable solution since 2017
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter className="text-2xl " />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube className="text-2xl " />
          </a>
          <a href="https://www.facebook.com/groups/faridpurbloodnentwork">
            <FaFacebook className="text-2xl " />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
