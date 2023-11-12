import { Link } from "react-router-dom";
import { images } from "../constants";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// animation
import useAOS from "../components/useAos";

import React from 'react';

const Footer = () => {
  


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

                </div>

                <div >
                    <div className="w-full text-[#7a7a7a] text-[20px] text-center pt-[50px] pb-[25px] font-semibold mt-[20px]">
                        <p>Thanks for <FontAwesomeIcon icon={faHeart} beat className="text-[#55e6a5]" /> checking</p>
                    </div>
                </div>

            </section>

            {/* <section className='pt-[120px] pb-[50px] tablet:pt-[80px] mobile:pt-[80px]'>
                <div className="container-sample">

                    <div>
                        <div className=' grid tablet:grid-cols-1 mobile:grid-cols-1 grid-cols-3 gap-6'>

                            <div data-aos="fade-left" className=" flex flex-wrap mobile:flex-col justify-center  mobile:items-center items-start">
                                <div className="icon-bg">
                                    <div>
                                        <img className="w-full" src={images.footer1} alt="" />
                                    </div>
                                </div>
                                <div className="w-[67%] mobile:text-center text-[20px] font-medium text-[#7A7A7A]">
                                    <h3 className="text-white text-[20px] leading-[1.2] font-semibold mb-[20px]">Address</h3>
                                    2118 Thornridge Cir. Syracuse, Connecticut 35624                                            
                                </div>
                            </div>

                            <div data-aos="fade-left" className=" flex flex-wrap mobile:flex-col justify-center mobile:items-center items-start">
                                <div className="icon-bg">
                                    <div>
                                        <img className="w-full" src={images.footer2} alt="" />
                                    </div>
                                </div>
                                <div className="w-[67%] mobile:text-center text-[20px] font-medium text-[#7A7A7A]">
                                    <h3 className="text-white text-[20px] leading-[1.2] font-semibold mb-[20px]">Let's Talk</h3>
                                    09065816860 <br /> 09161223289                                           
                                </div>
                            </div>

                            <div data-aos="fade-left" className=" flex flex-wrap mobile:flex-col justify-center mobile:items-center items-start">
                                <div className="icon-bg">
                                    <div>
                                        <img className="w-full" src={images.footer3} alt="" />
                                    </div>
                                </div>
                                <div className="w-[67%] mobile:text-center text-[20px] font-medium text-[#7A7A7A]">
                                    <h3 className="text-white text-[20px] leading-[1.2] font-semibold mb-[20px]">Send an email</h3>
                                    lawalabdulwahab9@gmail.com                      
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center justify-between border-t tablet:mt-0 mobile:mt-0 border-solid border-[#fff1] mt-[75px] py-[35px] px-0">
                            <p className="text-[16px] font-medium leading-[1.7] text-[#a2a2a2] mb-2.5">
                                © CodeeFly 2023 | All Rights Reserved
                            </p>
                            <ul className="flex gap-[60px] flex-wrap mobile:gap-[10px] list-none tablet:mt-[30px] mobile:mt-[30px]">
                                <li className="text-[#a2a2a2] font-medium hover:text-[#55e6a5] transition-all duration-[0.3s]" >
                                    <Link>Terms & Condition</Link>
                                </li>
                                <li className="text-[#a2a2a2] font-medium  hover:text-[#55e6a5] transition-all duration-[0.3s]">
                                    <Link>Privacy Policy</Link>
                                </li>
                                <li className="text-[#a2a2a2] font-medium  hover:text-[#55e6a5] transition-all duration-[0.3s]">
                                    <Link>Site Map</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section> */}

        </div>
     );
}
 
export default Footer;