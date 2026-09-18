import React, { useEffect, useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronUp, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const calcScrollValue = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const value = calcHeight > 0 ? Math.round((pos * 100) / calcHeight) : 0;

      setShowProgress(pos > 100);
      setScrollValue(value);
    };

    calcScrollValue();
    window.addEventListener("scroll", calcScrollValue, { passive: true });

    return () => window.removeEventListener("scroll", calcScrollValue);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section className="pt-[120px] bg-[#09101a] tablet:pt-[80px] mobile:pt-[80px]">
        <div className="container-sample">
          <div className="grid grid-cols-1 pc:grid-cols-3 desktop:grid-cols-3 pc:gap-[5px] desktop:gap-[5px] gap-[50px] ">
            {/* <div>
              <div className="flex flex-wrap tablet:items-start pc:items-start desktop:items-start mobile:items-center mobile:text-center mobile:justify-center">
                <div className="footer-icon">
                  <div>
                    <img className="w-full" src={images.footer1} alt="" />
                  </div>
                </div>

                <div className="w-full pc:w-[67%] desktop:w-[67%] desktop:m-0 pc:m-0 tablet:w-[78%] tablet:m-0 mt-[15px]">
                  <h3 className="mb-[10px] pc:mb-[20px] text-[20px] font-semibold text-white leading-[1.2]">
                    Address
                  </h3>
                  <p className="text-[16px] mb-[10px] font-semibold leading-[1.2] text-[#7A7A7A]">
                    10, Olalekan Street, Ojodu, Lagos.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="mobile:hidden tablet:hidden"></div>

            <div>
              <div className="flex flex-wrap tablet:items-start pc:items-start desktop:items-start mobile:items-center mobile:text-center mobile:justify-center">
                <div className="footer-icon">
                  <div>
                    <img className="w-full" src={images.footer2} alt="" />
                  </div>
                </div>

                <div className="w-full pc:w-[67%] desktop:w-[67%] desktop:m-0 pc:m-0 tablet:w-[78%] tablet:m-0 mt-[15px]">
                  <h3 className="mb-[10px] pc:mb-[20px] text-[20px] font-semibold text-white leading-[1.2]">
                    Lets Talk
                  </h3>
                  <p className="text-[16px] mb-[10px] font-semibold leading-[1.2] text-[#7A7A7A]">
                    +234 906 581 6860
                  </p>
                  <p className="text-[16px] mb-[10px] font-semibold leading-[1.2] text-[#7A7A7A]">
                    +234 916 122 3289
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap tablet:items-start pc:items-start desktop:items-start mobile:items-center mobile:text-center mobile:justify-center">
                <div className="footer-icon">
                  <div>
                    <img className="w-full" src={images.footer3} alt="" />
                  </div>
                </div>

                <div className="w-full pc:w-[67%] desktop:w-[67%] desktop:m-0 pc:m-0 tablet:w-[78%] tablet:m-0 mt-[15px]">
                  <h3 className="mb-[10px] pc:mb-[20px] text-[20px] font-semibold text-white leading-[1.2]">
                    Send an email
                  </h3>
                  <p className="text-[16px] mb-[10px] font-semibold leading-[1.2] text-[#7A7A7A]">
                    lawalabdulwahab9@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex tablet:flex-col mobile:flex-col tablet:text-center mobile:text-center justify-between items-center border-t mt-[30px] border-solid border-[#fff1]">
            <div className=" text-[#7a7a7a] text-[20px]  pt-[20px] pb-[25px] tablet:pb-[5px] mobile:pb-[5px] font-semibold mt-[20px]">
              <p>
                Thanks for{" "}
                <FontAwesomeIcon
                  icon={faHeart}
                  beat
                  className="text-[#55e6a5]"
                />{" "}
                checking
              </p>
            </div>

            <div className=" text-[#7a7a7a] text-[20px]  pt-[20px] tablet:pt-[5px] mobile:pt-[5px] pb-[25px] font-semibold mt-[20px]">
              <a
                className="text-[30px] mr-[15px] inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                href="https://www.linkedin.com/in/abdulwahab-lawal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-[30px] mr-[15px] inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                href="https://github.com/Wahab019"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithubSquare />
              </a>
              <a
                className="text-[30px] mr-[15px] inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                href="https://twitter.com/theboyAA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* go to top */}
      <button
        type="button"
        title="Go to top"
        id="progress"
        aria-label="Go to top"
        onClick={scrollToTop}
        style={{
          display: showProgress ? "grid" : "none",
          background: `conic-gradient(#55e6a5 ${scrollValue}%, #000000 ${scrollValue}%)`,
        }}
      >
        <span className="text-[#a2a2a2]" id="progress-value">
          <FaChevronUp />
        </span>
      </button>
    </div>
  );
};

export default Footer;
