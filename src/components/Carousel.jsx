import React from "react";
import Slider from "react-slick";

import phenomenalLogo from "../assets/phenomenal.jpg";
import ellekaLogo from "../assets/elleka_Logo.jpg";
import gattimoLogo from "../assets/GattimoHomes_Logo.jpg";
import priimeLogo from "../assets/PriimeFarms_Logo.jpg";

const logos = [
  { src: phenomenalLogo, alt: "Phenomenal Studios" },
  { src: ellekaLogo, alt: "Elleka" },
  { src: gattimoLogo, alt: "Gattimo Homes" },
  { src: priimeLogo, alt: "Priime Farms" },
];

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-10 px-5">
        <h1 className="text-3xl md:text-3xl max-w-2xl text-blue-800 mx-auto mt-5 text-center font-bold mb-4">
          Trusted by startups, brands and organizations across Africa
        </h1>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-4">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-45 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
