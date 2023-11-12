import { images } from "../constants";
import { HiDownload } from "react-icons/hi";
import { GrPieChart } from "react-icons/gr";
// animation
import useAOS from "../components/useAos";


const Home = () => {

    

    //onMouseEnter={textEnter} onMouseLeave={textLeave} 

    const Aos = useAOS();

    return ( 
      <div>

        <section id="home" className="">
          <div className="container-sample h-full">

            <div className=" h-full flex flex-col justify-center mb-[35px] tablet:mb-0 tablet:mt-[50px] mobile:mb-0 mobile:mt-[50px]">
              <div className="grid grid-cols-[60%_40%] tablet:grid-cols-1 mobile:grid-cols-1">

                <div data-aos="zoom-in">

                  <h1 className="text-[60px] font-bold uppercase leading-[1.2] mb-[30px] text-white pc:text-[50px] tablet:text-[50px] mobile:text-[48px]">
                    HI, I'M WAHAB! <br /> Creative <span className="text-[#55e6a5]">Coder</span>                                          
                  </h1>
                  <p className="font-medium text-[#a2a2a2] mb-[65px] text-[16px] leading-[1.7]">
                    I'm a passionate web developer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.                                     
                  </p>
                  <a href={images.my_cv} download className="inline-flex py-[20px] px-[40px] bg-[#55e6a5] mobile:w-[90%] w-[40%] justify-center items-center gap-[10px] text-[#02050a] font-medium transition-all duration-[0.3s] hover:bg-[#141c27] hover:text-white">
                    Download Cv <HiDownload />
                  </a>

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="99" height="101" viewBox="0 0 99 101" fill="none"><path d="M76.0618 100.003H1.44788C0.675676 100.003 0 99.3278 0 98.5556V23.7487C0 22.9765 0.675676 22.3008 1.44788 22.3008H76.0618C76.834 22.3008 77.5097 22.9765 77.5097 23.7487V98.4591C77.5097 99.3278 76.834 100.003 76.0618 100.003ZM2.89575 97.1077H74.6139V25.1965H2.89575V97.1077Z" fill="#55E6A5"></path><path d="M97.0071 77.6062H22.3932C21.621 77.6062 20.9453 76.9305 20.9453 76.1583V50.4826C20.9453 49.7104 21.621 49.0347 22.3932 49.0347H41.4086C42.1808 49.0347 42.8565 49.7104 42.8565 50.4826C42.8565 51.2548 42.1808 51.9305 41.4086 51.9305H23.8411V74.7104H95.5592V2.89575H23.8411V23.7452C23.8411 24.5174 23.1654 25.1931 22.3932 25.1931C21.621 25.1931 20.9453 24.5174 20.9453 23.7452V1.44788C20.9453 0.675676 21.621 0 22.3932 0H97.0071C97.7793 0 98.455 0.675676 98.455 1.44788V76.1583C98.455 77.027 97.7793 77.6062 97.0071 77.6062Z" fill="#55E6A5"></path><path d="M50.3866 54.8279C47.9735 54.8279 46.043 52.8974 46.043 50.4843C46.043 48.0711 47.9735 46.1406 50.3866 46.1406C52.7997 46.1406 54.7302 48.0711 54.7302 50.4843C54.7302 52.8974 52.7997 54.8279 50.3866 54.8279ZM50.3866 49.0364C49.6144 49.0364 48.9387 49.7121 48.9387 50.4843C48.9387 51.2565 49.6144 51.9321 50.3866 51.9321C51.1588 51.9321 51.8345 51.2565 51.8345 50.4843C51.8345 49.7121 51.1588 49.0364 50.3866 49.0364Z" fill="#55E6A5"></path></svg>
                    </span>
                    <h3 className="text-[20px] font-medium uppercase mb-[20px] text-center tracking-[1px] text-white leading-[1.2]">
                      Website Design
                    </h3>
                    <p className="text-center text-[16px] font-medium leading-[28px] text-[#a2a2a2] mb-2.5">
                      Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui
                    </p>
                </div>
              </div>

              <div>
                <div className="relative px-[40px] pb-[40px] mt-[62px] border-[3px] border-[#191919] border-solid">
                    <span className="block text-center my-0 mx-auto top-[-46px] w-[100px] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="127" height="100" viewBox="0 0 127 100" fill="none"><path d="M63.7291 99.9969C63.2929 99.9969 62.8568 99.7789 62.5296 99.4517L0.484306 33.699C-0.0609081 33.1537 -0.0609081 32.3904 0.26622 31.7362L16.2955 3.82122C16.6226 3.27601 17.1679 2.94888 17.7131 2.94888H26.2184C27.0907 2.94888 27.854 3.71218 27.854 4.58452C27.854 5.45686 27.0907 6.22016 26.2184 6.22016H18.6945L3.75559 32.2814L63.7291 95.9624L123.266 32.2814L106.583 6.11113H42.6839C41.8115 6.11113 41.0482 5.34783 41.0482 4.47549C41.0482 3.60314 41.8115 2.83984 42.6839 2.83984H107.346C107.891 2.83984 108.437 3.16697 108.764 3.60314L126.647 31.5181C127.083 32.1724 126.974 32.9356 126.429 33.4809L64.9286 99.3427C64.6015 99.8879 64.1653 99.9969 63.7291 99.9969Z" fill="#55E6A5"></path><path d="M1.68373 34.2451C0.920431 34.2451 0.266175 33.6999 0.0480891 32.9366C-0.169996 32.0642 0.375217 31.1919 1.24756 30.9738L75.5057 14.2903C76.378 14.0722 77.2504 14.6174 77.4685 15.4897C77.6865 16.3621 77.1413 17.2344 76.269 17.4525L2.01086 34.1361C1.90182 34.1361 1.79277 34.2451 1.68373 34.2451Z" fill="#55E6A5"></path><path d="M125.227 34.2405C125.009 34.2405 124.9 34.2405 124.682 34.1314L42.1369 6.21648C41.2645 5.88936 40.8284 5.01702 41.1555 4.14468C41.4826 3.27234 42.355 2.83617 43.2273 3.1633L125.773 31.0782C126.645 31.4054 127.081 32.2777 126.754 33.1501C126.645 33.8043 125.991 34.2405 125.227 34.2405Z" fill="#55E6A5"></path><path d="M34.3962 9.1596C31.8882 9.1596 29.8164 7.08778 29.8164 4.57979C29.8164 2.07181 31.8882 0 34.3962 0C36.9042 0 38.976 2.07181 38.976 4.57979C38.976 7.08778 36.9042 9.1596 34.3962 9.1596ZM34.3962 3.27128C33.6329 3.27128 33.0877 3.81649 33.0877 4.57979C33.0877 5.34309 33.6329 5.88832 34.3962 5.88832C35.1595 5.88832 35.7047 5.34309 35.7047 4.57979C35.7047 3.92554 35.1595 3.27128 34.3962 3.27128Z" fill="#55E6A5"></path></svg>
                    </span>
                    <h3 className="text-[20px] font-medium uppercase mb-[20px] text-center tracking-[1px] text-white leading-[1.2]">
                      Logo Design
                    </h3>
                    <p className="text-center text-[16px] font-medium leading-[28px] text-[#a2a2a2] mb-2.5">
                      Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui
                    </p>
                </div>
              </div>

              <div>
                <div className="relative px-[40px] pb-[40px] mt-[62px] border-[3px] border-[#191919] border-solid">
                    <span className="block text-center my-0 mx-auto top-[-46px] w-[100px] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="100" viewBox="0 0 117 100" fill="none"><path d="M74.2104 51.7634C73.8691 51.7634 73.414 51.6496 73.0727 51.4221C72.3902 50.8533 72.2764 49.7156 72.8452 49.033L110.502 3.52674H5.38219L43.0386 49.033C43.6074 49.7156 43.4937 50.8533 42.8111 51.4221C42.1285 51.9909 40.9908 51.8771 40.422 51.1945L0.490267 2.84414C0.0352047 2.38908 0.0352049 1.59271 0.262736 1.02388C0.490268 0.455056 1.17286 0 1.85546 0H114.37C115.052 0 115.621 0.34129 115.962 1.02388C116.19 1.59271 116.19 2.27531 115.735 2.84414L75.6894 51.0808C75.2343 51.5358 74.7792 51.7634 74.2104 51.7634Z" fill="#55E6A5"></path><path d="M58.0566 71.3299C57.6016 71.3299 57.0327 71.1024 56.6914 70.7611L44.5185 56.0853C43.9497 55.4027 44.0634 54.2651 44.746 53.6962C45.4286 53.1274 46.5663 53.2412 47.1351 53.9238L57.9428 67.0068L68.5231 54.2651C69.0919 53.5825 70.2295 53.4687 70.9121 54.0375C71.5947 54.6064 71.7085 55.744 71.1397 56.4266L59.308 70.7611C58.9667 71.1024 58.5117 71.3299 58.0566 71.3299Z" fill="#55E6A5"></path><path d="M114.256 99.9957H1.74217C1.05958 99.9957 0.490752 99.6544 0.149455 98.9719C-0.0780763 98.403 -0.0780765 97.7204 0.376986 97.1516L56.691 29.3473C57.3736 28.5509 58.625 28.5509 59.3076 29.3473L115.508 97.2654C115.963 97.7204 115.963 98.5168 115.735 99.0856C115.508 99.6544 114.939 99.9957 114.256 99.9957ZM5.38267 96.5827H110.616L58.0562 33.1015L5.38267 96.5827Z" fill="#55E6A5"></path><path d="M58.0561 26.7355C57.146 26.7355 56.3496 25.9392 56.3496 25.0291V19.9096C56.3496 18.9995 57.146 18.2031 58.0561 18.2031C58.9662 18.2031 59.7626 18.9995 59.7626 19.9096V25.0291C59.7626 25.9392 58.9662 26.7355 58.0561 26.7355Z" fill="#55E6A5"></path><path d="M58.054 84.4156C55.3237 84.4156 53.1621 82.2541 53.1621 79.6375C53.1621 77.0209 55.3237 74.8594 58.054 74.8594C60.7844 74.8594 62.946 77.0209 62.946 79.6375C62.946 82.3679 60.7844 84.4156 58.054 84.4156ZM58.054 78.3861C57.2577 78.3861 56.5751 78.9549 56.5751 79.7513C56.5751 80.5476 57.2577 81.1165 58.054 81.1165C58.8504 81.1165 59.533 80.5476 59.533 79.7513C59.533 78.9549 58.8504 78.3861 58.054 78.3861Z" fill="#55E6A5"></path></svg>
                    </span>
                    <h3 className="text-[20px] font-medium uppercase mb-[20px] text-center tracking-[1px] text-white leading-[1.2]">
                      Apps Development
                    </h3>
                    <p className="text-center text-[16px] font-medium leading-[28px] text-[#a2a2a2] mb-2.5">
                      Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui
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
                    Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione                                        
                  </p>
                  <a href={images.my_cv} download className="inline-flex py-[20px] px-[40px] bg-[#55e6a5] justify-center items-center gap-[10px] text-[#02050a] font-medium transition-all duration-[0.3s] hover:bg-[#141c27] hover:text-white">
                    Download Cv <HiDownload />
                  </a>
                </div>
              </div>

              {/* <div>
                <div data-aos="fade-left" className="about-img">
                  <img className="h-auto w-full max-w-full border-none rounded-none" src={images.greybg} alt="" />
                  <div className="bg-[#232323] py-[15px] px-[30px] inline-flex flex-wrap justify-center items-center relative top-[-45px] left-[50px]">
                    <i className="w-[65px] bg-[#fff1] leading-[65px] rounded-[50%] text-[40px] mr-[10px] h-[65px] flex items-center justify-center "><GrPieChart /></i>
                    <div>
                      <h4 className="text-[16px] text-white font-semibold ">Daily Activity</h4>
                      <p className="text-[16px] font-normal leading-[1.7] text-[#a2a2a2] mb-2.5">Loream is ispam</p>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </section>

        <section className="pt-[135px] pb-[120px] mobile:pt-[40px] mobile:pb-[80px]">
          <div className="container-sample">
            
            <div className="grid grid-cols-2">

              <div></div>

              <div></div>

            </div>
            
          </div>
        </section>

      </div>   
    );
}
 
export default Home;

// fade-right