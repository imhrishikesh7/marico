import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, slideInFromLeft, slideInFromRight, slideUp } from '../Utilities/useAnimation';
import Headings from '../Components/Headings/Headings';
const ChairmanMsg = () => {
    return (
        <div className='marginal mt-3'>
            <b className='fs-4 mt-4'>CHAIRMAN’S PERSPECTIVE</b>
            <Headings
                he1={"Towards Marico"}
                he2={"3.0"}
                clr2={"#f47f20"}
                clr={"#f47f20"}
            />
            <div className="flex flex-col md:flex-row items-center justify-center mx-auto my-4 space-y-4 md:space-y-0 md:space-x-10">
                <div className="w-full md:w-[30%]">
                    <motion.img {...fadeIn} src="./homepage/msg1.webp" className="w-full h-auto" alt="" />
                </div>
                <div className="w-full md:w-[35%]">
                    <motion.p {...slideUp} className="fs-4 text-[#f47f20] font-semibold md:text-left">

                        <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-5%] inline-block' />
                        I have always believed
                        that one path-breaking innovation can have a cascading positive impact on an entire ecosystem. Marico Innovation Foundation (MIF), since its inception in 2003, has been committed to nurturing and catalysing India’s innovation landscape and ground- breaking technologies
                        that can create large-
                        scale socio-economic and environmental impact for millions of people. <div className='w-[30px] md:w-[50px] ml-3 mb-[-5%] inline-block rotate-180'><img src="./homepage/quote-o.svg" alt="" cclassName="" /></div></motion.p>
                </div>
            </div>
            <div className='mt-2'>
                <motion.p {...slideUp} className='fs-3 text-[#86c021]'>Dear Shareholders,</motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    I am pleased to present to you the
                    sixth Integrated Annual Report of your Company for the financial year 2023-24.
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    In the year under review, your
                    Company’s performance has reaffirmed the underlying strength of its business model and steadfast focus on strategic priorities, while contending with a slower-than-expected pace of recovery in consumption trends, especially in rural, and subdued sentiment in the general trade channel in India, and macro-economic headwinds in particular overseas markets. Driving diversification has expanded the total addressable market in both the domestic and overseas businesses and enabled us
                    to build long term drivers of profitable growth. At the same time, reinforcing
                    the competitiveness of our core portfolios has led to sustained market shares and penetration gains during the year. This was also a landmark year in terms of profitability as your Company posted its highest-ever operating margin amidst lower input prices, scale up of newer franchises and a favourable portfolio mix.
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    As we move forward, the increasingly dynamic business landscape underscores the importance of agility and forward- thinking in distribution models, innovation, brand building and digital marketing capabilities. Your Company continues to give impetus to these strategic drivers and is single-mindedly aligned to sustainable value creation for all its stakeholders.
                </motion.p>
                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>Inspire. Innovate. Impact.</motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    I have always believed that one path- breaking innovation can have a cascading positive impact on an entire ecosystem. Marico Innovation Foundation (MIF), since its inception in 2003,
                    has been committed to nurturing and catalysing India’s innovation landscape and ground-breaking technologies that can create large-scale socio-economic and environmental impact for millions of people. MIF’s impact on the Indian innovation ecosystem runs on three axes. First is the Scale Up programme, which provides customised guidance
                    for innovative organisations to achieve growth. Second is the biennial <span className='font-semibold text-[#f47f20]'> Innovation for India Awards </span> which showcase innovations to prominent stakeholders of the business ecosystem in India. Lastly, a sectoral programme that provides intensive support for innovators and startups to grow and achieve scale in climate adaptability solutions, including plastic waste management, food and agriculture technology. MIF is facilitating collaborations between innovators and Fast-Moving Goods (FMCG) companies to promote innovation towards reduction in the use of plastics.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Sustainability is considered as a business imperative and a value differentiator
                    at your Company since its inception. Embodying the commitment to <span className='font-semibold text-[#f47f20]'>People, Planet, and Profit</span>, it is embedded deep within the organization’s purpose, existential vision and mission, and impact enhancement plans. Your Company
                    has integrated pertinent and evolving ESG risks with its ERM framework. This has enabled it to prioritize, track and report the potential impact and assess the mitigation plans during periodic management reviews. The Board- constituted Risk Management Committee ensures that each significant strategic and business risk is identified, assessed and mitigated for long term sustainable growth of business.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    After the successful accomplishment
                    of our inaugural 5-year sustainability targets, we are enthused by the progress towards our <span className='font-semibold text-[#f47f20]'>Sustainability Vision for 2030.</span> To translate this vision into action, we have outlined eight pivotal themes namely, Climate Change (aiming for
                    Net Zero Emissions in Operations), Water Stewardship, Circular Economy, Responsible Sourcing, Purposeful Brands, Diversity and Inclusion, Sustainable Agriculture and Corporate Governance.
                </motion.p>
                <motion.p {...slideUp} className="text-xl text-[#f47f20] mb-3 font-semibold md:text-left">
                    <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-2%] inline-block' />
                    After the successful accomplishment of
                    our inaugural 5-year sustainability targets, we are enthused by the progress towards our Sustainability Vision for 2030. To translate this vision into action,
                    we have outlined eight pivotal themes namely, Climate Change (aiming
                    for Net Zero Emissions
                    in Operations), Water Stewardship, Circular Economy, Responsible Sourcing, Purposeful Brands, Diversity and Inclusion, Sustainable Agriculture and Corporate Governance.
                    <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[40px] ml-3 mb-[-1%] inline-block rotate-180' />
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Our dedication to building a sustainable environment is evidenced by our concerted efforts to conserve energy, achieve net carbon neutrality and reduce our reliance on fossil fuels. Notably, we have significantly reduced the intensity of GHG emissions (Scope 1+2) by 79% compared to FY13. Through initiatives such as carbon forestry and the adoption of renewable energy sources, we are actively mitigating our environmental impact and paving the way for a greener future.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Water stewardship is an integral component of our sustainability endeavours. It is with great pride that
                    I share that your Company’s Jalgaon facility attained <span className='font-semibold text-[#f47f20]'> 'Water Neutral' </span> certification on World Water Day 2024. Given that the facility is situated in a region prone to water scarcity, your Company implemented comprehensive water conservation measures, including rainwater harvesting, infrastructure development and creation of water conservation potential, which not only enhanced water availability but also contributed to agricultural sustainability and improved the quality of life for local communities. Independently validated by DNV Business Assurance India, this milestone underscores our unwavering commitment to responsible water management and sets a benchmark for sustainable practices within our industry.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>Our sustainability efforts have extended beyond environmental conservation to encompass Sustainable Agriculture and Livelihood Improvement. The <span className='font-semibold text-[#f47f20]'>Parachute Kalpavriksha Foundation </span> exemplifies this commitment, making tangible strides in improving the livelihoods of farmers and fostering agricultural sustainability. Through the promotion of sustainable farming practices and comprehensive support initiatives, we are driving positive change and building resilient communities. The Foundation's impactful initiatives have positively transformed the lives of over 100,000 Indian farmers, spanning more than 3.5 lakh acres of farmland.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'> In the realm of social responsibility, our flagship CSR program, <span className='font-semibold text-[#f47f20]'>Nihar Shanti Pathshala Funwala, </span> stands
                    as a testament to our commitment to empowering under-served communities. By enhancing the skills and capabilities of government school teachers, we areenriching educational experiences and creating opportunities for a brighter future.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'> Your Company’s dedication to sustainability has not gone unnoticed. During the year, Marico was honored to be recognized as one of the Top 3 Sustainable Companies in the FMCG Sector at the Sustainable World Conclave by BW Businessworld. The Parachute Kalpavriksha Foundation also earned esteemed accolades, including a 7-Star Rating and 1  Place in the Social Responsibility Category at the 9th International Best Practice Competition (IBPC).
                </motion.p>
                <motion.p {...slideUp} className="text-xl text-[#f47f20] mb-3 font-semibold md:text-left">
                    <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-2%] inline-block' />
                    Our sustainability efforts have extended beyond environmental conservation to encompass sustainable agriculture and community development. The Parachute Kalpavriksha Foundation exemplifies this commitment, making tangible strides in improving the livelihoods
                    of farmers and fostering agricultural sustainability.
                    <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[40px] ml-3 mb-[-1%] inline-block rotate-180' />
                </motion.p>

                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>The Marico Way</motion.p>
                <motion.p {...slideUp} className='pg mb-3'> I firmly believe that investing in people and building a positive culture in the organisation is not only just good for business, but also the right thing to do. However, culture building is not a one- time effort but an ongoing process that requires perpetual reinforcement of the desired values and behaviours.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    In our over three decade-long journey, I believe it is our values that have served as the bedrock upon which your Company has been built. From the very beginning, our commitment to our values has been unwavering, guiding us through every triumph and challenge encountered along the way. Although, our values have continued to evolve in tune with changing times. As we accomplish new milestones in business in the domestic and overseas markets, we continue to expand our portfolio, while addressing the evolving needs and aspirations of our customers. As we embrace emerging technologies at every juncture, we have focused on growing sustainably, ensuring continued engagement with all our consumers, partners and other stakeholders.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    As your Company prepares to leap forward towards its next phase of transformation, it became evident that a cultural and values refresh was essential. With the collective input from our teams, consumers, investors, business partners, community members and stakeholders at large, we identified the key elements that formed the foundation of our Values Refresh initiative. Through extensive collaboration and feedback, we have refined our Values Charter, incorporating diverse perspectives and expectations. This evolution has led to the establishment of <span className='font-semibold text-[#f47f20]'> 'The Marico Way',</span> defined by three fundamental pillars: Our Reason for Existence <span className='font-semibold text-[#f47f20]'>– PURPOSE</span>; Our way of Being <span className='font-semibold text-[#f47f20]'>– ETHOS</span> (our Non-Negotiables); and the Way we Think and Act <span className='font-semibold text-[#f47f20]'>– VALUES.</span> This framework provides us with the tools to align our actions, decisions and organizational trajectory with a clear sense of purpose, thereby reinforcing our unique identity and principles, and upholding a set of guiding values that steer our success.
                </motion.p>
                <motion.p {...slideUp} className="text-xl text-[#f47f20] mb-3 font-semibold md:text-left">
                    <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-2%] inline-block' />
                    Your Company’s dedication to sustainability has not gone unnoticed. During the year, Marico was honored to be recognized as one of the Top 3 Sustainable Companies
                    in the FMCG Sector at the Sustainable World Conclave by BW Businessworld. The Parachute Kalpavriksha Foundation also earned esteemed accolades, including a 7-Star Rating and 1  Place in the Social Responsibility Category at the 9th International Best Practice Competition (IBPC).
                    <img src="./homepage/quote-o.svg" alt="" className='w-[30px] md:w-[40px] ml-3 mb-[-1%] inline-block rotate-180' />
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    I must also re-emphasize that the newly refreshed values represent a natural evolution from the current set of values and seamlessly integrate our legacy with emerging trends that we must embrace and adapt to in order to succeed.
                </motion.p>

                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>
                    Looking Ahead with Optimism
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Given the pace of urbanization and premiumization, coupled with the demographic dividend, rising incomes, digital adoption and supportive government policies, India's prospects
                    as a consumption-driven economy remain robust. Our key overseas markets have shown resilience in the face of challenging global economic conditions and remain invest to grow markets in the medium and long term. The array
                    of opportunities before us fills me with a profound sense of optimism for the future. Your Company stands poised to not only navigate future challenges but also seize emerging opportunities. Our strategic investments in portfolio expansion and brand building align seamlessly with our commitment to fortify the long-term equity of both our core and new franchises.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    The Board has continued to play a pivotal role in providing strategic guidance and oversight to your Company’s leadership team, while maintaining accountability and upholding the highest standards
                    of corporate governance. The Board rejuvenation exercise, underway over the last couple of years, is now complete. I continue to act as the Non-Executive Chairman of the Board, while Saugata continues to lead your Company’s strategic growth initiatives. I also continue to lead efforts to improve the collective functioning of the Board and am actively involved in your Company’s                                                    CSR initiatives. At the close of the fiscal year under review, we bade farewell to Ms. Hema Ravichandar, who completed her second consecutive term as an Independent Director on the Board of your Company. On behalf of the Board and Management, I would like convey deep appreciation for her contributions during her association with the Company.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    I extend my heartfelt appreciation to the Board for their devoted engagement and guidance, to our dedicated teams for their relentless innovation and commitment, and to our shareholders for their enduring trust and support. Additionally, I express gratitude to our valued business partners, vendors, associates and the communities we engage with, whose collaboration enables us to deliver sustainable value— <span className='font-semibold text-[#f47f20]'>the Marico Way</span>. Together, we shall continue to forge ahead towards a future defined by innovation, resilience and responsible growth.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Regards,
                </motion.p>
                <motion.p {...slideUp} className='pg font-semibold'>
                    Harsh Mariwala
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Chairman
                </motion.p>
            </div>
        </div>
    )
}

export default ChairmanMsg