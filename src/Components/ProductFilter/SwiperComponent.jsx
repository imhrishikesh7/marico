import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductFilter.css";

const countries = [
  {
    name: 'India',
    bg: "rgb(203, 209, 230, 0.5)",
    svg: "/prod-svg/India@2x.png",
    products: [
      { name: 'Coconut Oils', image: './Merico Products/India/Asset 1@2x.png' },
      { name: 'Super Premium Refined Edible Oils', image: './Merico Products/India/Asset 2@2x.png' },
      { name: 'Foods', image: './Merico Products/India/Asset 3@2x.png' },
      { name: 'Value-Added Hair Oils', image: './Merico Products/India/Asset 4@2x.png' },
      { name: 'Premium Personal Care', image: './Merico Products/India/Asset 5@2x.png' },
      { name: 'Digital First Premium Personal Care', image: './Merico Products/India/Asset 6@2x.png' },
    ],
  },
  {
    name: 'Bangladesh',
    bg: "rgb(245, 208, 213, 0.5)",
    svg: "/prod-svg/Bangladesh@2x.png",
    products: [
      { name: 'Coconut Oil', image: './Merico Products/Bangladesh/Asset 1@2x.png' },
      { name: 'Hair Colours, Serums and Shampoos', image: './Merico Products/Bangladesh/Asset 2@2x.png' },
      { name: 'Value Added Hair Oils', image: './Merico Products/Bangladesh/Asset 3@2x.png' },
      { name: 'Skin Care', image: './Merico Products/Bangladesh/Asset 4@2x.png' },
      { name: 'Male Grooming & Styling', image: './Merico Products/Bangladesh/Asset 5@2x.png' },
      { name: 'Baby Care', image: './Merico Products/Bangladesh/Asset 6@2x.png' },
      { name: 'Hygiene', image: './Merico Products/Bangladesh/Asset 7@2x.png' },
      { name: 'Edible Oil', image: './Merico Products/Bangladesh/Asset 8@2x.png' },
      { name: 'Foods', image: './Merico Products/Bangladesh/Asset 9@2x.png' },
    ],
  },
  {
    name: 'Vietnam',
    bg: "rgb(248, 188, 137, 0.5)",
    svg: "/prod-svg/Vietnam@2x.png",
    products: [
      { name: 'Male Grooming', image: './Merico Products/Vietnam/Asset 1@2x.png' },
      { name: 'Foods', image: './Merico Products/Vietnam/Asset 2@2x.png' },
      { name: 'Female Personal Care', image: './Merico Products/Vietnam/Asset 3@2x.png' },
    ],
  },
  {
    name: 'South Africa',
    bg: "rgb(200, 226, 155, 0.5)",
    svg: "/prod-svg/Africa@2x.png",
    products: [
      { name: 'Hair Care', image: './Merico Products/Africa/Asset 4@2x.png' },
      { name: 'Health Care', image: './Merico Products/Africa/Asset 6@2x.png' },
      { name: 'Baby Care', image: './Merico Products/Africa/Asset 5@2x.png' },
    ],
  },
  {
    name: 'Middle East',
    bg: "rgb(189, 222, 244, 0.5)",
    svg: "/prod-svg/Middle East@2x.png",
    products: [
      { name: 'Coconut Oil', image: './Merico Products/Middle East/Asset 1@2x.png' },
      { name: 'Foods', image: './Merico Products/Middle East/Asset 2@2x.png' },
      { name: 'Hair Care', image: './Merico Products/Middle East/Asset 3@2x.png' },
    ],
  },
  {
    name: 'Egypt',
    bg: "rgb(250, 209, 202, 0.5)",
    svg: "/prod-svg/Egypt@2x.png",
    products: [
      { name: 'Hair Care', image: './Merico Products/Egypt/Asset 1@2x.png' },
      { name: 'Male Grooming', image: './Merico Products/Egypt/Asset 2@2x.png' },
    ],
  },
];

const SwiperComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleTabClick = (country) => {
    setSelectedCountry(country);
  };

  const images = selectedCountry.products.map(product => ({
    original: product.image,
    thumbnail: product.image,
    description: product.name,
  }));

  const renderImageWithDescription = (item) => (
    <div className="image-gallery-item" style={{ backgroundColor: selectedCountry.bg }}>
      <img src={item.original} alt={item.description} className="image-gallery-image" />
      <div className="image-description">
        <p>{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="products-frame">
      <h2 className="my-4">PRODUCT SHOWCASE</h2>
      <div className="tabs">
        {countries.map(country => (
          <button
            key={country.name}
            className={`tab ${selectedCountry.name === country.name ? 'active' : ''}`}
            onClick={() => handleTabClick(country)}
          >
            {country.name}
          </button>
        ))}
      </div>
      <div className="country-svg-container">
        <img src={selectedCountry.svg} alt={selectedCountry.name} className="country-svg" />
      </div>
      <ImageGallery items={images} renderItem={renderImageWithDescription} />
    </div>
  );
};

export default SwiperComponent;
