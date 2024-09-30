import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, slideInFromLeft, slideInFromRight, slideUp } from '../Utilities/useAnimation';
import Headings from '../Components/Headings/Headings';
const MdMsg = () => {
    return (
        <div className='marginal mt-3'>
            <b className='fs-4 mt-4'>MESSAGE FROM THE CEO AND MD</b>
            <Headings
                he1={"Delivering Enduring"}
                he2={"Value"}
                clr2={"#3eaae2"}
                clr={"#3eaae2"}
            />
            <div className="flex flex-col md:flex-row items-center justify-center mx-auto my-4 space-y-4 md:space-y-0 md:space-x-10">
                <div className="w-full md:w-[30%]">
                    <motion.img {...fadeIn} src="./homepage/msg2.webp" className="w-full h-auto" alt="" />
                </div>
                <div className="w-full md:w-[35%]">
                    <motion.p {...slideUp} className="fs-4 text-[#3eaae2] font-semibold md:text-left">
                    <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-5%] inline-block' />
                        It is deeply inspiring for
                        all of us at Marico that we touch the lives of one out of every three Indians through our portfolio of brands,
                        and reach out to millions
                        of consumers through our international businesses
                        as well. Catering to the aspirations of such a diverse cross-section of consumers, transcending geographic borders and cultural preferences, continues to
                        be both an opportunity and a responsibility for your Company. <div className='w-[30px] md:w-[50px] ml-3 mb-[-5%] inline-block rotate-180'><img src="./homepage/quote-b.svg" alt="" cclassName="" /></div>
                    </motion.p>
                </div>
            </div>
            <div className='mt-2'>
                <motion.p {...slideUp} className='fs-3 text-[#86c021]'>Dear Shareholders,</motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    It is a pleasure to write to you and put forth your Company’s sixth Integrated Annual Report for the year ended March 31, 2024.
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    During the year under review, we dedicated ourselves to fortifying the enduring value of our enterprise and emerging with greater resilience and strength, amidst a gradually improving operating environment in India and the overseas markets. Our focus has been on realigning our business fundamentals and paving the way for sustained growth and value creation ahead. At the same time, witnessing the remarkable agility, grit and optimism exhibited by our team members across the organization has been truly uplifting. I believe that it is their unwavering commitment and passion that allows us to lay a solid foundation for the future.
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    It is deeply inspiring for all of us at Marico that we touch the lives of one
                    out of every three Indians through our portfolio of brands, and reach out
                    to millions of consumers through our international businesses as well. Catering to the aspirations of such a diverse
                    cross-section of consumers, transcending geographic borders and cultural preferences, continues to be both an opportunity and a responsibility for your Company. Therefore, our overarching objective is to build and continually strengthen our portfolio by upholding consumer-centricity at the core and resonating with the evolving expectations of the vast demographic.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    While we are at the cusp of crossing
                    ₹10,000 crore in revenues, building
                    the next  ₹10,000 crores over the next
                    5-7 years would necessitate the next leg of transformation, the key objectives of which would be to consistently outperform in the market and gain market share in the core businesses, exhibit the appetite for bold scale-up opportunities in
                    new businesses, strengthen our omni- channel distribution, leverage and expand our digital capabilities, nurture the empowering and entrepreneurial culture within the organization, and last but not least, uphold our commitment
                    to sustainability across all facets of our operations.
                </motion.p>
                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>
                    FY24 - Putting in Place Building Blocks for Sustainable Growth
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Taking positive cues from the second half of the previous year, the FMCG sector in India witnessed gradual improvement in volume growth during the year under review, while price-led growth tapered sharply in the wake of pricing drops across categories and moderating commodity prices. While growth in urban remained stable, rural witnessed some green shoots only towards the
                    end of the fiscal, which also reflected in premium and urban-centric segments outpacing rural and mass segments. With a normal monsoon forecast, moderate retail inflation and continued government spending, rural and mass category consumption is expected to pick up through the coming year.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Over the last couple of years, the
                    sector has witnessed growing salience
                    of organized trade and E-Commerce channels, while General Trade has been subdued by growth and profitability pressures. We believe that the General Trade channel will continue to be source of scale and competitive advantage over the long term, especially in our core categories. Therefore, your Company has been taking initiatives to support the profitability of our General Trade (GT) channel partners.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    In April 2024, we also rolled out <span className='font-semibold text-[#3eaae2]'>Project SETU,</span> a phased 3-year roadmap to improve our direct reach from ~1 million outlets currently to 1.5 million outlets in FY27, which would take our total to direct reach multiplier from the current ~5.8x to ~4x, which would be among the best in the sector. In addition, we expect Project SETU to drive market share gains across categories in urban and rural, as well
                    as enhance assortment levels in urban stores, thereby enabling diversification & premiumisation in the domestic business. Notably, the project will be cost neutral as it will be funded through re-allocation of resources from optimisation of wholesale and organized trade channel spends, and driving efficiencies across the supply chain. We will also continue to drive differential growth in our urban- centric and premium portfolios and large packs through the organised retail and E-Commerce channels. Therefore, our focus will be to deliver consistent and competitive growth through a much sharper and targeted portfolio-SKU strategy across channels.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    In FY24, your Company has delivered
                    a resilient performance in the domestic business as growth trends in core categories steadied and new businesses scaled up in line with expectations. Healthy offtakes led to market share and penetration gains in at least 75%
                    of the business. We expect a gradually improving growth trajectory in the core categories in light of the anticipated pickup in mass category consumption coupled with our ongoing initiatives to enhance General Trade (GT) channel partner profitability and transformative expansion in direct reach through Project SETU.
                </motion.p>
                <motion.p {...slideUp} className="fs-5 text-[#3eaae2] mb-3 font-semibold md:text-left">
                <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-2%] inline-block' />
                    In FY24, your Company has delivered a resilient performance in the domestic business as growth trends in core categories steadied and new businesses scaled up in line with expectations. Healthy offtakes led
                    to market share and penetration gains in at least 75% of the business.
                    <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[40px] ml-3 mb-[-1%] inline-block rotate-180' />
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Parachute has charted a steady recovery in traction as loose to branded conversions regained pace with copra prices inching up in the second half of the year. We expect to drive improving volume traction and sustained market share expansion in Parachute on the back of the brand’s pricing resilience and back-end system advantages amidst the moderately inflationary trend in copra prices.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    In Value-Added Hair Oils, sluggish rural sentiment, shrinkflation and heightened competitive pressures led to titration in consumption and downtrading within the category. As a result, we continued to face subdued trends in the bottom of the pyramid segment. The mid and premium segments within the category, however, fared relatively better. Our strategic focus will be on driving market share gains and expanding our play in the mid and premium segments through concerted investments in brand building and innovation, while staying competitive in the low RPI (relative price index) segments without diluting profitability.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Saffola has crafted a legacy of trust, consumer understanding and innovation to meet the diverse taste preferences of the Indian consumer and offer “better for you” food products. In line with
                    our commitment to promoting healthy lifestyles, we have launched an impactful campaign under the master brand
                    'Saffola,' emphasizing the importance
                    of incorporating <span className='font-semibold text-[#3eaae2]'>'Roz Ka Healthy Step'</span> into daily routines. This was also the initial step in harnessing the equity of
                    the master brand, setting the stage for more effective brand-building endeavours across the entire Saffola franchise.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Saffola Oils also witnessed stable traction with volatility in input and brand pricing subsiding. While erstwhile pricing declines led to an optical drop in revenues, we expect revenue growth to move into positive territory next year.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Our Foods portfolio is broadly present across breakfast, in-between meals, healthy snacking, immunity, plant-
                    based protein and the nutraceuticals segments. Saffola Oats emerged as
                    the Number 1 Oats brand in India during the year, according to Kantar Household Panel Data. Supporting the government's vision of promoting millets as a sustainable and nutritious food source, we have embraced millets in
                    our product portfolio and blended the goodness of two superfoods — oats and millets in our Saffola Oats range. Saffola Soya Chunks and Saffola Honey have logged market share and penetration gains this year. The impressive scale-up of True Elements and Plix has been very encouraging, Consequently, the Foods business closed the year at ~4x its scale in FY20, even while we took a step back this year to make refinements in our supply chain, GTM strategies and cost structure. Through these initiatives, we have realised structural gross margin expansion in Foods this year.
                </motion.p>
                <motion.p {...slideUp} className="fs-5 text-[#3eaae2] mb-3 font-semibold md:text-left">
                <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-2%] inline-block' />

                    Your Company has put
                    in place strategically building blocks to deliver double-digit revenue growth through consistent outperformance vis-à-vis the category and market share gains in the domestic core portfolios, accelerated growth in the Foods and Premium Personal Care and double-digit constant currency growth in the International business.
                    <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[40px] ml-3 mb-[-1%] inline-block rotate-180' />
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    The Premium Personal Care portfolio has witnessed healthy momentum, led by the Digital-first portfolio reaching an exit ARR of ~ ₹450 crore. Beardo has grown threefold since FY21 with positive EBITDA this year and holds promise of delivering double-digit EBITDA margin in the coming year. Just Herbs also surpassed the H1 billion ARR at a minimal burn. The traction in Plix's Personal Care portfolio has been strong. With an operating playbook firmly in place, we expect to double the scale of Digital-first brands and deliver double-digit EBITDA margin in the portfolio by FY27.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    With Foods and Premium Personal Care now contributing to ~20% of domestic revenues, the portfolio diversification objective has led to a marked shift in the revenue construct of the domestic business and reduction in commodity linkage of the business. We will aggressively drive this agenda and expect the share of these businesses to reach ~25% in FY27.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    In the international business, the Bangladesh business has regained its momentum in a challenging environment on the back of its broad-based portfolio and robust fundamentals. In Vietnam,
                    we are witnessing a slowdown in HPC demand, although the expanded portfolio should enable us to hold steady. The strong ramp-up in the MENA and South Africa businesses has given impetus
                    to the growth trajectory of the overall business and offers margin upside over the medium term. The NCD and exports business has also sustained its robust double digit growth momentum over
                    the last few years. The visible broad basing of our business reflects in the reducing dependence on the Bangladesh business. We expect the revenue share
                    of Bangladesh to moderate gradually to about 40% by FY27.
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    Your Company has put in place strategically building blocks to deliver double-digit revenue growth through consistent outperformance vis-à-vis the category and market share gains in the domestic core portfolios, accelerated growth in the Foods and Premium Personal Care and double-digit constant currency growth in the International business. We also continue to scout for inorganic growth opportunities that
                    offer meaningful potential to consolidate our competitive position in existing categories, expand the total addressable market in existing geographies or access markets of interest, thereby adding visible levers to drive long term value creation.
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                    We have delivered our highest-ever operating margin in the year under review, led by robust gross margin expansion, even while investments towards brand-building remained a key thrust area. In the medium term, we expect operating margin to structurally inch up over the next few years with scale benefits as well as premiumisation of
                    the portfolios across both the India and overseas businesses.
                </motion.p>
                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>
                    Responsible Growth is one of our Core Values
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Upholding the Triple Bottomline (People, Planet and Profit) philosophy, we view our entire process of value creation through the lens of sustainability. Sustainability
                    is an inseparable part of our ethos, which we believe empowers us to lead with excellence, agility and innovation, and in turn, creates long term value for all stakeholders. We have incorporated ‘Responsible Growth’ as one of our
                    core values, which enable win-win outcomes for all stakeholders, comprising our customers, employees, external partners, shareholders, society and the environment. From reducing emissions and energy consumption, driving water stewardship and responsible sourcing
                    to focusing on social value creation and strengthening the strong governance framework, we are continually driving our ESG efforts in the right direction. The Sustainability Vision for 2030, elucidated in this Report, will guide our efforts going ahead as we strive towards achieving the committed milestones in both letter and spirit.
                </motion.p>
                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>
                    Our Culture. Our Bedrock.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Our culture of best-in-class corporate governance has remained a constant since inception. The diverse composition of the Board and senior leadership team brings forth varied perspectives and enhances the quality of our decision making. I am proud to acknowledge that your Company continued to be ranked in the ‘LEADERSHIP’ category in the Indian Corporate Governance Scorecard for 2023 compiled by IiAS. We were also ranked among the Best Managed Companies India 2023 by Deloitte India.
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                    Consumer aspirations have always remained at the heart of our strategy and purpose. We are delighted to have been recognised as the ‘Most Consumer Centric Brand of the Year’ at the 3rd Smart CX Summit & Awards 2024.
                </motion.p>
                <motion.p {...slideUp} className="fs-5 text-[#3eaae2] mb-3 font-semibold md:text-left">
                <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[50px] mr-3 mt-[-2%] inline-block' />
                    As we embark on the
                    next phase of growth and achieve our ambitious goals, we wanted to refresh and reenergise the culture that is critical to building Marico 3.0. The objective was simple – to adapt and evolve while preserving
                    the essence of what makes Marico unique.
                    <img src="./homepage/quote-b.svg" alt="" className='w-[30px] md:w-[40px] ml-3 mb-[-1%] inline-block rotate-180' />
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                Before I conclude, I must re-emphasise that we are committed to create 
                a workplace which offers equal opportunities to all employees. The Inclusion & Diversity (I&D) Council, instituted last year, works towards enabling policies and processes to incorporate the needs of diverse individuals and facilitate our evolving culture. It is heartening to note that your Company was bestowed with the Best Employer of India 2023-24 award by Kincentric.
                </motion.p>

                <motion.p {...slideUp} className='pg font-semibold text-[#86c021]'>
                Unlocking the next phase of growth
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                While Diversification, Distribution, Digital and Diversity (4Ds) continue to be a part of our strategy playbook, the foundation of your Company has been shaped by our people, values and culture. Our ‘People First ethos’ built on the core tenets of trust, transparency, inclusion, integrity and owner’s mindset have been the pillars of our growth, even during unprecedented times. With changing times and dynamic business landscape, our values continued to evolve to help meet our business aspirations. As we embark on the next phase of growth and achieve our ambitious goals, we wanted to refresh and reenergise the culture that is critical to building Marico 3.0. The objective was simple – to adapt and evolve while preserving the essence of what makes Marico unique. Therefore, we have refreshed our Values Charter, to articulate more clearly the Way We Think and the Way We Act, which is the ‘The Marico Way’. 
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                To ensure resonance with members and alignment with the organisational vision, we conducted extensive workshops involving over 150 participants from seven regions. ‘‘The Marico Way’ was crafted based on cultural experiences, needs, and aspirations, aiming to empower members and bridge the generational gap. It encapsulates Marico’s purpose, emphasising making a difference to all stakeholders, and ethos, focusing on elements like an Owner’s Mindset, Frugality, Transparency, Mutual Trust, Integrity, and Meritocracy. The refreshed values include a commitment to consumer delight, fostering bold ambition, enabling responsible growth, nurturing members’ potential, ensuring accountability for outcomes, and executing with agility. As your Company navigates the intricacies of generational dynamics and envisions future growth, we believe these refreshed values pave the way for a cohesive, innovative, and inclusive workplace.  
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                Empowered by the Values refresh, 
                we remain steadfast in our focus on driving profitable, competitive and sustainable growth. Leveraging our consistent innovation, deep consumer- first approach, diverse portfolio, digital capabilities, robust omnichannel distribution network, we are building the Marico of Tomorrow. 
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                As we look towards the future with optimism, I convey my deepest gratitude to our Board, the entire leadership team and all our members for their continued collaboration, passion and commitment. I would also like to thank you, our shareholders, for your continued faith, support and confidence in our vision of Marico. 
                </motion.p>

                <motion.p {...slideUp} className='pg mb-3'>
                Warm regards 
                </motion.p>
                <motion.p {...slideUp} className='pg font-semibold'>
                Saugata Gupta
                </motion.p>
                <motion.p {...slideUp} className='pg mb-3'>
                Managing Director & Chief Executive Office
                </motion.p>
            </div>
        </div>
    )
}

export default MdMsg