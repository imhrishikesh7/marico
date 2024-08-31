import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInFromLeft, slideInFromRight, slideUp } from '../Utilities/useAnimation';
import Headings from '../Components/Headings/Headings';
import { RotatingImage } from '../Components/About/About';

const AboutMarico = () => {
    const pillars = [
        {
            image: 'yellow@2x.png',
            content: "We are continuously investing in new growth engines in the domestic and international businesses to create a future-ready portfolio and drive accelerated and profitable revenue growth. This will also enable us to broaden our presence as well as premiumise our play in the respective geographies.",
        },
        {
            image: 'orange@2x.png',
            content: "We are relentlessly raising the digital quotient across the value chain to make Marico future-forward. By innovating, incubating and scaling, we are fast-tracking a digital culture throughout the organisation, and are aligning our digital strategy with our business priorities to ensure that we win among evolving consumer aspirations and marketplaces.",
        },
        {
            image: 'Blue@2x.png',
            content: "Our distribution prowess continues to enable consumers across regions to access our products, thus becoming a key lever for driving the next leg of growth. We will continue our efforts towards go-to-market transformation both in urban, rural as well as new age channels.",
        },
        {
            image: 'Pink@2x.png',
            content: "Diverse talent and socially inclusive culture will continue to be strong business drivers for us. We are accelerating diversity throughout the organisation across gender, ability and thought. We believe a positive, enabling and inclusive culture will amplify opportunities for different groups, and in turn, become a competitive people advantage for Marico.",
        }
    ];

    return (
        <div className='marginal'>
            <div className='flex flex-col md:flex-row items-center justify-center mx-auto my-4 space-y-4 md:space-y-0 md:space-x-10'>
                <div className=''>
                    <motion.img {...slideInFromRight} src="./homepage/about-m-cover.jpg" alt="" />
                </div>
                <div>
                    <Headings
                        he1={"ABOUT"}
                        he2={"Marico"}
                        clr2={"#2366b3"}
                        clr={"#a4cf57"}
                    />
                    <motion.p {...slideUp} className='pg mb-3'>
                        Marico (BSE 531642, NSE "MARICO") is one of India's leading consumer products companies, in the global beauty and wellness space.
                    </motion.p>
                    <motion.p {...slideUp} className='pg'>
                        Marico touches the lives of 1 out of every 3 Indians, through its portfolio of brands such as Parachute, Saffola, Saffola FITTIFY Gourmet, Saffola ImmuniVeda, Saffola Mealmaker, Hair & Care, Parachute Advansed, Nihar Naturals, Mediker, Pure Sense, Coco Soul, Revive, Set Wet, Livon, Just Herbs, True Elements, Beardo and Plix. The international consumer products portfolio contributes to about 26% of the Group’s revenue, with brands like Parachute, Parachute Advansed, HairCode, Fiancée, Purité de Prôvence, Ôliv, Lashe', Caivil, Hercules, Black Chic, Code 10, Ingwe, X-Men, Thuan Phat and Isoplus.
                    </motion.p>
                </div>
            </div>
            <div className=''>
                <motion.p {...slideUp} className='fs-3 w-full text-[#86c021]'>
                    The four pillars that continue to power our progress are
                </motion.p>

                <div className='image-containerc flex flex-col md:flex-row items-center justify-center mx-auto my-4 space-y-4 md:space-y-0 md:space-x-10 p-4 rounded bg-[#fef7e7]'>
                    {pillars.map((pillar, index) => (
                        <div key={index} className='flex flex-col items-center md:space-x-4 w-full  lg:w-[25%]  p-4'>
                            {/* Check if index is odd or even */}
                            {index % 2 === 0 ? (
                                // For 1st and 3rd (index 0 and 2), image on top
                                <>
                                    <RotatingImage
                                        src={`./homepage/${pillar.image}`}
                                        className='w-[200px]'
                                    />
                                    <motion.p {...slideUp} className='pg mt-4'>
                                        {pillar.content}
                                    </motion.p>
                                </>
                            ) : (
                                // For 2nd and 4th (index 1 and 3), paragraph on top
                                <>
                                    <motion.p {...slideUp} className='pg mb-4'>
                                        {pillar.content}
                                    </motion.p>
                                    <RotatingImage
                                        src={`./homepage/${pillar.image}`}
                                        className='w-[200px]'
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AboutMarico;
