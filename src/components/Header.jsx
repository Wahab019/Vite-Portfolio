import { useState } from "react";
import { Link } from "react-router-dom";

// images
import { images } from "../constants";

// hamburger
import Hamburger from "hamburger-react";

const Header = () => {
  
  // nav-links
  let Links = [
    { name: "HOME", link: "/", title: "Home" },
    { name: "ABOUT", link: "/#about", title: "About" },
    { name: "SERVICES", link: "/#services", title: "Services" },
    { name: "PROJECTS", link: "/#projects", title: "Projects" },
    { name: "CONTACT", link: "/contact", title: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="shadow-md w-full z-40 fixed mobile:top-0 tablet:top-0 top-0 left-0">
          <div className="pc:flex relative   tablet:block mobile:block desktop:flex items-center justify-between bg-[#09101a]">
            <div className="flex justify-between items-center">
              <Link className="w-[180px] h-[80px]" to={"/"}>
                <img
                  className="w-full  h-full"
                  src={images.wahabLogo}
                  alt="logo"
                />
              </Link>

              <div
                onClick={() => setOpen(!open)}
                className="pc:hidden text-3xl transition-all duration-[1s] desktop:hidden w-[80px] h-[80px] bg-[#55e6a5] flex justify-center items-center cursor-pointer "
              >
                <Hamburger />
              </div>
            </div>

            <ul
              className={`mobile:border-t pc:ml-[18%] desktop:ml-[35%] items-end bg-[#09101a]  absolute desktop:static w-full pc:static z-[1000] mobile:border-b tablet:border-t tablet:border-b border-solid border-t-[#55e6a5] flex-wrap border-b-[#55e6a5] pc:flex tablet:block mobile:block desktop:flex  transition-all duration-[0.4s] ease-in ${
                open ? "left-0" : "right-[-1200px]"
              } `}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="pc:ml-[1.5rem] desktop:ml-[1.5rem] text-center text-[14px] p-[10px]"
                >
                  <a
                    href={link.link}
                    className="text-white font-medium hover:text-[#55e6a5] transition-all duration-[0.3s]"
                    title={link.title}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
