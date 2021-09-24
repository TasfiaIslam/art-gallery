import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ProductItem = () => {
  const galleryImg = useRef([]);
  galleryImg.current = [];
  const addToGalleryImgRefs = (el) => {
    if (el && !galleryImg.current.includes(el)) {
      galleryImg.current.push(el);
    }
  };

  useEffect(() => {
    galleryImg.current.forEach((el, index) => {
      gsap.set(el, { transformOrigin: 'right center', force3D: true }); // make the right edge "stick" to the scroll bar. force3D: true improves performance
      let clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
      ScrollTrigger.create({
        trigger: el,
        onUpdate: (self) => {
          const velocity = clamp(Math.round(self.getVelocity() / 300));
          gsap.to(el, {
            skew: 0,
            skewY: velocity,
            ease: 'power3',
            duration: 0.8,
            overwrite: true,
          });
        },
      });
    });
  }, []);
  const products = useSelector((state) => state.allProducts.products);

  const showProducts = products.map((product) => {
    const { id, title, place_of_origin, thumbnail } = product;
    return (
      <div
        key={id}
        className="rounded border-2 border-gray-200 p-4"
        ref={addToGalleryImgRefs}
      >
        <Link to={`product/${id}`}>
          {thumbnail && (
            <img
              src={thumbnail.lqip}
              alt={title}
              className="w-full h-64 object-cover mb-4"
            />
          )}
          <p className="text-xl">{title}</p>
          <p className="text-gray-600">Place of origin - {place_of_origin}</p>
        </Link>
      </div>
    );
  });
  return (
    <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3 font-mono">
      {showProducts}
    </div>
  );
};

export default ProductItem;
