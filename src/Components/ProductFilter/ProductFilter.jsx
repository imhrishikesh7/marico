import React, { useState } from 'react';
import Slider from 'react-slick';
import "./ProductFilter.css"

const CountryProducts = () => {
  const countries = [
    {
      name: 'India',
      // bg: "#cbd1e6",
      // bg2: "#16325f",
      // svg: "/prod-svg/India@2x.png",
      products: [
        { name: 'Coconut Oils', image: './Merico Products/India/Asset 1@2x.png'  },
        { name: 'Super Premium Refined Edible Oils', image: './Merico Products/India/Asset 2@2x.png' },
        { name: 'Foods', image: './Merico Products/India/Asset 3@2x.png'},
        { name: 'Value-Added Hair Oils', image: './Merico Products/India/Asset 4@2x.png' },
        { name: 'Premium Personal Care', image: './Merico Products/India/Asset 5@2x.png' },
        { name: 'Digital First Premium Personal Care', image: './Merico Products/India/Asset 6@2x.png' },
      ],
    },
    {
      name: 'Bangladesh',
      // bg: "#f5d0d5",
      // bg2: "#4e1921",
      // svg: "/prod-svg/Bangladesh@2x.png",
      products: [
        { name: 'Coconut Oil', image: './Merico Products/Bangladesh/Asset 1@2x.png'},
        { name: 'Hair Colours, Serums and Shampoos', image: './Merico Products/Bangladesh/Asset 2@2x.png' },
        { name: 'Value Added Hair Oils', image: './Merico Products/Bangladesh/Asset 3@2x.png' },
        { name: 'Skin Care', image: './Merico Products/Bangladesh/Asset 4@2x.png' },
        { name: 'Male Grooming & Styling', image: './Merico Products/Bangladesh/Asset 5@2x.png' },
        { name: 'Baby Care', image: './Merico Products/Bangladesh/Asset 6@2x.png' },
        { name: 'Hygiene', image: './Merico Products/Bangladesh/Asset 7@2x.png'},
        { name: 'Edible Oil', image: './Merico Products/Bangladesh/Asset 8@2x.png'},
        { name: 'Foods', image: './Merico Products/Bangladesh/Asset 9@2x.png'},
      ],
    },
    {
      name: 'Vietnam',
      // bg: "#f8bc89",
      // svg: "/prod-svg/Vietnam@2x.png",
      // bg2: "#543213",
      products: [
        { name: 'Male Grooming', image: './Merico Products/Vietnam/Asset 1@2x.png' },
        { name: 'Foods', image: './Merico Products/Vietnam/Asset 2@2x.png' },
        { name: 'Female Personal Care', image: './Merico Products/Vietnam/Asset 3@2x.png'},
      ],
    },
    {
      name: 'South Africa',
      // bg: "#c8e29b",
      // bg2: "#2d3e0e",
      // svg: "/prod-svg/Africa@2x.png",
      products: [
        { name: 'Hair Care', image: './Merico Products/Africa/Asset 4@2x.png' },
        { name: 'Health Care', image: './Merico Products/Africa/Asset 6@2x.png' },
        { name: 'Baby Care', image: './Merico Products/Africa/Asset 5@2x.png'},
      ],
    },
    {
      name: 'Middle East',
      // bg: "#bddef4",
      // bg2: "#0f3147",
      // svg: "/prod-svg/Middle East@2x.png",
      products: [
        { name: 'Coconut Oil', image: './Merico Products/Middle East/Asset 1@2x.png'},
        { name: 'Foods', image: './Merico Products/Middle East/Asset 2@2x.png' },
        { name: 'Hair Care', image: './Merico Products/Middle East/Asset 3@2x.png'},
      ],
    },
    {
      name: 'Egypt',
      // bg: "#fad1ca",
      // bg2: "#42160e",
      // svg: "/prod-svg/Egypt@2x.png",
      products: [
        { name: 'Hair Care', image: './Merico Products/Egypt/Asset 1@2x.png' },
        { name: 'Male Grooming', image: './Merico Products/Egypt/Asset 2@2x.png' },
      ],
    },
  ];
  

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: false,
  };

  const thumbnailSliderSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: Math.min(selectedCountry.products.length, 4),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className="country-products-container">
      <div className="tabs">
        {countries.map((country) => (
          <button
            key={country.name}
            onClick={() => handleCountryChange(country)}
            style={{
              backgroundColor: selectedCountry.name === country.name ? country.bg2 : country.bg,
            }}
          >
            {country.name}
          </button>
        ))}
      </div>
      <div className="slider-container">
        {/* Main slider for displaying the large image */}
        <Slider {...mainSliderSettings}>
          {selectedCountry.products.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} className="main-image" />
            </div>
          ))}
        </Slider>

        {/* Thumbnail slider for navigation */}
        <Slider {...thumbnailSliderSettings} className="thumbnail-slider">
          {selectedCountry.products.map((product) => (
            <div key={product.name} className="thumbnail-card">
              <img src={product.image} alt={product.name} className="thumbnail-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CountryProducts;
