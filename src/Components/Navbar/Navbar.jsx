import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTimes, faChevronRight, faChevronLeft, faBars, faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const openLevel = (event) => {
        const $openLevel = event.currentTarget;
        const $navLevel = $openLevel.nextSibling;
        $navLevel.classList.add('isOpen');
    };

    const closeLevel = (event) => {
        const $closeLevel = event.currentTarget;
        const $navLevel = $closeLevel.closest('.js-pushNavLevel');
        $navLevel.classList.remove('isOpen');
    };

    const closePushNav = () => {
        setIsOpen(false);
        document.body.classList.remove('pushNavIsOpen');
    };

    const handleMenuItemClick = () => {
        closePushNav();
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navnav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="wrapper">
                    <Link to={"/"} className="logo">
                        <img src="./homepage/logo.svg" alt="Logo" />
                    </Link>
                    <div className="burger js-menuToggle" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} size="2x" color='black' />
                    </div>
                </div>
                <div className="nav-background" />
                <ul className={`pushNav js-topPushNav ${isOpen ? 'isOpen' : ''}`}>
                    <li className="closeLevel js-closeLevelTop hdg" onClick={closePushNav}>
                        <FontAwesomeIcon icon={faTimes} /> Close
                    </li>
                    <li>
                        <Link to="/" onClick={handleMenuItemClick}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                    {/* Other Links */}
                    <li>
                        <div className="openLevel js-openLevel text-light" onClick={openLevel}>
                            Statutory Reports <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <ul className="pushNav pushNav_level js-pushNavLevel">
                            <li className="closeLevel js-closeLevel hdg" onClick={closeLevel}>
                                <FontAwesomeIcon icon={faChevronLeft} /> Go Back
                            </li>
                            <li>
                                <Link to="./docs/Abans Holdings AR 2023-24 Revised-swRY0nk3-16-20.pdf" target='_blank' onClick={handleMenuItemClick}>
                                    Management Discussion & Analysis Report
                                </Link>
                            </li>
                            {/* Other Nested Links */}
                        </ul>
                    </li>
                    {/* Other Sections */}
                    <li>
                        <Link className="openLevel js-openLevel text-light" to={"./docs/Abans Holdings AR 2023-24 Revised-swRY0nk3.pdf"} target='_blank' >
                            Download Full Report <FontAwesomeIcon icon={faCloudDownload} />
                        </Link>
                    </li>
                </ul>
            </nav>
            <span className="screen" onClick={closePushNav}></span>
        </>
    );
};

export default Navbar;
