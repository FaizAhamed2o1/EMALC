import { useState } from "react";
import Logo from "../Logo/Logo";
import WideButtonLight from "../WideButtonLight/WideButtonLight";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <nav className="bg-customPrimary py-7 px-4">
      <div className="flex items-center justify-between max-w-[81rem] mx-auto">
        <div className="lg:block relative flex gap-5">
          <button
            className="text-inversePrimary lg:hidden block text-2xl"
            onClick={() => setShowNavLinks(!showNavLinks)}
          >
            <IoMdMenu />
          </button>

          <Logo></Logo>

          {/* Small device nav links */}
          {showNavLinks && (
            <div className="bg-inversePrimary min-w-52 top-12 -left-3 absolute p-2 rounded-lg shadow-md">
              <p className="px-2 py-1 border-b">
                <a href="">Home</a>
              </p>
              <p className="px-2 py-1 border-b">
                <a href="">About</a>
              </p>
              <p className="px-2 py-1 border-b">
                <a href="">Active Members</a>
              </p>
              <p className="px-2 py-1 border-b">
                <a href="">Premium Plans</a>
              </p>
              <p className="px-2 py-1 border-b">
                <a href="">Pricings</a>
              </p>
              <p className=" px-2 py-1 border-b">
                <a href="">Happy Stories</a>
              </p>
              <p className=" px-2 py-1">
                <a href="">Contacts</a>
              </p>
            </div>
          )}
        </div>

        {/* Nav Links Large device*/}
        <ul className="text-inversePrimary lg:flex items-center hidden px-1">
          <li>
            <a href="#" className="px-3 xl:px-5 py-2.5">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="xl:px-5 xl:py-2.5 px-3">
              About
            </a>
          </li>
          <li>
            <a href="#" className="xl:px-5 xl:py-2.5 px-3">
              Active Members
            </a>
          </li>
          <li>
            <a href="#" className="xl:px-5 xl:py-2.5 px-3">
              Premium Plans
            </a>
          </li>
          <li>
            <a href="#" className="xl:px-5 xl:py-2.5 px-3">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="xl:px-5 xl:py-2.5 px-3">
              Happy Stories
            </a>
          </li>
          <li>
            <a href="#" className="xl:px-5 xl:py-2.5 px-3">
              Contact
            </a>
          </li>
        </ul>

        <WideButtonLight buttonText="Start Free Trial"></WideButtonLight>
      </div>
    </nav>
  );
};

export default Header;
