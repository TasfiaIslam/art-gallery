import React, {useRef, useEffect} from 'react';
import { gsap } from "gsap";

const Hero = () => {
  const heroTextRef = useRef();
  const imgRef = useRef();
  const imgDivRef = useRef();
  
  useEffect(()=>{
    gsap.from(heroTextRef.current, { opacity: 0, duration: 1, y: -20, stagger: 0.6});
    gsap.from(imgRef.current, { opacity: 0, duration: 1, y: 30, delay: 1.4});
    gsap.from(imgDivRef.current, { opacity: 0, delay: 1.1, duration: 1, backgroundPosition: '200px 0px' });
  })

  return (
    <div className="w-8/12 mx-auto flex justify-between py-20">
      <div className="w-1/2 flex flex-col" >
        <h1 className="font-bold text-3xl pb-4" ref={heroTextRef}>Trending.Arts.For.You</h1>
        <p ref={heroTextRef}>Check out all the latest arts from all around the world.</p>
      </div>
      <div className="w-1/2" ref={imgDivRef}>
        <img  ref={imgRef} className="hero-image w-full h-full  object-cover" src="https://cdn.mos.cms.futurecdn.net/jbCNvTM4gwr2qV8X8fW3ZB-480-80.png" alt="hero"/>
      </div>
    </div>
  )
}

export default Hero;
