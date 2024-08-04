import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from 'framer-motion';
import './ProductFilter.css'; // Import the custom CSS file

const ProductFilter = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const countries = [
    {
      name: 'India',
      bg: "#cbd1e6",
      bg2: "#16325f",
      products: [
        { name: 'Coconut Oils', image: './Merico Products/India/Asset 1@2x.png', size: 's' },
        { name: 'Super Premium Refined Edible Oils', image: './Merico Products/India/Asset 2@2x.png' },
        { name: 'Foods', image: './Merico Products/India/Asset 3@2x.png', size: 'xxl' },
        { name: 'Value-Added Hair Oils', image: './Merico Products/India/Asset 4@2x.png' },
        { name: 'Premium Personal Care', image: './Merico Products/India/Asset 5@2x.png' },
        { name: 'Digital First Premium Personal Care', image: './Merico Products/India/Asset 6@2x.png', size: 'xxl' },
      ],
    },
    {
      name: 'Bangladesh',
      bg: "#f5d0d5",
      bg2: "#4e1921",
      products: [
        { name: 'Coconut Oil', image: './Merico Products/Bangladesh/Asset 1@2x.png', size: 's' },
        { name: 'Hair Colours, Serums and Shampoos', image: './Merico Products/Bangladesh/Asset 2@2x.png' },
        { name: 'Value Added Hair Oils', image: './Merico Products/Bangladesh/Asset 3@2x.png' },
        { name: 'Skin Care', image: './Merico Products/Bangladesh/Asset 4@2x.png' },
        { name: 'Male Grooming & Styling', image: './Merico Products/Bangladesh/Asset 5@2x.png' },
        { name: 'Baby Care', image: './Merico Products/Bangladesh/Asset 6@2x.png' },
        { name: 'Hygiene', image: './Merico Products/Bangladesh/Asset 7@2x.png', size: 's' },
        { name: 'Edible Oil', image: './Merico Products/Bangladesh/Asset 8@2x.png', size: 's' },
        { name: 'Foods', image: './Merico Products/Bangladesh/Asset 9@2x.png', size: 's' },
      ],
    },
    {
      name: 'Vietnam',
      bg: "#f8bc89",
      bg2: "#543213",
      products: [
        { name: 'Male Grooming', image: './Merico Products/Vietnam/Asset 1@2x.png' },
        { name: 'Foods', image: './Merico Products/Vietnam/Asset 2@2x.png' },
        { name: 'Female Personal Care', image: './Merico Products/Vietnam/Asset 3@2x.png', size: 'xxl' },
      ],
    },
    {
      name: 'South Africa',
      bg: "#c8e29b",
      bg2: "#2d3e0e",
      products: [
        { name: 'Hair Care', image: './Merico Products/Africa/Asset 4@2x.png' },
        { name: 'Health Care', image: './Merico Products/Africa/Asset 6@2x.png' },
        { name: 'Baby Care', image: './Merico Products/Africa/Asset 5@2x.png', size: 'xxl' },
      ],
    },
    {
      name: 'Middle East',
      bg: "#bddef4",
      bg2: "#0f3147",
      products: [
        { name: 'Coconut Oil', image: './Merico Products/Middle East/Asset 1@2x.png', size: 's' },
        { name: 'Foods', image: './Merico Products/Middle East/Asset 2@2x.png' },
        { name: 'Hair Care', image: './Merico Products/Middle East/Asset 3@2x.png', size: 'xxl' },
      ],
    },
    {
      name: 'Egypt',
      bg: "#fad1ca",
      bg2: "#42160e",
      products: [
        { name: 'Hair Care', image: './Merico Products/Egypt/Asset 1@2x.png' },
        { name: 'Male Grooming', image: './Merico Products/Egypt/Asset 2@2x.png' },
      ],
    },
    // Additional countries and products...
  ];

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  const getWaveColor = (countryBg2) => {
    // You can customize this function to set different colors based on countryBg2 or other logic
    return countryBg2;
  };


  return (
    <div className="product-filter-container" style={{ backgroundColor: countries[selectedTab]?.bg2 || 'transparent' }}>
    <div className="wave-top" style={{ fill: getWaveColor(countries[selectedTab]?.bg2) }}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none">
    <path d="M0,60 Q150,0 300,60 T600,60 T900,60 T1200,60 L1200,150 L0,150 Z" />
  </svg>
</div>


<div className="wave-bottom" style={{ fill: getWaveColor(countries[selectedTab]?.bg2) }}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none">
    <path d="M0,60 Q150,0 300,60 T600,60 T900,60 T1200,60 L1200,150 L0,150 Z" />
  </svg>
</div>



      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className="custom-tab-list">
          {countries.map((country, index) => (
            <Tab key={index} className={`custom-tab ${selectedTab === index ? 'custom-tab--selected' : ''}`}>
              {country.name}
            </Tab>
          ))}
        </TabList>

        {countries.map((country, index) => (
          <TabPanel key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="product-list"
              style={{backgroundColor: country.bg}}
            >
              {country.products.map((product, idx) => (
                <motion.div
                  key={idx}
                  className={`product-item ${product.size || ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }} // Stagger effect
                >
                  <img src={product.image} alt={product.name} className="product-image" />
                  <p className='product-name'>{product.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabPanel>
        ))}
      </Tabs>

    </div>
  );
};

export default ProductFilter;
