import React from 'react';
import { gsap } from "gsap";

const Header = () => {
    // Hover on the link
  const hoverLink = e => {
    gsap.to(e.target, {
      duration: 0.4,
      y: 3,
      skewX: 4,
      ease: "Power2.inOut"
    });
  };
    return (
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
            <div className="flex justify-between w-8/12 mx-auto">
                <div className="text-2xl font-semibold font-mono">
                    Art Gallery
                </div>
                <div className="font-mono text-lg">
                    <a className="mr-12 hover:text-yellow-400 hover:underline" onMouseOver={hoverLink}>Art</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline" onMouseOver={hoverLink}>Design</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline" onMouseOver={hoverLink}>Print</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline" onMouseOver={hoverLink}>Discover</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline" onMouseOver={hoverLink}>Collections</a>
                    <a className="hover:text-yellow-400 hover:underline" onMouseOver={hoverLink}>Art Consultancy</a>
                </div>
            </div>
        </div>
    )
}

export default Header
