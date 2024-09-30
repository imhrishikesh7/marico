import React from 'react'
import Headings from '../Components/Headings/Headings'
import Leaf from '../Components/Leaf/Leaf'

const Communities = () => {
    return (
        <div className='marginal my-5'>
            <b className='fs-4 my-4'>COMMUNITIES</b>
            <Headings
                he1={"Our legacy of community"}
                he2={"empowerment"}
                clr2={"#5cb7e7"}
                clr={"#5cb7e7"}
            />
            <p className='head-b'>
                At Marico, we strive to integrate social well-being into the very fabric of our operational framework. With an emphasis on integrating ethical practices and social responsibility into every aspect of our operations, our value chain and across our business capitals, we aspire to create a lasting impact on lives. These efforts are driven by a deep understanding of the primary requirements for strengthening the base of a sustainable future – which not just requires a focus on profit, but also on people and the planet. We are dedicated to fostering sustainable societal transformation by nurturing and empowering communities through livelihood improvement, sustainable agricultural practices, education, healthcare and skill-based engagement opportunities.
            </p>
            <p className='my-2'>
                As a purpose-driven organisation, we understand our responsibility towards society. Upholding the concept of shared value creation, we strive to collaborate with our stakeholders to catalyse enduring change within society. Going beyond profit-making, we undertake various initiatives to uplift communities and enhance their quality of life through education, healthcare, and livelihood support. Prioritising sustainable transformation, our corporate social responsibility programme amplifies the impact of our targeted initiatives.
            </p>
            <img src="./communities/com1.jpg" className='img-fluid my-2' alt="" />
            <img src="./communities/com2.jpg" className='img-fluid my-2' alt="" />
            <img src="./communities/com3.jpg" className='img-fluid my-2' alt="" />

            <b className='head-b text-[#5cb7e7] my-4'>The Stakeholder Ecosystem that inspires us to deepen our impact </b>
            <p className='pg my-2'>
                Our CSR programmes aim to create a positive ripple effect to benefit a wide range of stakeholders. The infographic below indicates how each programme impacts a multitude of stakeholders from our ecosystem.
            </p>
            <img src="./communities/com4.jpg" className='img-fluid my-2' alt="" />
            <b className='head-b text-[#5cb7e7] my-4'>CSR Governance</b>
            <p className='pg my-2'>
                Under the guidance of a committed CSR team, every year, we embark on a meticulous journey of goal setting, objective refinement and resource allocation, guided by a vision to ensure impactful change. The team takes on the mantle of bringing these plans to fruition within defined timeframes, by evaluating each and every aspect of the programmes and its efficacy. Through continuous monitoring, it ensures the most feasible outcome and helps to generate maximum value for all stakeholders.
                <br /><br />
                Our collaborative efforts with esteemed partners such as the Marico Innovation Foundation, Parachute Kalpavriksha Foundation, governmental and non-governmental entities, enable us to execute our CSR projects with precision and efficiency.
                <br /><br />
                Our relentless dedication to sustainable value creation serves as a compass for steering us towards environmental as well as social stewardship. Going beyond mere operational endeavours, we strive to catalyse meaningful transformation, illuminating the path towards a future imbued with promise and possibility.
            </p>
            <div className='p-4 pg text-light rounded relative' style={{ background: "linear-gradient(to right, #399dd6, #1e5aa1)" }}>
                <Leaf fill={"#9cceef"} top={"0%"} right={"0%"} width={"8vw"} animate={1} rotate={-90} />
                <h1 className='text-[#9cceef] text-5xl max-md:text-3xl mb-4'>
                    Sustainable Agriculture & Livelihood Improvement
                </h1>
                <b className='head-b text-light my-4'>Parachute Kalpavriksha Programme </b>
                <p className='pg my-3'>
                    The Parachute Kalpavriksha Foundation (PKF) is a non-profit organisation that strives to create a lasting impact on the lives of farmers. PKF is Marico’s flagship CSR programme that demonstrates the existential purpose of its signature brand, Parachute. It assists farmers in developing sustainable agriculture and promoting livelihood improvement practices by providing knowledge on scientific farm management, encouraging agricultural innovation and research, creating water potential, improving water management practices, enabling technology and digital adoption and facilitating social welfare schemes.
                </p>
                <div className='row'>
                    <div className='col-md-6'>
                        <ul className='pg my-4 list-disc'>
                            <b className='head-b'>Objective</b>
                            <li className='my-2 mx-3'>
                                Equip farmers increase sustainable crop yield, leading to enhanced income opportunity.
                            </li>
                            <li className='my-2 mx-3'>
                                Train farmers on scientific and research based agricultural practices to improve farm productivity.
                            </li>
                        </ul>
                        <ul className='pg my-4 list-disc'>
                            <b className='head-b'>Support activities</b>
                            <li className='my-2 mx-3'>
                                Consultation with experts (on phone)
                            </li>
                            <li className='my-2 mx-3'>
                                Water conservation through farm pond construction
                            </li>
                            <li className='my-2 mx-3'>
                                Classroom training for farmers
                            </li>
                            <li className='my-2 mx-3'>
                                On farm training by Field Service Personnel (FSP)
                            </li>
                        </ul>
                        <ul className='pg my-4 list-disc'>
                            <b className='head-b'>Support centres</b>
                            <li className='my-2 mx-3'>
                                Kalpavriksha Knowledge Centre (KKC): A constant companion of farmers to help them increase production and gather knowledge.
                            </li>
                            <li className='my-2 mx-3'>
                                Agri-Business Centre (ABC): Agri-clinic for offering farm care inputs and technical services.
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <img src="./communities/com23.jpg" className='img-fluid my-2 w-[60%]' alt="" />

                    </div>
                </div>
            </div>
            <img src="./communities/com5.jpg" className='img-fluid my-2' alt="" />
            <div className='bg-[#ddebf9] p-3 rounded'>
                <h1 className='text-[#4fb4e6] text-5xl max-md:text-3xl mb-4'>
                    Case Stories
                </h1>
                <img src="./communities/com6.jpg" className='img-fluid my-2' alt="" />
                <img src="./communities/com7.jpg" className='img-fluid my-2' alt="" />
                <div className='row'>
                    <img src="./communities/com8.jpg" className='col-md-4 img-fluid my-2' alt="" />
                    <img src="./communities/com9.jpg" className='col-md-4 img-fluid my-2' alt="" />
                    <img src="./communities/com10.jpg" className='col-md-4 img-fluid my-2' alt="" />
                </div>
            </div>
            <b className='head-b text-[#5cb7e7] d-block my-3'>JALASHAY</b>
            <p className='pg mb-3'>
                Jalashay’, the dedicated water stewardship programme of Marico focuses on replenishing water resources to make a difference to communities and the environment. It takes into account the environmental, social, and economic concerns that might arise from water stressed regions and proactively undertakes efforts towards abating them. <b> The Jalashay programme is operated across three states of Maharashtra, Tamil Nadu and Gujarat.</b>
            </p>
            <div className='row'>
                <img src="./communities/com11.jpg" className='img-fluid col-md-8' alt="" />
                <img src="./communities/com12.jpg" className='img-fluid col-md-4' alt="" />
            </div>
            <img src="./communities/com13.jpg" className='img-fluid my-4' alt="" />

            <img src="./communities/com14.jpg" className='img-fluid my-4' alt="" />
            <img src="./communities/com15.jpg" className='img-fluid my-4' alt="" />

            <h1 className='text-[#4fb4e6] text-5xl max-md:text-3xl mb-4'>
                Case Stories
            </h1>
            <img src="./communities/com16.jpg" className='img-fluid my-4' alt="" />
            <img src="./communities/com17.jpg" className='img-fluid my-4' alt="" />

            <img src="./communities/com18.jpg" className='img-fluid my-4' alt="" />
            <b className='head-b text-[#5cb7e7] d-block my-3'>AFFORESTATION</b>

            <div className='bg-[#e8f1fa] p-3 rounded'>
                <p className='pg'>
                    To combat global warming, reduce air pollution, prevent soil erosion and allow local flora and fauna to thrive, we engage in afforestation activities. It has enabled us to curb the depletion of green cover and its impact on the local biodiversity. The projects aim to increase green cover around Marico's factory in an eco-sensitive zone. The local panchayat has allocated plots for this initiative, employing about 10 women from landless, marginalized backgrounds to maintain the afforested site in Maharashtra. The effect of our afforestation drives create socio-economic opportunities for local communities, fostering livelihood development in rural areas.  Additionally, forests improve the air and water quality, enhance soil health, and reduce the risk of flood.  By nurturing these vital ecosystems, we contribute to a healthier planet and a brighter future for generations to come. <br /><br />
                    In Jalgaon, the afforestation programme focuses on planting climate resilient Moringa crops to promote water smart crops. In Gujarat, the Miyawaki method is used for planting saplings on GIDC-allocated land. In Perundurai, SPICOT has allocated approximately 20 acres for Marico green cover projects. This initiative covers multiple states including Rajasthan, Assam, Himachal Pradesh, Meghalaya, Andhra Pradesh, West Bengal, Maharashtra, Tamil Nadu and Gujarat.
                </p>
                <div className='row'>
                    <img src="./communities/com19.jpg" className='img-fluid col-md-6 my-4' alt="" />
                    <img src="./communities/com20.jpg" className='img-fluid col-md-6 my-4' alt="" />
                    <img src="./communities/com21.jpg" className='img-fluid col-md-6 my-4' alt="" />
                    <img src="./communities/com22.jpg" className='img-fluid col-md-6 my-4' alt="" />
                </div>
                <p className='pg'>
                    The most significant impact of our afforestation efforts lies in carbon sequestration. As trees mature, they act as natural carbon sinks, absorbing and storing atmospheric carbon dioxide – a key greenhouse gas. This process actively mitigates climate change by reducing the overall CO2 present in the atmosphere. In essence, our afforestation programme serves as a potent tool for offsetting our operational carbon footprint. By actively removing CO2 from the atmosphere, the trees we plant supports our decarbonisation strategy and futureproofs our roadmap towards developing a climate-resilient business agenda.
                </p>
            </div>
            <div className='p-4 pg text-light rounded relative my-4' style={{ background: "linear-gradient(to right, #399dd6, #1e5aa1)" }}>
                <Leaf fill={"#9cceef"} top={"0%"} right={"0%"} width={"8vw"} animate={1} rotate={-90} />
                <h1 className='text-[#9cceef] text-5xl max-md:text-3xl mb-4'>
                    EDUCATION
                </h1>
                <b className='head-b text-light my-4'>NIHAR SHANTI PATHSHALA FUNWALA (NSPF)</b>
                <p className='pg my-3'>
                    As one of Marico’s signature brands that keep purpose at the centre of its existence, Nihar Naturals has focused on education and skill empowerment to initiate lasting change within society. Initiated about four years back, the Nihar Shanti Pathshala Funwala programme is focused on upskilling and empowering government school-teachers to resolve the pressing issue of lack of consistency and fluency in English Literacy, within the Indian education system. The programme intends to improve English reading and speaking proficiency among students from underserved areas. Over the years, contextualised content and comprehensive training processes have improved the teachers’ subject-matter knowledge and enabled them to engage better with students. Besides, accessibility of digital learning resources has enhanced the learning environment for students. <br /><br />
                    In partnership with various state governments, NSPF provides comprehensive teaching materials to government teachers to raise the standard of education in marginalised communities. The program is present across states like  Madhya Pradesh, Bihar, Chhatisgarh, Jharkhand, and Rajasthan (Alwar)covering over 50 aspirational districts. With the inclusion of scalable and engaging learning models, supported by digital and offline tools, the programmed helped to transform literacy rates across the nation. To amplify its impact, we have deployed WhatsApp Enterprise-based learning solutions. The use of advanced technology has enhanced the capability of teachers to provide instructions in English. These innovative, practical formats are designed to be engaging and suited to the needs of rural communities, ensuring effective learning for both teachers and students.
                </p>
                <b className='FY24 Performance my-4'>FY24 Performance</b>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='my-3'>
                            <span className='text-[#fff] text-5xl max-md:text-3xl mt-4'>
                                15.16
                            </span>
                            <span className='head-b'> lakh students</span>
                            <p className='pg'>
                                benefitted from the programme in
                                FY24
                            </p>
                        </div>
                        <div className='my-3'>
                            <span className='text-[#fff] text-5xl max-md:text-3xl mt-4'>
                                1.76
                            </span>
                            <span className='head-b'> lakh teachers</span>
                            <p className='pg'>
                                trained through WhatsApp & Workbook-led project.
                            </p>
                        </div>
                        <div className='my-3'>
                            <span className='text-[#fff] text-5xl max-md:text-3xl mt-4'>
                                0.71
                            </span>
                            <span className='head-b'> lakh</span>
                            <p className='pg'>
                                active teachers
                            </p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <img src="./communities/com24.jpg" className='img-fluid col-md-6 my-4' alt="" />
                    </div>
                </div>
            </div>
            <b className='FY24 Performance my-4'>FY24 Activities</b>
            <div className='row my-2 pb-2 border-b border-black'>
                <p className='col-md-4 md:border-r border-black'>
                    Madhya Pradesh is the first state to organise the fifth edition of <span className='text-[#2996cd] fw-bold'>‘Word Power Championship’</span> in Sehore.
                </p>
                <p className='col-md-4 md:border-r border-black'>
                    Nihar Shanti Pathshala Funwala (NSPF) hosted the <span className='text-[#2996cd] fw-bold'>‘WPC’</span> in Sehore, in association with Leap for word.
                </p>
                <p className='col-md-4'>
                    <span className='text-[#10a3ec] fw-bold'>10.3 lakh students</span> and <span className='text-[#10a3ec] fw-bold'>1.65 lakh teachers</span> participated from <span className='text-[#10a3ec] fw-bold'>52 districts</span> of Madhya Pradesh.
                </p>
            </div>
            <b className='head-b text-[#10a3ec] fx-bold italic'>Building Bridges & Illuminating Futures: Arti Kumari's Inspirational Journey in English Literacy</b>
            <div className='md:flex md:justify-between md:items-center my-4'>
                <div className='md:w-[60%]'>
                    <p className='pg my-2'>
                        <b>Introduction:</b> Arti Kumari, a dedicated teacher at Saint Girls Middle School in Ramgarh, Jharkhand, has transformed the lives of 239 students from grades 1 to 8. Overcoming personal challenges, Arti embraced the NSPF's English literacy program, showcasing the power of education to uplift communities.
                    </p>
                    <p className='pg my-2'>
                        <b>Background and Challenges:</b> Arti, having attended government school herself, struggled with the transition from Hindi to English during her graduation. Discovering the NSPF's English literacy program in 2021, she faced scepticism from colleagues but remained committed to her students. Completing the training, Arti recognized the program's potential for positive change.
                    </p>
                </div>
                <div className='md:w-[40%]'>
                    <img src="./Strategy/comc1.png" className='md:m-auto' alt="" />
                </div>

            </div>

            <p className='pg my-2'>
                <b>Student Achievements:</b> Arti's dedication bore fruit when her student, Nivika Kumari, excelled in the 2021 state-level Word Power Championship. Despite initial doubts, Nivika's success validated the program. When Nivika qualified for the Mumbai grand finale, Arti's support remained unwavering, leading to Nivika's third-rank finish, which turned sceptics into admirers.
            </p>
            <p className='pg my-2'>
                <b>Impact and Advocacy:</b> Arti promotes the program to fellow teachers and engages parents through meetings, WhatsApp groups, and online sessions. A significant moment was when former student Rima, now in the Bihar Police Department, credited English literacy for her success. This strengthened Arti's determination to ensure her students achieve English proficiency.
            </p>
            <p className='pg my-2'>
                <b>Conclusion:</b> Arti Kumari's journey exemplifies the transformative power of education. By teaching English, she lights the path for a brighter future, proving that determination and education can change lives for the better.
            </p>
            <img src="./communities/com25.jpg" className='img-fluid my-4' alt="" />

            <div className='p-4 pg text-light rounded relative my-4' style={{ background: "linear-gradient(50deg, #019cd5, #025293)" }}>
                <Leaf fill={"#9cceef"} top={"2%"} right={"2%"} width={"10vw"} animate={1} />
                <Leaf fill={"#9cceef"} bottom={"0%"} right={"0%"} width={"8vw"} animate={1} />
                <img src="./communities/comc2.jpg" className='img-fluid my-4 d-block m-auto w-[90%]' alt="" />
            </div>
            <h1 className='text-[#4fb4e6] text-5xl max-md:text-3xl mb-4'>
                Case Stories
            </h1>
            <img src="./communities/com27.jpg" className='img-fluid my-4' alt="" />
            <b className='head-b fx-bold '>The key outcomes include:</b>
            <img src="./communities/com28.jpg" className='img-fluid my-4' alt="" />
            <img src="./communities/com29.jpg" className='img-fluid my-4' alt="" />

            <div className='p-4 pg text-light rounded relative my-4' style={{ background: "linear-gradient(50deg, #019cd5, #025293)" }}>
                <h1 className='text-[#9cceef] text-7xl max-md:text-3xl mb-4'>
                    Social Innovation
                </h1>
                <b className='head-b text-light my-4'>MARICO INNOVATION FOUNDATION</b>
                <p className='pg my-2'>
                    The Marico Innovation Foundation (MIF) champions groundbreaking ideas from social institutions and businesses to cultivate a vibrant innovation ecosystem within India. Established in 2003, MIF fosters impactful and scalable solutions through its multifaceted programmes.  By nurturing innovative organisations and celebrating their achievements, it endeavours to empower a new generation of Indian innovators who are primed to shape a more sustainable and prosperous future. <br /><br />
                    Over the past 20 years, MIF has earned a reputation as one of India’s most coveted innovation focused platforms, which recognises disruptive Indian innovations and provides support to turn these ideas into reality. Through its flagship programmes, MIF has unlocked the potential of 100+ disruptive innovations.<br /> <br />
                </p>
                <b className='pg'>Scale Up Programme </b>
                <p className='pg my-2'>
                    MIF recognises innovation as a critical driver of sustainable development and societal progress.  This conviction fuels a multifaceted approach to catalyse positive change.  MIF's flagship initiative, the Scale Up Programme, identifies high-potential early-stage businesses. These ventures receive tailored mentorship, valuable networking opportunities and potential access to capital.  MIF understands that a single innovation can have a ripple effect, transforming entire ecosystems.  By nurturing exceptional innovations with demonstrably positive societal impact, MIF empowers a new generation of changemakers and propels India towards a brighter future.
                </p>
                <img src="./communities/com30.jpg" className='img-fluid my-4' alt="" />
            </div>
            <b className='head-b my-4'>FY24 Highlights</b>
            <p className='pg'>
                MIF onboarded new and impactful businesses to nurture them with essential mentorship, networking opportunities and access to capitals. Some of them are mentioned here:
            </p>
            <img src="./communities/com31.jpg" className='img-fluid my-4' alt="" />
            <div className='row'>
                <div className='col-md-7'>
                    <b className='head-b my-4 text-[#10a3ec] relative'>EAT RIGHT PROGRAMME
                        <Leaf fill={"#10a3ec"} bottom={"0%"} right={"-40%"} width={"6vw"} animate={1} />

                    </b>
                    <p className='pg my-2'>
                        For the past six years, Marico has been collaborating with Food Safety and Standards Authority of India (FSSAI)
                        for the Eat Right India movement to promote healthy eating. It is aligned with the government’s public health programmes such as ‘Ayushman Bharat’, ‘Swachh Bharat Mission’ and ‘POSHAN Abhiyaan’. <br /><br />
                        In FY24, the programme reached 16 lakh beneficiaries through initiatives like Water Sanitation and Hygiene (WASH) in schools, nutrition-based learning and sensitisation of street vendors on health and hygiene practices.
                    </p>
                </div>
                <div className='col-md-5'>
                    <img src="./communities/com32.jpg" className='img-fluid my-4' alt="" />
                </div>
            </div>
            <img src="./communities/com33.jpg" className='img-fluid my-4' alt="" />

            <div className='p-4 pg text-light rounded relative my-4' style={{ background: "linear-gradient(50deg, #019cd5, #025293)" }}>
                <Leaf fill={"#84c4ec"} top={"-5%"} right={"-5%"} width={"10vw"} animate={1} />
                <h1 className='text-[#9cceef] text-7xl max-md:text-3xl '>
                    IMPACT EVALUATION
                </h1>
                <h3 className='text-[#9cceef] text-4xl max-md:text-1xl mb-4'>
                    OF CSR PROGRAMMES
                </h3>
                <p className='pg'>
                    In FY24, we appointed RTI International, an external agency, to conduct impact evaluation for
                    our flagship programmes- Parachute Kalpavriksha Foundation, Jalashay, Nihar Shanti Pathshala Funwala and Marico Innovation Foundation. The agency applied IRECS (Impact assessment using five pillar frameworks of IRECS: Inclusiveness, Relevance, Expectation, Convergence, Sustainability.)
                    <br /><br />
                    Sample size taken for each of the programs as mentioned here
                </p>
                <br />
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='border-end'>
                            <p>
                                Parachute Kalpavriksha Foundation
                            </p>
                            <h4 className='text-3xl max-md:text-xl'>
                                70 farmers
                            </h4>
                            <p>in</p>
                            <h4 className='text-3xl max-md:text-xl mb-3 border-bottom pb-2 w-fit'>
                                19 villages
                            </h4>
                            <p>
                                Nihar Shanti
                                Pathshala Funwala
                            </p>
                            <h4 className='text-3xl max-md:text-xl'>
                                6 schools
                            </h4>
                            <p>in</p>
                            <h4 className='text-3xl max-md:text-xl border-bottom pb-2 w-fit'>
                                2 districts
                            </h4>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='border-end'>
                            <p className=''>
                                Jalashay
                            </p>
                            <h4 className='text-3xl max-md:text-xl'>
                                35 farmers
                            </h4>
                            <p>in</p>
                            <h4 className='text-3xl max-md:text-xl mb-3 border-bottom pb-2 w-fit'>
                                12 villages
                            </h4>
                            <p>
                                Marico Innovation Foundation
                            </p>
                            <h4 className='text-3xl max-md:text-xl border-bottom pb-2 w-fit'>
                                4 Companies
                            </h4>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='border-end'>
                            <p className=''>
                                Tamil Nadu
                            </p>
                            <h4 className='text-3xl max-md:text-xl'>
                                20 farmers
                            </h4>
                            <p>Maharashtra</p>
                            <h4 className='text-3xl max-md:text-xl border-bottom pb-2 w-fit'>
                                15 farmers
                            </h4>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src="./communities/com34.jpg" className='img-fluid my-4' alt="" />
                    </div>
                </div>
            </div>
            <b className='head-b'>Key outcomes of the assessment are highlighted below :</b>
            <div className='p-4 pg bg-[#d5eefb] rounded relative my-4 row'>
                <b className='text-[#10a3ec] pg border-dark d-block py-2 border-bottom'>Parachute Kalpavriksha Foundation</b>
                <div className='col-md-9 row'>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The Kalpavriksha programme is inclusive as almost 85% of the farmers enrolled are marginal and small farmers.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        It promotes scientific farm management while boosting productivity, thereby creating relevant social interventions for improving the lives of farmers.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The Kalpavriksha programme makes efforts to align with local government policies such as ‘double farmers income’,  ‘more crop per drop’ and the National Mission for Sustainable Agriculture.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                    The farmers are highly dependent on the programme implementation team and thus needs to build on sustainability aspects. 
                    </p>
                </div>
                <div className='col-md-3'>
                    <p className='my-3'>
                        FSPs proved to be an effective
                        mode of handholding farmers on pest, disease, nutrient, and water management issues. Call centres were also used to help farmers access information and receive answers
                        to queries. Software applications were also deployed to increase the knowledge of farmers.
                    </p>
                </div>
                <img src="./communities/com35.jpg" className='img-fluid my-4' alt="" />
            </div>
            <div className='p-4 pg bg-[#ebebec] rounded relative my-4 row'>
                <b className='pg border-dark d-block py-2 border-bottom'>Jalashay</b>
                <div className='col-md-9 row'>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The programme in Tamil Nadu focuses on large farmers as it needs to collaborate with farmers who can offer at least 2+ acres of land for building farm ponds. The small and marginal farmers are indirectly benefitted from the effort through the overall enhancement of the groundwater level in the region.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        It is highly relevant for the selected operational area as it falls under moderate to high water stress regions of Maharashtra and Tamil Nadu.  Moreover, the farmers in the area are mostly dependent on rainfed farming. Therefore, water storage is of immense importance to them.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The watershed development programme makes efforts to align with local government agencies such as Zilla Panchayat as well as various government departments including agriculture, horticulture and irrigation. It is also aligned with priorities of doubling farmers income, ‘more crop per drop’ and ‘Har Khet Ko Pani’.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The programme has leveraged community participation to ensure long term sustainability of infrastructure. Under the farm pond project in Theni, the project leverages 15% of the financing of the farm pond from the farmer to ensure its maintenance.
                    </p>
                </div>
                <div className='col-md-3'>
                    <p className='my-3'>
                        The watershed project is designed based on consideration of local hydrogeology and farmers have reported increase in the groundwater table and farm production after the implementation of the project. All
                        the water harvesting structures were found to be designed in alignment with necessary technical considerations.
                    </p>
                </div>
                <img src="./communities/com36.jpg" className='img-fluid my-4' alt="" />
            </div>
            <div className='p-4 pg bg-[#ebebec] rounded relative my-4 row'>
                <b className='pg border-dark d-block py-2 border-bottom'>Nihar Shanti Pathshala Funwala</b>
                <div className='col-md-9 row'>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The programme is inclusive, in terms of its outreach, as it targets the bottom of the pyramid communities through government schools.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The programme is not only contributing to multiple SDG targets [SDG 4.4, SDG 4.5, SDG 4.6, & SDG 4-C, but is also aligned to
                        the idea of mother-tongue based learning propagated under the NEP 2020 (GoI). It is also in sync with the needs of government school teachers and students.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The education system shows
                        strong alignment, evidenced by Jharkhand government's integration of NHPF content into the DIKSHA portal. However, one of the key implementation barriers especially up to class 3, is that the implementing agency, LFW, is not a technical support partner for FLN in the state. Thus, convergence with FLN can be further strengthened.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        On one hand, high degree of government buy-in and capacity building of teachers increases the sustainability of the programme,
                        but on the other hand the non- obligatory participation of teachers poses challenges for uniformity
                        and long-term continuity. Complete dependence on the implementation partner’s team for the two critical functions – (i) teacher support and (ii) programme monitoring also poses some sustainability risk.
                    </p>
                </div>
                <div className='col-md-3'>
                    <p className='my-3'>
                        The watershed project is designed based on consideration of local hydrogeology and farmers have reported increase in the groundwater table and farm production after the implementation of the project. All
                        the water harvesting structures were found to be designed in alignment with necessary technical considerations.
                    </p>
                </div>
                <img src="./communities/com37.jpg" className='img-fluid my-4' alt="" />
            </div>
            <div className='p-4 pg bg-[#d5eefb] rounded relative my-4 row'>
                <b className='text-[#10a3ec] pg border-dark d-block py-2 border-bottom'>Marico Innovation Foundation</b>
                <div className='col-md-9 row'>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        MIF's support is inherently inclusive, as it transcends specific sectors and business dimensions. This approach has yielded benefits, impacting a diverse array of organisations and end-beneficiaries, encompassing women, lactating and pregnant mothers, children, students, cancer patients as well as farmers and micro-entrepreneurs.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        MIF's scale-up programme is designed to address the functional needs of startups with the goal of generating a positive socio-economic impact on society. This initiative
                        not only tackles the challenges encountered by startups but also contributes to the overall well-being of the larger ecosystem.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        MIF's support for startups aligns seamlessly with the priorities and initiatives of the Government of India, including flagship programmes like Make in India and Start-up India. Furthermore, it actively contributes to achieving seven SDGs, emphasising the organization's dedication to aligning with India's overarching vision for sustainable development.
                    </p>
                    <p className='col-md-6 my-3 border-dark border-end'>
                        The sustainability of MIF's support is evident, as all organisations studied reported having institutionalised the learnings to ensure ongoing and sustained benefits for their operations.
                    </p>
                </div>
                <div className='col-md-3'>
                    <p className='my-3'>
                        MIF's support for startups has expedited their growth, subsequently leading to positive impacts on society across social, environmental and economic dimensions.
                    </p>
                </div>
                <img src="./communities/com38.jpg" className='img-fluid my-4' alt="" />
            </div>
        </div>

    )
}

export default Communities