import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const linkRef = useRef([]);
  linkRef.current = [];
  const addToLinkRefs = (el) => {
    if (el && !linkRef.current.includes(el)) {
      linkRef.current.push(el);
    }
  };
  // onMouseOver={(e) => hoverLink(e)}
  // ref={addToLinkRefs}
  // Hover on the link
  // const hoverLink = (e) => {
  //   console.log(e.target);
  //   linkRef.current.forEach((el, index) => {
  //     if (e.target.name === el.name) {
  //       gsap.fromTo(
  //         el,
  //         {
  //           // borderBottom: '2px #333  solid',
  //           color: '#333',
  //           ease: 'Power3.easeOut',
  //         },
  //         {
  //           duration: 1,
  //           // borderBottom: '2px #F4E274  solid',
  //           color: '#F4E274',
  //           ease: 'Power3.easeOut',
  //         }
  //       );
  //     }
  //   });
  // };

  // useEffect(() => {
  //   hoverLink();
  // }, []);

  return (
    <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
      <div className="flex justify-between w-8/12 mx-auto">
        <div className="text-2xl font-semibold font-mono">Art Gallery</div>
        <div className="font-mono text-lg flex flex-row space-x-4">
          <div className="">
            <a className="cursor-pointer" name="art">
              <span className="header-link-item">Art</span>
            </a>
          </div>
          <div className="">
            <a name="design" className="cursor-pointer">
              <span className="header-link-item ">Design</span>
            </a>
          </div>
          <div className="">
            <a name="print" className="cursor-pointer">
              <span className="header-link-item ">Print</span>
            </a>
          </div>
          <div className="">
            <a name="discover" className="cursor-pointer">
              <span className="header-link-item ">Discover</span>
            </a>
          </div>
          <div className="">
            <a name="collection" className="cursor-pointer">
              <span className="header-link-item ">Collections</span>
            </a>
          </div>
          <div className="">
            <a name="consultancy" className="cursor-pointer">
              <span className="header-link-item ">Art Consultancy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
