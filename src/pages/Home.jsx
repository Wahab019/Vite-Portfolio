import React, { useRef, useState, useEffect } from "react";

// images
import { images } from "../constants";

// icons
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// animation
import useAOS from "../components/useAos";

// emailjs
import emailjs from "@emailjs/browser";

// framer motion
import { motion } from 'framer-motion';

const Home = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      border: "2px solid white",
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#2d333a33",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const Aos = useAOS();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iw5hv2e",
        "template_kbchu7j",
        form.current,
        "WJMXcogEeqnfCUxGn"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  return (
    <div>
      <motion.div
        className="bg-transparent h-[30px] z-[1000] w-[30px] rounded-[50%] fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      />

      <section id="home" className="">
        <div className="container-sample h-full">
          <div className=" h-full flex flex-col justify-center mb-[35px] tablet:mb-0 tablet:mt-[50px] mobile:mb-0 mobile:mt-[50px]">
            <div className="grid grid-cols-[60%_40%] tablet:grid-cols-1 mobile:grid-cols-1">
              <div data-aos="zoom-in">
                <h1 className="text-[60px] font-bold uppercase leading-[1.2] mb-[30px] text-white pc:text-[50px] tablet:text-[50px] mobile:text-[48px]">
                  HI, I'M WAHAB! <br /> Creative{" "}
                  <span className="text-[#55e6a5]">Coder</span>
                </h1>
                <p className="font-medium text-[#a2a2a2] mb-[65px] text-[16px] leading-[1.7]">
                  I'm a passionate web developer with a mission to create
                  delightful and intuitive digital experiences. With a strong
                  foundation in design principles and a keen eye for detail, I
                  specialize in translating complex ideas into user-friendly
                  interfaces that captivate and engage.
                </p>
                <ul className="flex list-none items-center gap-[3rem] text-[#7a7a7a]">
                  <li>
                    <a
                      className="text-[2.4rem]  inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                      href="https://www.linkedin.com/in/abdulwahab-lawal-0957a3286"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[2.4rem]  inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                      href="http://github.com/Wahab019"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[2.4rem]  inline-block ease-in-out duration-[0.3s] delay-0 hover:translate-y-[-5px] hover:text-[#55e6a5]"
                      href="http://twitter.com/theboyAA"
                    >
                      <FaXTwitter />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tablet:hidden mobile:hidden"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="pt-[130px] mobile:pt-[80px]">
        <div className="container-sample">
          <div className="m-auto mb-[40px]">
            <div className="text-center">
              <div data-aos="fade-down">
                <h5 className="text-[20px] font-medium tracking-[1.4px] text-[#55e6a5] mb-[15px]">
                  MY SERVICE
                </h5>
              </div>
              <div data-aos="fade-down" className="mb-[10px]">
                <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                  Crafting stories through
                </h2>
                <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                  design and innovation
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-4">
            <div>
              <div className="relative px-[40px] pb-[40px] mt-[62px] border-[3px] border-[#191919] border-solid">
                <span className="block text-center my-0 mx-auto top-[-46px] w-[100px] relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99"
                    height="101"
                    viewBox="0 0 99 101"
                    fill="none"
                  >
                    <path
                      d="M76.0618 100.003H1.44788C0.675676 100.003 0 99.3278 0 98.5556V23.7487C0 22.9765 0.675676 22.3008 1.44788 22.3008H76.0618C76.834 22.3008 77.5097 22.9765 77.5097 23.7487V98.4591C77.5097 99.3278 76.834 100.003 76.0618 100.003ZM2.89575 97.1077H74.6139V25.1965H2.89575V97.1077Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M97.0071 77.6062H22.3932C21.621 77.6062 20.9453 76.9305 20.9453 76.1583V50.4826C20.9453 49.7104 21.621 49.0347 22.3932 49.0347H41.4086C42.1808 49.0347 42.8565 49.7104 42.8565 50.4826C42.8565 51.2548 42.1808 51.9305 41.4086 51.9305H23.8411V74.7104H95.5592V2.89575H23.8411V23.7452C23.8411 24.5174 23.1654 25.1931 22.3932 25.1931C21.621 25.1931 20.9453 24.5174 20.9453 23.7452V1.44788C20.9453 0.675676 21.621 0 22.3932 0H97.0071C97.7793 0 98.455 0.675676 98.455 1.44788V76.1583C98.455 77.027 97.7793 77.6062 97.0071 77.6062Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M50.3866 54.8279C47.9735 54.8279 46.043 52.8974 46.043 50.4843C46.043 48.0711 47.9735 46.1406 50.3866 46.1406C52.7997 46.1406 54.7302 48.0711 54.7302 50.4843C54.7302 52.8974 52.7997 54.8279 50.3866 54.8279ZM50.3866 49.0364C49.6144 49.0364 48.9387 49.7121 48.9387 50.4843C48.9387 51.2565 49.6144 51.9321 50.3866 51.9321C51.1588 51.9321 51.8345 51.2565 51.8345 50.4843C51.8345 49.7121 51.1588 49.0364 50.3866 49.0364Z"
                      fill="#55E6A5"
                    ></path>
                  </svg>
                </span>
                <h3 className="text-[20px] font-medium uppercase mb-[20px] text-center tracking-[1px] text-white leading-[1.2]">
                  Website Design
                </h3>
                <p className="text-center text-[16px] font-medium leading-[28px] text-[#a2a2a2] mb-2.5">
                  Nemo design enim ipsam voluptatem quim voluptas sit
                  aspernaturaut odit auting fugit sed thisnquia consequuntur
                  magni doloreseos designer heresm qui
                </p>
              </div>
            </div>

            <div>
              <div className="relative px-[40px] pb-[40px] mt-[62px] border-[3px] border-[#191919] border-solid">
                <span className="block text-center my-0 mx-auto top-[-46px] w-[100px] relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="127"
                    height="100"
                    viewBox="0 0 127 100"
                    fill="none"
                  >
                    <path
                      d="M63.7291 99.9969C63.2929 99.9969 62.8568 99.7789 62.5296 99.4517L0.484306 33.699C-0.0609081 33.1537 -0.0609081 32.3904 0.26622 31.7362L16.2955 3.82122C16.6226 3.27601 17.1679 2.94888 17.7131 2.94888H26.2184C27.0907 2.94888 27.854 3.71218 27.854 4.58452C27.854 5.45686 27.0907 6.22016 26.2184 6.22016H18.6945L3.75559 32.2814L63.7291 95.9624L123.266 32.2814L106.583 6.11113H42.6839C41.8115 6.11113 41.0482 5.34783 41.0482 4.47549C41.0482 3.60314 41.8115 2.83984 42.6839 2.83984H107.346C107.891 2.83984 108.437 3.16697 108.764 3.60314L126.647 31.5181C127.083 32.1724 126.974 32.9356 126.429 33.4809L64.9286 99.3427C64.6015 99.8879 64.1653 99.9969 63.7291 99.9969Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M1.68373 34.2451C0.920431 34.2451 0.266175 33.6999 0.0480891 32.9366C-0.169996 32.0642 0.375217 31.1919 1.24756 30.9738L75.5057 14.2903C76.378 14.0722 77.2504 14.6174 77.4685 15.4897C77.6865 16.3621 77.1413 17.2344 76.269 17.4525L2.01086 34.1361C1.90182 34.1361 1.79277 34.2451 1.68373 34.2451Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M125.227 34.2405C125.009 34.2405 124.9 34.2405 124.682 34.1314L42.1369 6.21648C41.2645 5.88936 40.8284 5.01702 41.1555 4.14468C41.4826 3.27234 42.355 2.83617 43.2273 3.1633L125.773 31.0782C126.645 31.4054 127.081 32.2777 126.754 33.1501C126.645 33.8043 125.991 34.2405 125.227 34.2405Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M34.3962 9.1596C31.8882 9.1596 29.8164 7.08778 29.8164 4.57979C29.8164 2.07181 31.8882 0 34.3962 0C36.9042 0 38.976 2.07181 38.976 4.57979C38.976 7.08778 36.9042 9.1596 34.3962 9.1596ZM34.3962 3.27128C33.6329 3.27128 33.0877 3.81649 33.0877 4.57979C33.0877 5.34309 33.6329 5.88832 34.3962 5.88832C35.1595 5.88832 35.7047 5.34309 35.7047 4.57979C35.7047 3.92554 35.1595 3.27128 34.3962 3.27128Z"
                      fill="#55E6A5"
                    ></path>
                  </svg>
                </span>
                <h3 className="text-[20px] font-medium uppercase mb-[20px] text-center tracking-[1px] text-white leading-[1.2]">
                  Logo Design
                </h3>
                <p className="text-center text-[16px] font-medium leading-[28px] text-[#a2a2a2] mb-2.5">
                  Nemo design enim ipsam voluptatem quim voluptas sit
                  aspernaturaut odit auting fugit sed thisnquia consequuntur
                  magni doloreseos designer heresm qui
                </p>
              </div>
            </div>

            <div>
              <div className="relative px-[40px] pb-[40px] mt-[62px] border-[3px] border-[#191919] border-solid">
                <span className="block text-center my-0 mx-auto top-[-46px] w-[100px] relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="117"
                    height="100"
                    viewBox="0 0 117 100"
                    fill="none"
                  >
                    <path
                      d="M74.2104 51.7634C73.8691 51.7634 73.414 51.6496 73.0727 51.4221C72.3902 50.8533 72.2764 49.7156 72.8452 49.033L110.502 3.52674H5.38219L43.0386 49.033C43.6074 49.7156 43.4937 50.8533 42.8111 51.4221C42.1285 51.9909 40.9908 51.8771 40.422 51.1945L0.490267 2.84414C0.0352047 2.38908 0.0352049 1.59271 0.262736 1.02388C0.490268 0.455056 1.17286 0 1.85546 0H114.37C115.052 0 115.621 0.34129 115.962 1.02388C116.19 1.59271 116.19 2.27531 115.735 2.84414L75.6894 51.0808C75.2343 51.5358 74.7792 51.7634 74.2104 51.7634Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M58.0566 71.3299C57.6016 71.3299 57.0327 71.1024 56.6914 70.7611L44.5185 56.0853C43.9497 55.4027 44.0634 54.2651 44.746 53.6962C45.4286 53.1274 46.5663 53.2412 47.1351 53.9238L57.9428 67.0068L68.5231 54.2651C69.0919 53.5825 70.2295 53.4687 70.9121 54.0375C71.5947 54.6064 71.7085 55.744 71.1397 56.4266L59.308 70.7611C58.9667 71.1024 58.5117 71.3299 58.0566 71.3299Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M114.256 99.9957H1.74217C1.05958 99.9957 0.490752 99.6544 0.149455 98.9719C-0.0780763 98.403 -0.0780765 97.7204 0.376986 97.1516L56.691 29.3473C57.3736 28.5509 58.625 28.5509 59.3076 29.3473L115.508 97.2654C115.963 97.7204 115.963 98.5168 115.735 99.0856C115.508 99.6544 114.939 99.9957 114.256 99.9957ZM5.38267 96.5827H110.616L58.0562 33.1015L5.38267 96.5827Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M58.0561 26.7355C57.146 26.7355 56.3496 25.9392 56.3496 25.0291V19.9096C56.3496 18.9995 57.146 18.2031 58.0561 18.2031C58.9662 18.2031 59.7626 18.9995 59.7626 19.9096V25.0291C59.7626 25.9392 58.9662 26.7355 58.0561 26.7355Z"
                      fill="#55E6A5"
                    ></path>
                    <path
                      d="M58.054 84.4156C55.3237 84.4156 53.1621 82.2541 53.1621 79.6375C53.1621 77.0209 55.3237 74.8594 58.054 74.8594C60.7844 74.8594 62.946 77.0209 62.946 79.6375C62.946 82.3679 60.7844 84.4156 58.054 84.4156ZM58.054 78.3861C57.2577 78.3861 56.5751 78.9549 56.5751 79.7513C56.5751 80.5476 57.2577 81.1165 58.054 81.1165C58.8504 81.1165 59.533 80.5476 59.533 79.7513C59.533 78.9549 58.8504 78.3861 58.054 78.3861Z"
                      fill="#55E6A5"
                    ></path>
                  </svg>
                </span>
                <h3 className="text-[20px] font-medium uppercase mb-[20px] text-center tracking-[1px] text-white leading-[1.2]">
                  Apps Development
                </h3>
                <p className="text-center text-[16px] font-medium leading-[28px] text-[#a2a2a2] mb-2.5">
                  Nemo design enim ipsam voluptatem quim voluptas sit
                  aspernaturaut odit auting fugit sed thisnquia consequuntur
                  magni doloreseos designer heresm qui
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-[130px] mobile:pt-[80px]">
        <div className="container-sample">
          <div className="grid grid-cols-[58%_33%] gap-[9px] tablet:grid-cols-1 tablet:gap-[20px] mobile:gap-[20px] mobile:grid-cols-1">
            <div>
              <div className="pb-[80px] mobile:pb-[50px]">
                <div data-aos="fade-right">
                  <h5 className="text-[20px] font-medium tracking-[1.4px] text-[#55e6a5] mb-[15px]">
                    ABOUT ME
                  </h5>
                </div>
                <div data-aos="fade-up" className="mb-[10px]">
                  <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                    Transforming visions into
                  </h2>
                  <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                    exceptional portfolios
                  </h2>
                </div>
              </div>

              <div data-aos="zoom-in-down" className="about-text">
                <p className="mb-[95px] text-[#a2a2a2] text-[16px] leading-[1.7] font-normal">
                  Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                  aut odit auting fugit sed thisnquia consequuntur magni dolores
                  eos designer heresm qui ratione
                </p>
                <a
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  href={images.my_cv}
                  download
                  className="inline-flex py-[20px] px-[40px] bg-[#55e6a5] justify-center items-center gap-[10px] text-[#02050a] font-medium transition-all duration-[0.3s] hover:bg-[#141c27] hover:text-white"
                >
                  Download Cv <HiDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[135px] pb-[120px] mobile:pt-[40px] mobile:pb-[80px]">
        <div className="container-sample">
          <div className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1">
            <div>
              <div className="mt-[85px] tablet:mt-0 mobile:mt-0">
                <h2 className="d-and-i text-[128px] pc:text-[90px] tablet:text-[80px] font-semibold leading-[60px] text-white mb-2.5">
                  Design{" "}
                  <span className="text-[60px] tablet:text-[52px] font-semibold text-white ">
                    and Innovation
                  </span>
                </h2>
                <p className="mt-[40px] mb-[20px] text-[#a2a2a2] font-normal text-[16px] leading-[1.7]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit auting fugit sed thisnquia consequuntur magni dolores eos
                  designer heresm qui ratione voluptatem sequi nesciuNeque porro
                  quisquam est, oursqui dolorem ipsum quia dolor sit amet
                  consectetur, adipisci velit, sed quia non numquam
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4"></div>
              </div>
            </div>

            <div>
              <div className="form-container bg-[#09101a] p-[60px] mobile:p-[30px] pc:p-[40px] tablet:mt-[25px] mobile:mt-[25px]">
                <h2 className="uppercase text-white text-[40px] mobile:text-[28px] mb-[25px] font-medium leading-[1.2] ">
                  Get in touch
                </h2>
                <p className="text-[16px] font-normal leading-[1.7] text-[#a2a2a2] mb-2.5">
                  For your car we will do everything advice design in us repairs
                  and maintenance We are the some preferred.
                </p>
                <div>
                  <form ref={form} onSubmit={sendEmail}>
                    <label></label>
                    <input
                      required
                      placeholder="Your Name"
                      className="form-input-home"
                      type="text"
                      name="user_name"
                    />

                    <label></label>
                    <input
                      required
                      placeholder="Your Email"
                      className="form-input-home"
                      type="email"
                      name="user_email"
                    />

                    <label></label>
                    <input
                      placeholder="Phone Number"
                      className="form-input-home"
                      type="tel"
                      name="user_number"
                    />

                    <label></label>
                    <textarea
                      cols={10}
                      rows={5}
                      placeholder="Message"
                      className="form-textarea-home"
                      type="text"
                      name="message"
                    />

                    <input
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="form-submit-home"
                      type="submit"
                      value="submit now"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[115px] pb-[70px] mobile:pt-[75px] mobile:pb-[30px] bg-[#09101a]">
        <div className="container-sample">
          <div className="m-auto mb-[60px]">
            <div className="mb-[40px]">
              <div className="text-center">
                <div data-aos="fade-down">
                  <h5 className="text-[20px] font-medium tracking-[1.4px] text-[#55e6a5] mb-[15px]">
                    EDUCATION & SKILL
                  </h5>
                </div>
                <div data-aos="fade-down" className="mb-[10px]">
                  <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                    showcasing your talent
                  </h2>
                  <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                    amplifying your impact
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-6 tablet:gap-3 mobile:gap-3">
              <div className="mb-[80px]">
                <span className="text-[18px] inline-block border border-solid border-[#55e6a5] py-[11px] px-[24px] text-[#55e6a5] font-normal leading-[1.7]">
                  2014 - 2018
                </span>
                <h3 className="text-[30px] font-semibold mt-[20px] mb-[10px] text-white leading-[1.2]">
                  WordPress and End Developer
                </h3>
                <p className="text-[16px] font-medium text-[#a2a2a2] leading-[1.7] mb-[2.5]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed thisnquia consequuntur magni dolores eos
                  qui ratione voluptatem
                </p>
              </div>

              <div className="mb-[80px]">
                <span className="text-[18px] inline-block border border-solid border-[#55e6a5] py-[11px] px-[24px] text-[#55e6a5] font-normal leading-[1.7]">
                  2014 - 2018
                </span>
                <h3 className="text-[30px] font-semibold mt-[20px] mb-[10px] text-white leading-[1.2]">
                  WordPress and End Developer
                </h3>
                <p className="text-[16px] font-medium text-[#a2a2a2] leading-[1.7] mb-[2.5]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed thisnquia consequuntur magni dolores eos
                  qui ratione voluptatem
                </p>
              </div>

              <div className="mb-[80px]">
                <span className="text-[18px] inline-block border border-solid border-[#55e6a5] py-[11px] px-[24px] text-[#55e6a5] font-normal leading-[1.7]">
                  2014 - 2018
                </span>
                <h3 className="text-[30px] font-semibold mt-[20px] mb-[10px] text-white leading-[1.2]">
                  WordPress and End Developer
                </h3>
                <p className="text-[16px] font-medium text-[#a2a2a2] leading-[1.7] mb-[2.5]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed thisnquia consequuntur magni dolores eos
                  qui ratione voluptatem
                </p>
              </div>

              <div className="mb-[80px]">
                <span className="text-[18px] inline-block border border-solid border-[#55e6a5] py-[11px] px-[24px] text-[#55e6a5] font-normal leading-[1.7]">
                  2014 - 2018
                </span>
                <h3 className="text-[30px] font-semibold mt-[20px] mb-[10px] text-white leading-[1.2]">
                  WordPress and End Developer
                </h3>
                <p className="text-[16px] font-medium text-[#a2a2a2] leading-[1.7] mb-[2.5]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed thisnquia consequuntur magni dolores eos
                  qui ratione voluptatem
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-4">
              <div data-aos="zoom-in-up">
                <div className="bg-[#151c25] mb-[50px] tablet:mb-[20px] mobile:mb-[40px]">
                  <p className="py-[15px] pl-[40px] text-white text-[16px] font-normal leading-[1.7] mb-2.5">
                    HTML
                  </p>
                  <div className="bg-[#55e6a5] w-[76%] h-[6px] border-none bg-[0_0] relative">
                    <span className="bg-[#55e6a5] block w-0 h-full z-[1] relative"></span>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <div className="bg-[#151c25] mb-[50px] tablet:mb-[20px] mobile:mb-[40px]">
                  <p className="py-[15px] pl-[40px] text-white text-[16px] font-normal leading-[1.7] mb-2.5">
                    CSS
                  </p>
                  <div className="bg-[#55e6a5] w-[60%] h-[6px] border-none bg-[0_0] relative">
                    <span className="bg-[#55e6a5] block w-0 h-full z-[1] relative"></span>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <div className="bg-[#151c25] mb-[50px] tablet:mb-[20px] mobile:mb-[40px]">
                  <p className="py-[15px] pl-[40px] text-white text-[16px] font-normal leading-[1.7] mb-2.5">
                    Java Script
                  </p>
                  <div className="bg-[#55e6a5] w-[50%] h-[6px] border-none bg-[0_0] relative">
                    <span className="bg-[#55e6a5] block w-0 h-full z-[1] relative"></span>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <div className="bg-[#151c25] mb-[50px] tablet:mb-[20px] mobile:mb-[40px]">
                  <p className="py-[15px] pl-[40px] text-white text-[16px] font-normal leading-[1.7] mb-2.5">
                    React
                  </p>
                  <div className="bg-[#55e6a5] w-[40%] h-[6px] border-none bg-[0_0] relative">
                    <span className="bg-[#55e6a5] block w-0 h-full z-[1] relative"></span>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <div className="bg-[#151c25] mb-[50px] tablet:mb-[20px] mobile:mb-[40px]">
                  <p className="py-[15px] pl-[40px] text-white text-[16px] font-normal leading-[1.7] mb-2.5">
                    Tailwind
                  </p>
                  <div className="bg-[#55e6a5] w-[75%] h-[6px] border-none bg-[0_0] relative">
                    <span className="bg-[#55e6a5] block w-0 h-full z-[1] relative"></span>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <div className="bg-[#151c25] mb-[50px] tablet:mb-[20px] mobile:mb-[40px]">
                  <p className="py-[15px] pl-[40px] text-white text-[16px] font-normal leading-[1.7] mb-2.5">
                    Git / Github
                  </p>
                  <div className="bg-[#55e6a5] w-[50%] h-[6px] border-none bg-[0_0] relative">
                    <span className="bg-[#55e6a5] block w-0 h-full z-[1] relative"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pt-[70px]">
        <div className="container-sample">
          <div className="pb-[80px] mobile:pb-[50px]">
            <div data-aos="fade-down">
              <h5 className="text-[20px] font-medium tracking-[1.4px] text-[#55e6a5] mb-[15px]">
                MY RECENT PORTFOLIO
              </h5>
            </div>
            <div data-aos="fade-down" className="mb-[10px]">
              <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                Elevate your brand to new
              </h2>
              <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                heights with our portfolio expertise
              </h2>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center my-[2.5rem]  w-full  mobile:flex-col mobile:text-center">
              <div className="holder w-[30rem] flex-[1] max-w-[40%] mr-[10%] max-h-[40%] relative mobile:max-w-[90%] mobile:my-0 mobile:mx-[10%]">
                <img
                  className="test-image"
                  src={images.dangoteClone}
                  alt="dangote Website Clone"
                />
                <div className="overlay absolute top-0 left-0 w-full h-full">
                  <div className="content1">
                    <div class="overlay-icon">
                      <a
                        href="https://dangote-clone.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="content2">
                    <div class="overlay-icon">
                      <a href="https://github.com/Duromedia-Academy/Cohort3-q2-project-2023">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-[1] ">
                <h2 className="text-white my-[1rem] mobile:text-[1.2rem] text-[2rem] leading-[2.5rem] font-semibold uppercase">
                  Dangote Clone
                </h2>
                <p className="text-white">
                  Dangotes' Website replicated by leveraging the power of
                  Tailwind CSS and JavaScript.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center my-[2.5rem]  w-full  mobile:flex-col mobile:text-center">
              <div className="holder w-[30rem] flex-[1] max-w-[40%] mr-[10%] max-h-[40%] relative mobile:max-w-[90%] mobile:my-0 mobile:mx-[10%]">
                <img
                  className="test-image"
                  src={images.uxCourse}
                  alt="UX Course Template"
                />
                <div className="overlay absolute top-0 left-0 w-full h-full">
                  <div className="content1">
                    <div class="overlay-icon">
                      <a
                        href="https://ux-course.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="content2">
                    <div class="overlay-icon">
                      <a href="https://github.com/Wahab019/UX-Design-Course">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-[1] ">
                <h2 className="text-white my-[1rem] mobile:text-[1.2rem] text-[2rem] leading-[2.5rem] font-semibold uppercase">
                  UX WEB COURSE
                </h2>
                <p className="text-white">
                  UX Course Template crafted with utilization of React JS.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center my-[2.5rem]  w-full  mobile:flex-col mobile:text-center">
              <div className="holder w-[30rem] flex-[1] max-w-[40%] mr-[10%] max-h-[40%] relative mobile:max-w-[90%] mobile:my-0 mobile:mx-[10%]">
                <img
                  className="test-image"
                  src={images.bootstrapPortfolio}
                  alt="Bootstrap Portfolio Template"
                />
                <div className="overlay absolute top-0 left-0 w-full h-full">
                  <div className="content1">
                    <div class="overlay-icon">
                      <a
                        href="https://bootstrap-portfolio-olive.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="content2">
                    <div class="overlay-icon">
                      <a href="https://github.com/Wahab019/bootstrap-portfolio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-[1] ">
                <h2 className="text-white my-[1rem] mobile:text-[1.2rem] text-[2rem] leading-[2.5rem] font-semibold uppercase">
                  PORTFOLIO TEMPLATE
                </h2>
                <p className="text-white">
                  Portfolio template created with a combination of Bootstrap for
                  responsive design and React for dynamic functionality.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center my-[2.5rem]  w-full  mobile:flex-col mobile:text-center">
              <div className="holder w-[30rem] flex-[1] max-w-[40%] mr-[10%] max-h-[40%] relative mobile:max-w-[90%] mobile:my-0 mobile:mx-[10%]">
                <img
                  className="test-image"
                  src={images.wahabPortfolio}
                  alt="Wahab Portfolio"
                />
                <div className="overlay absolute top-0 left-0 w-full h-full">
                  <div className="content1">
                    <div class="overlay-icon">
                      <a
                        href="https://portfolio-wahab019.vercel.app/"
                        target="_blank"
                        rel="noopener"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="content2">
                    <div class="overlay-icon">
                      <a href="https://github.com/Wahab019/Vite-Portfolio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          width="50"
                          height="50"
                        >
                          <path
                            fill="#fff"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-[1] ">
                <h2 className="text-white my-[1rem] mobile:text-[1.2rem] text-[2rem] leading-[2.5rem] font-semibold uppercase">
                  MY PORTFOLIO
                </h2>
                <p className="text-white">You are here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
