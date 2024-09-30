import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const subLinks = {
    'Corporate Overview': [
      { text: 'About Marico', url: '/about-marico' },
      { text: 'Global footprint', url: '/global-footprint' },
      { text: 'Chairman’s message', url: '/chairmans-message' },
      { text: 'MD & CEOs message', url: '/message-from-md-ceo' },
      { text: 'Key performance indicators', url: '/key-performance' },
      { text: 'Product Showcase', url: '/product-showcase' },
      { text: 'Materiality', url: '/materiality' },
      { text: 'Business model', url: '/business-model' },
      { text: 'Risk management', url: '/risk-management' },
      { text: 'Strategy', url: '/strategy' },
      { text: 'Board of Directors', url: '/board-of-directors' },
      { text: 'Management Team', url: '/management-team' },
      { text: 'Stakeholder engagement', url: '/stakeholder-engagement' },
      { text: 'Investors', url: '/investors' },
      { text: 'Consumers', url: '/consumers' },
      { text: 'People', url: '/people' },
      { text: 'Value-chain partners', url: '/value-chain-partners' },
      { text: 'Communities', url: '/communities' },
      { text: 'Environment', url: '/environment' },
      { text: 'Corporate information', url: '/corporate-information' },
      { text: 'Awards and accolades', url: '/awards-accolades' },
    ],
  // }
  // const subLinks2 = {

    'Statutory Reports': [
      { text: 'Management Discussion and Analysis', url: '/docs/02 Marico MDA 17 07 2024.pdf',   },
      { text: 'Business Responsibility and Sustainability Report', url: '/docs/03 Marico Limited BRSR 17 07 2024.pdf' },
      { text: 'Board’s Report', url: '/docs/04 Marico Limited BR & CG 17.07.2024.pdf' },
    ],
    'Financial Statements': [
      { text: 'Consolidated', url: '/docs/05 Marico Limited CFS 17.07.2024.pdf' },
      { text: 'Standalone', url: '/docs/06 Marico Limited S.F.S 17.07.2024.pdf' },
    ],
  };

 
  const handleClick = (item) => {
    if (subLinks[item] && subLinks[item].length > 0) {
      // Toggle sublinks if they exist
      setActiveItem(activeItem === item ? null : item);
    } else {
      // Close navigation background if no sublinks
      const naviToggle = document.getElementById('navi-toggle');
      if (naviToggle) {
        naviToggle.checked = false;
      }
      setActiveItem(null);
    }
  };

  const handleSubLinkClick = (url) => {
    if (url) {
      
      // Check if the URL ends with .pdf
      if (url.endsWith('.pdf')) {
        window.open(url, '_blank'); // Open PDF in a new tab
      } else {
        navigate(url); // Use navigate for redirection in the same tab
      }
      
      setActiveItem(null); // Collapse navigation on sub-link click
      const naviToggle = document.getElementById('navi-toggle');
      if (naviToggle) {
        naviToggle.checked = false; // Close navigation background
      }
    }
  };
  

  const handleNaviToggleClick = () => {
    setActiveItem(null); // Close sub-links when navigation is toggled
  };

  const getBoxClass = () => {
    const subLinkCount = Array.isArray(subLinks[activeItem]) ? subLinks[activeItem].length : 0;
    if (subLinkCount > 15) return 'three-columns';
    if (subLinkCount > 10) return 'two-columns';
    return 'single-column';
  };

  const filteredSubLinks = () => {
    return subLinks[activeItem]?.filter(link => link.text !== null) || [];
  };

  return (
    <div className="navigation-background ">
      <Link to="/" className="marico-logo">
      <img src="./homepage/logo.svg"  alt="Logo" />
      </Link>
      <div className="navigation">
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
          onClick={handleNaviToggleClick}
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
          </span>
        </label>
        <div className="navigation__background bg-gradient-to-r from-white to-[#a4cf57]">&nbsp;</div>
        <nav className="navigation__nav nav-large">
          <ul className="navigation__list">
            <li
              className="navigation__item"
              onClick={() => handleClick('Home')}
            >
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </li>
            {Object.keys(subLinks).map((item) => (
              <li
                key={item}
                className="navigation__item"
                onClick={() => handleClick(item)}
              >
                <Link to="#" className="navigation__link">
                  {item}
                </Link>
              </li>
            ))}
            <li
              className="navigation__item"
              onClick={() => handleClick('Performance Trends')}
            >
              <Link to="/docs/performance trandes.pdf" target='_blank' className="navigation__link">
                Performance Trends
              </Link>
            </li>
            <li
              className="navigation__item"
              onClick={() => handleClick('GRI Index')}
            >
              <Link to="/docs/GRI Index.pdf" target='_blank' className="navigation__link">
                GRI Index
              </Link>
            </li>
            <li
              className="navigation__item"
              onClick={() => handleClick("Ten years' financial highlights")}
            >
              <Link to="/docs/10 years highlight.pdf" target='_blank' className="navigation__link">
                Ten years' financial highlights
              </Link>
            </li>
            <li
              className="navigation__item"
              onClick={() => handleClick("Ten years' financial highlights")}
            >
              <Link to="/docs/Marico_IAR 2023-24_02.08.24.pdf" target='_blank' className="navigation__link">
                Download Full Report
              </Link>
            </li>
          </ul>
          <AnimatePresence>
            {activeItem && Array.isArray(subLinks[activeItem]) && filteredSubLinks().length > 0 && (
              <motion.div
                key={activeItem}
                className={`sub-links-box ${getBoxClass()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                >
                  {filteredSubLinks().map((subLink, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, transform: 'translateY(20px)' }}
                      animate={{ opacity: 1, transform: 'translateY(0)' }}
                      exit={{ opacity: 0, transform: 'translateY(20px)' }}
                      transition={{ delay: index * 0.1, duration: 0.1 }}
                    >
                      <Link
                        to={subLink.url}
                        onClick={() => handleSubLinkClick(subLink.url)} // Use handleSubLinkClick for redirection
                        style={{ display: subLink.text === null ? 'none' : 'block' }} // Hide text if null
                      >
                        {subLink.text || ' '}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        <nav className="navigation__nav nav-responsive">
          <ul className="navigation__list">
            <li className="navigation__item" onClick={() => handleClick('Home')}>
              <Link to="/" className="navigation__link">Home</Link>
            </li>
            {Object.keys(subLinks).map((item) => (
              <li
                key={item}
                className={`navigation__item ${activeItem === item ? 'active' : ''}`}
                onClick={() => handleClick(item)}
              >
                <Link to="#" className="navigation__link">{item}</Link>
                <AnimatePresence>
                  {activeItem === item && (
                    <motion.ul
                      className={`sub-links ${getBoxClass()}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredSubLinks().map((subLink, index) => (
                        <li key={index} className="sub-link-item">
                          <Link
                            to={subLink.url}
                            onClick={() => handleSubLinkClick(subLink.url)} // Use handleSubLinkClick for redirection
                          >
                            {subLink.text || ' '}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
            <li className="navigation__item" onClick={() => handleClick('Performance Trends')}>
              <Link to="/performance-trends" className="navigation__link">Performance Trends</Link>
            </li>
            <li className="navigation__item" onClick={() => handleClick('GRI Index')}>
              <Link to="/gri-index" className="navigation__link">GRI Index</Link>
            </li>
            <li className="navigation__item" onClick={() => handleClick("Ten years' financial highlights")}>
              <Link to="/ten-years-financial-highlights" className="navigation__link">Ten years' financial highlights</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
