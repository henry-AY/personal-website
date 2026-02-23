import { useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function MagneticElement({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        // Get the exact coordinates of the element on the screen
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        // Find the absolute center of the element
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // Move the element by 20% of the distance to the mouse (the magnetic pull)
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        // Snap back to zero when the mouse leaves
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    
    return (
        <motion.div
            style={{ position: "relative", display: "flex" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 15, 
                mass: 0.1 
            }}
        >
            {children}
        </motion.div>
    );
}