import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Capitals.css"
import Headings from '../Headings/Headings';
import LinkBtn from '../LinkBtn/LinkBtn';


// Registering the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Capitals = () => {
    // gsap context
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Selecting all horizontal sections
            const horizontalSections = gsap.utils.toArray(".horizontal-section");

            // Applying horizontal scroll animation
            gsap.to(horizontalSections, {
                xPercent: -100 * (horizontalSections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (horizontalSections.length - 1),
                    end: () => "+=" + document.querySelector("#container").offsetWidth,
                },
            });
        });

        // Cleanup GSAP context
        return () => ctx.revert();
    }, []);

    return (
        <main id="container">
            {/* Section 01 */}

            <section className="horizontal-section">
                <div className='horizontal-content-wrap'>
                <div className='border-start pl-5 horizontal-content'>
                    <h3>INVESTORS</h3>
                    <Headings
                        he1={"Assurance of Value"}
                        he2={"Creation"}
                        clr2={"#fff"}
                        clr={"#fff"}
                    />
                    <div className='cap-values my-4 d-flex'>
                        <div className='border-end pr-5'>
                            <h3>38.8%</h3>
                            <p>Return on net worth</p>
                        </div>
                        <div className='ml-5'>
                            <h3>11.5</h3>
                            <p>EPS</p>
                        </div>
                    </div>
                    <LinkBtn />
                </div>
                </div>
                {/* <h1 className="heading">Horizontal Scroll</h1> */}
            </section>

            {/* Section 02 */}
            <section className="horizontal-section">
            <div className='horizontal-content-wrap'>
                <div className='border-start pl-5 horizontal-content'>
                    <h3>CONSUMERS</h3>
                    <Headings
                        he1={"Prioritising consumer "}
                        he2={"expectations"}
                        clr2={"#fff"}
                        clr={"#fff"}
                    />
                    <div className='cap-values my-4 d-flex'>
                        <div className='border-end pr-5'>
                            <h3>20+</h3>
                            <p>Brands owned by <br /> Marico India</p>
                        </div>
                        <div className='ml-5'>
                            <h3>97%</h3>
                            <p>Customer satisfaction index</p>
                        </div>
                    </div>
                    <div className=''>
                    <LinkBtn />
                    </div>
                </div>
                </div>
            </section>

            {/* Section 03 */}
            <section className="horizontal-section">
            <div className='horizontal-content-wrap'>
                <div className='border-start pl-5 horizontal-content'>
                    <h3>PEOPLE</h3>
                    <Headings
                        he1={"Nurturing Future-Ready"}
                        he2={"Talent"}
                        clr2={"#fff"}
                        clr={"#fff"}
                    />
                    <div className='cap-values my-4 d-flex'>
                        <div className='border-end pr-5'>
                            <h3>28.9%</h3>
                            <p>Gender diversity in <br /> decision-making roles <br /> (Managers & Partners) </p>
                        </div>
                        <div className='ml-5'>
                            <h3>82</h3>
                            <p>Inclusion Index</p>
                        </div>
                    </div>
                    <LinkBtn />
                </div>
                </div>
            </section>

            {/* Section 04 */}
            <section className="horizontal-section">
            <div className='horizontal-content-wrap'>
                <div className='border-start pl-5 horizontal-content'>
                    <h3>VALUE CHAIN PARTNERS</h3>
                    <Headings
                        he1={"Partnering for "}
                        he2={"Success"}
                        clr2={"#fff"}
                        clr={"#fff"}
                    />
                    <div className='cap-values my-4 d-flex'>
                        <div className='border-end pr-5'>
                            <h3>717</h3>
                            <p>business associates <br /> engaged in Marico's <br />value chain</p>
                        </div>
                        <div className='ml-5'>
                            <h3>82%</h3>
                            <p>Critical suppliers completed Level 1 <br /> of Marico's Responsible Sourcing <br /> Program</p>
                        </div>
                    </div>
                    <LinkBtn />
                </div>
                </div>
            </section>

            <section className="horizontal-section">
            <div className='horizontal-content-wrap'>
                <div className='horizontal-content border-start pl-5'>
                    <h3>COMMUNITIES</h3>
                    <Headings
                        he1={"Our legacy of community"}
                        he2={"empowerment"}
                        clr2={"#fff"}
                        clr={"#fff"}
                    />
                    <div className='cap-values my-4 d-flex'>
                        <div className='border-end pr-5'>
                            <h3>1 lakh+</h3>
                            <p>Farmers cumulatively <br />enrolled in the Sustainable <br /> Agriculture program</p>
                        </div>
                        <div className='ml-5'>
                            <h3>10.3 lakh+</h3>
                            <p>children benefitted from the <br />Nihar Shanti Pathshala <br />Funwala education program</p>
                        </div>
                    </div>
                    <LinkBtn />
                </div>
                </div>
            </section>

            <section className="horizontal-section">
            <div className='horizontal-content-wrap'>
                <div className='border-start pl-5 horizontal-content'>
                    <h3>ENVIRONMENT</h3>
                    <Headings
                        he1={"Pursuit of a Better"}
                        he2={"Tomorrow"}
                        clr2={"#fff"}
                        clr={"#fff"}
                    />
                      <div className='cap-values my-4 d-flex'>
                        <div className='border-end pr-5'>
                            <h3>3.73 billion</h3>
                            <p>litres of water conservation  <br />potential cumulatively created<br /> till date</p>
                        </div>
                        <div className=' ml-5'>
                            <h3>67.40%</h3>
                            <p>Renewable energy share <br />in operations</p>
                        </div>
                    </div>
                    <LinkBtn />
                </div>
                </div>
            </section>
        </main>
    );
};

// Exporting the component as default
export default Capitals;
