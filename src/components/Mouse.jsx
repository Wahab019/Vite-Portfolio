import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Mouse = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
    const [cursorVariant, setCursorVariant] = useState("default");
    
    
    useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
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
          mixBlendMode: "difference"
        }
    }
    
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return ( 
        <div>
            <div>
                <motion.div
                className='bg-transparent h-[30px] w-[30px] rounded-[50%] fixed top-0 left-0 pointer-events-none'
                variants={variants}
                animate={cursorVariant}
                />
            </div> 
           
        </div>
     );
}
 
export default Mouse;