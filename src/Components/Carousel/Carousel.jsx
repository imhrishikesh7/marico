import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carousel = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });
    const [bgColor, setBgColor] = useState("");

    const colors = ["#E1EECA", "#C086D0", "#FED195", "#9FCCF4", "#EFC7C9", "#FDE3D8", "#C1DECB", "#C4E0F5"]; // Colors for each details card

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".photo:not(:first-child)", { opacity: 0, y: 50, scale: 1 });
            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1, y: 0, duration: 0.5, stagger: 1
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".rightblock",
                animation: animation,
                scrub: true,
            });

            const details = gsap.utils.toArray('.details');
            details.forEach((detail, i) => {
                ScrollTrigger.create({
                    trigger: detail,
                    start: "top center",
                    end: "bottom center",

                    onEnter: () => gsap.to('.gallery', { backgroundColor: colors[i], duration: 1 }),
                    onEnterBack: () => gsap.to('.gallery', { backgroundColor: colors[i], duration: 1 })

                });
            });
        });
        return () => ctx.revert();
    }, []);


    const handleMouseEnter = (e) => {
        const parentOffset = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        setSpanPosition({ top: relY, left: relX });
    };

    const handleMouseOut = (e) => {
        const parentOffset = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        setSpanPosition({ top: relY, left: relX });
    };

    const handleAnchorClick = (e) => {
        e.preventDefault();
    };

    const container2 = useRef(null);
    const { scrollY } = useScroll({
        target: container2,
        offset: ['start start', 'end end'],
    });


    return (
        <div className='pinned-container'>

            <div className="gallery" style={{ backgroundColor: bgColor }}>
                <div className='color-bg'></div>
                <div className="left">
                    <div className="details">
                        <div className='details-card dt1'>
                            <h2 className='display-5'>Our</h2>
                            <h1>Purpose</h1>
                            <p>
                                As a company founded on the principles of conscious capitalism, our core Purpose is to leave a lasting impact in the lives of our stakeholders and the planet. We strive to look beyond our operational boundaries to positively impact society by nurturing and empowering communities. <br /> <br />
                                We are committed to staying at the forefront of industry trends while adapting to changing consumer needs, embracing digital tools, and keeping purpose at the heart of our growth strategies.
                            </p>
                            <span className='fw-bold t1 m-0 t-sub'>Amit Prakash</span>
                            <span className=' m-0 t-sub'>Chief Human Resources Officer</span>
                            {/* <a className='linka' href="https://www.bajajelectricals.com/consumer-products/"><div class="btna"> Know More</div> </a> */}

                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt2'>
                            <h2 className='display-5'>Our</h2>
                            <h1>Ethos</h1>
                            <p>
                                Our Ethos inspires us to embrace the owner’s mindset and make a difference for our customers, business partners,
                                communities and other stakeholders, every step of the
                                way. The key tenets of our Ethos are: Owner’s Mindset,
                                Frugality, Transparency, Integrity, Meritocracy, Mutual Trust
                                and Respect. <br /> <br />
                                At Marico, we continue to adhere to these
                                fundamental principles as non negotiables, and they have
                                become an integral part of our DNA.
                            </p>
                            <span className='fw-bold t2 m-0 t-sub'>Pawan Agrawal</span>
                            <span className=' m-0 t-sub'>Chief Financial Officer</span>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt3'>
                            <h2 className='display-5'>Consumer</h2>
                            <h1>First</h1>
                            <p>
                                Our Consumer-Centric approach encourages us to consistently analyse consumers’ evolving aspirations, address their unmet needs and map their journeys across brands.  <br /> <br />
                                We create new products across brands and categories, including relevant extensions to address consumer needs. Our three-pronged approach for innovation comprises: Thought leadership in core categories; having an outside-in benchmark for new product development; and to learn from experts and build skills to deliver excellence.
                            </p>
                            <span className='fw-bold t3 m-0 t-sub'>Somasree Bose Awasthi </span>
                            <span className=' m-0 t-sub'>Chief Marketing Officer</span>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt4'>
                        <h2 className='display-5'>Bold</h2>
                            <h1>Ambition</h1>
                            <p>
                            As a brand with Bold Ambition, we set ambitious goals and pursue global excellence across every aspect of our operations. Our risk-taking strategy is well-crafted, considering all potential risks. This empowers us to take courageous and purposeful
                            steps towards creating meaningful value that can make a difference.
                            </p>
                            <span className='fw-bold t4 m-0 t-sub'>Ashish Goupal 
                            </span>
                            <span className=' m-0 t-sub'>Chief Executive Officer, International Business</span>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt5'>
                        <h2 className='display-5'>Responsible</h2>
                            <h1>Growth</h1>
                            <p>
                            Our Responsible Growth strategy serves as a strong foundation for building the Marico of tomorrow. At Marico, we pursue the broad principles of stakeholder capitalism across various facets – delighting consumers by providing industry-leading quality products; helping our members accomplish their professional goals; complying with ethical and sustainable business practices.
                            </p>
                            <span className='fw-bold t5 m-0 t-sub'>Amit Bhasin
                            </span>
                            <span className=' m-0 t-sub'>Chief Legal Officer and Group General Counsel</span>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt6'>
                        <h2 className='display-5'>Grow with</h2>
                            <h1>Members</h1>
                            <p>
                            Our Members are the pillars of our success and hence we nurture, empower, and collaborate with each other and grow together. Focusing on our members' growth aspirations and wellbeing enable us to deliver superlative business outcomes. We will continue to foster a more diverse and inclusive work environment.
                            </p>
                            <span className='fw-bold t5 m-0 t-sub'>Shilpa Vora 
                            </span>
                            <span className=' m-0 t-sub'>Chief R&D Officer</span>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt7'>
                        <h2 className='display-5'>Accountability for</h2>
                            <h1>Outcomes</h1>
                            <p>
                            At Marico, we are committed to deliver what we promise in a dynamic business landscape. Therefore, our strategies are flexible and agile in responding to changes in the operating environment. We analyse various scenarios and craft fit for purpose solutions accordingly. <br /><br />
                            We are poised to significantly enhance our product distribution efforts, ensuring that our consumers receive quality products where they need.
                            </p>
                            <span className='fw-bold t1 m-0 t-sub'>Shilpa Vaibhav Bhanchawat
                            </span>
                            <span className=' m-0 t-sub'>Chief Operating Officer, India & Foods Business</span>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt8'>
                        <h2 className='display-5'>Execute with</h2>
                            <h1>Agility</h1>
                            <p>
                            We adapt to changing scenarios with speed and prudence. We pursue outcomes with scenario planning, meticulous tracking and dynamic resource allocation. Stringent adherence to appropriate processes and technologies enable us to deliver outcomes and stay ahead of the curve. Pertinent technology and right processes empower us to scale rapidly.
                            </p>
                            <span className='fw-bold t4 m-0 t-sub'>Vrijesh Nagathan
                            </span>
                            <span className=' m-0 t-sub'>Chief Information & Digital Technology Officer</span>
                        </div>
                    </div>
                </div>
                <div className="rightblock">
                    <div className="photo">
                        <div className='dynamic-color dc1'>
                            <img
                                src="./homepage/i1.png"
                                alt="img-1"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc2'>
                            <img
                                src="./homepage/i2.png"
                                alt="img-2"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc3'>
                            <img
                                src="./homepage/i3.png"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc4'>
                            <img
                                src="./homepage/i4.png"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc5'>
                            <img
                                src="./homepage/i5.png"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc6'>
                            <img
                                src="./homepage/i6.png"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc7'>
                            <img
                                src="./homepage/i7.png"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc8'>
                            <img
                                src="./homepage/i8.png"
                                alt="img-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;

