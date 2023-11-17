import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// images
import { images } from "../constants";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronUp, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// animation
import useAOS from "../components/useAos";

// import React from 'react';

const Footer = () => {

  // go-to-top
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#a2a2a2 ${scrollValue}%, #000000 ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // aos
  const Aos = useAOS();

  return (
    <div>
      <section className="pt-[120px] tablet:pt-[80px] mobile:pt-[80px]">
        <div className="container-sample">
          <div className="grid grid-cols-1 pc:grid-cols-3 desktop:grid-cols-3 pc:gap-[5px] desktop:gap-[5px] gap-[50px] ">
            <div>
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
            </div>

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
                    09065816860
                  </p>
                  <p className="text-[16px] mb-[10px] font-semibold leading-[1.2] text-[#7A7A7A]">
                    09065816860
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
                href="http://github.com/Wahab019"
              >
                <FaGithubSquare />
              </a>
              <a
                className="text-[30px] mr-[15px] inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                href="https://www.linkedin.com/in/abdulwahab-lawal-0957a3286"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-[30px] mr-[15px] inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                href="http://twitter.com/theboyAA"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* go to top */}
      <div title="Go to top" id="progress">
        <span className="text-[#a2a2a2]" id="progress-value">
          <FaChevronUp />
        </span>
      </div>
    </div>
  );
};

export default Footer;
