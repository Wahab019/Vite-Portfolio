import React from 'react';

import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";



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

  

    

  return (
    <>
      
      
    
        <RouterProvider router={router} />
   
  
    </>
  );
}

export default App;

    



 
 