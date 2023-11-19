import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// emailjs
import emailjs from "@emailjs/browser";

// framer motion
import { motion } from "framer-motion";

// animation
import useAOS from "../components/useAos";

const Contact = () => {
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
      height: 90,
      width: 90,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      backgroundColor: "#C0C0C07F",
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
        "template_k0ku8ke",
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
        className="bg-transparent h-[30px] tablet:hidden mobile:hidden w-[30px] z-50 rounded-[50%] fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      />
      {/* contact page header */}
      <section className="contact-header">
        <div className="container-sample">
          <div className="flex justify-between flex-wrap items-center gap-[15px]">
            <h1 className="font-bold text-[50px] mb-2.5 text-white mobile:text-[26px] mobile:mb-[5px] mobile:w-full tablet:text-[32px]">
              Contact
            </h1>

            <ul className="flex flex-wrap justify-end text-[#a2a2a2]">
              <li className="first-link mr-[45px] text-white text-[20px] font-medium relative z-[1]">
                <Link
                  to={"/"}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="header-links"
                >
                  Home
                </Link>
              </li>
              <li className=" text-white text-[20px] font-medium relative z-[1]">
                <Link
                  to={"/contact"}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="header-links"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* contact form and map */}
      <section className="py-[80px]">
        <div className="container-sample">
          <div>
            <div className="mb-[40px] text-center">
              <div data-aos="fade-down">
                <h5 className="text-[20px] font-medium tracking-[1.4px] text-[#55e6a5] mb-[15px]">
                  GET IN TOUCH
                </h5>
              </div>
              <div data-aos="fade-down" className="mb-[10px]">
                <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                  Let's Discuss
                </h2>
                <h2 className="font-semibold text-white mobile:text-4xl tablet:text-5xl pc:text-[38px] pc:leading-[60px] desktop:text-[48px] desktop:leading-[60px] ">
                  about a project!
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-[66.66%_32%] tablet:grid-cols-1 mobile:grid-cols-1 gap-3 tablet:gap-4 mobile:gap-4">
              {/* form */}
              <div className="">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="bg-[#09101a] px-[40px] pb-[40px]"
                  action=""
                >
                  <div className="grid grid-cols-2 mobile:grid-cols-1">
                    <div>
                      <label></label>
                      <input
                        required
                        placeholder="Your Name"
                        className="form-input"
                        type="text"
                        name="user_name"
                      />
                    </div>
                    <div>
                      <label></label>
                      <input
                        required
                        placeholder="Your Email"
                        className="form-input"
                        type="email"
                        name="user_email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mobile:grid-cols-1">
                    <div>
                      <label></label>
                      <input
                        placeholder="Phone Number"
                        className="form-input"
                        type="tel"
                        name="user_number"
                      />
                    </div>
                    <div>
                      <label></label>
                      <input
                        placeholder="Your Website"
                        className="form-input"
                        type="text"
                        name="user_website"
                      />
                    </div>
                  </div>
                  <div className="grid">
                    <div>
                      <label></label>
                      <textarea
                        cols={10}
                        rows={5}
                        placeholder="Message"
                        className="form-textarea"
                        type="text"
                        name="message"
                      />

                      <input
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className="form-submit"
                        type="submit"
                        value="submit now"
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/* map */}
              <div className="">
                <div className="w-full h-full">
                  <div className="mapouter relative text-center max-w-full h-[571px] tablet:h-[400px] mobile:h-[300px]">
                    <div className="gmap_canvas overflow-hidden bg-none max-w-full h-[571px] tablet:h-[400px] mobile:h-[300px]">
                      <iframe
                        className="gmap_iframe max-w-full h-[571px] tablet:h-[400px] mobile:h-[300px]"
                        width="100%"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=526&amp;height=571&amp;hl=en&amp;q=10 olalekan street oke ira&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                      <a href="https://connectionsgame.org/">
                        Connections Puzzle
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* newsletter */}
      <section className="bg-subscibe-pattern bg-center bg-fixed bg-cover">
        <div className="bg-[#000000e3] pt-[115px] pb-[120px] mobile:pt-[75px] mobile:pb-[80px]">
          <div className="container-sample">
            <div className="m-auto w-[50%] tablet:w-[80%] mobile:w-full">
              <div>
                <h3 className="text-center text-[30px] text-white mobile:text-[20px] tracking-[1px] font-medium mb-[35px] ">
                  SUBSCRIBE MY NEWSLETTER
                </h3>
              </div>

              <div>
                <form className="relative" action="">
                  <span className="relative">
                    <input
                      size={40}
                      placeholder="Enter your Email"
                      className="w-full border outline-none text-[16px] font-medium bg-[#131313] border-solid border-[#55e6a5] text-white py-[27px] px-[25px]"
                      type="email"
                    />
                  </span>
                  <input
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="notify-btn"
                    value="Notify Now"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
