import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroTextRef = useRef([]);
  heroTextRef.current = [];

  const rightImgRef = useRef();
  const rightImgDivRef = useRef();

  const leftImgRef = useRef();
  const leftImgDivRef = useRef();

  const addToHeroTextRefs = (el) => {
    if (el && !heroTextRef.current.includes(el)) {
      heroTextRef.current.push(el);
    }
  };

  const animateRightImg = () => {
    gsap.from(rightImgRef.current, {
      opacity: 0,
      duration: 1,
      y: 30,
      x: -50,
      delay: 0.5,
    });
    gsap.from(rightImgDivRef.current, {
      opacity: 0,
      delay: 0.2,
      duration: 1,
      backgroundPosition: '200px 0px',
    });
  };

  const animateLeftImg = () => {
    gsap.from(leftImgRef.current, {
      opacity: 0,
      duration: 1,
      y: -30,
      x: 50,
      delay: 1.4,
    });
    gsap.from(leftImgDivRef.current, {
      opacity: 0,
      delay: 1.1,
      duration: 1,
      backgroundPosition: '200px 0px',
    });
  };

  const animateText = () => {
    heroTextRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        duration: 1,
        y: -20,
        stagger: 0.6,
      });
    });
  };

  useEffect(() => {
    animateText();
    animateRightImg();
    animateLeftImg();
  });

  return (
    <>
      <div className="w-8/12 mx-auto flex justify-between space-x-4 py-20">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-bold text-3xl pb-4" ref={addToHeroTextRefs}>
            Trending.Arts.For.You
          </h1>
          <p ref={addToHeroTextRefs}>
            Check out all the latest arts from all around the world.
          </p>
        </div>
        <div className="w-1/2" ref={rightImgDivRef}>
          <img
            ref={rightImgRef}
            className="hero-image w-full h-full  object-cover"
            src="https://image.freepik.com/free-photo/venice-canal-with-tourist-gondola_49537-57.jpg"
            alt="hero"
          />
        </div>
      </div>
      <div className="w-8/12 mx-auto flex justify-between space-x-4 pb-20">
        <div className="w-1/2" ref={leftImgDivRef}>
          <img
            ref={leftImgRef}
            className="hero-image w-full h-full  object-cover"
            src="https://image.freepik.com/free-photo/graffiti-children-bicycle_1122-2206.jpg"
            alt="hero"
          />
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <h1 className="font-bold text-3xl pb-4" ref={addToHeroTextRefs}>
            Trending.Arts.For.You
          </h1>
          <p ref={addToHeroTextRefs}>
            Check out all the latest arts from all around the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
