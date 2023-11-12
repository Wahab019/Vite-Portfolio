import React from 'react';

import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { useEffect, useState } from 'react';


import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';

import './App.css';


const Layout = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>

      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {

  

    // const [mousePosition, setMousePosition] = useState({
    //     x: 0,
    //     y: 0
    // });
    // const [cursorVariant, setCursorVariant] = useState("default");
    
    
    // useEffect(() => {
    //     const mouseMove = e => {
    //       setMousePosition({
    //         x: e.clientX,
    //         y: e.clientY
    //       })
    //     }
    
    //     window.addEventListener("mousemove", mouseMove);
    
    //     return () => {
    //       window.removeEventListener("mousemove", mouseMove);
    //     }
    // }, []);
    
    // const variants = {
    //     default: {
    //       x: mousePosition.x - 15,
    //       y: mousePosition.y - 15,
    //       border: "2px solid white",
    //     },
    //     text: {
    //       height: 90,
    //       width: 90,
    //       x: mousePosition.x - 45,
    //       y: mousePosition.y - 45,
    //       backgroundColor: "#C0C0C07F",
    //       mixBlendMode: "difference"
    //     }
    // }
    
    // const textEnter = () => setCursorVariant("text");
    // const textLeave = () => setCursorVariant("default");

  return (
    <>
        {/* <motion.div
          className='bg-transparent h-[30px] w-[30px] z-50 rounded-[50%] fixed top-0 left-0 pointer-events-none'
          variants={variants}
          animate={cursorVariant}
        /> */}
      
    
        <RouterProvider router={router} />
   
  
    </>
  );
}

export default App;

    



 
 