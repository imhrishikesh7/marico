import React from 'react'
import Headings from '../Components/Headings/Headings'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { slideUp } from '../Utilities/useAnimation';
const CorporateInfo = () => {
    return (
        <div className='marginal'>
            <Headings
                he1={"Corporate"}
                he2={"Information"}
                clr2={"#87C54C"}
                clr={"#87C54C"}
            />
            <div className='row'>
                <div className='col-md-4'>
                    <h3 className='text-blue fs-5 fw-bold'>COMPANY SECRETARY & COMPLIANCE
                        OFFICER</h3>
                    <p className='fs-5 fw-bold'>Mr. Vinay M A </p>
                    <motion.ul {...slideUp} className='my-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>AUDIT COMMITTEE</h3>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Milind Barve
                            <p className='pg fw-normal'>Chairman</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Ms. Apurva Purohit
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Ananth Sankaranarayanan
                            <p className='pg fw-normal'>
                                Member (w.e.f. January 1, 2024)
                            </p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Vinay M A
                            <p className='pg fw-normal'>
                                Secretary to the Committee
                            </p>
                        </li>
                    </motion.ul>
                    <motion.ul {...slideUp} className='my-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>
                            NOMINATION AND REMUNERATION
                            COMMITTEE
                        </h3>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Rajeev Vasudeva
                            <p className='pg fw-normal'>Chairman</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Ms. Apurva Purohit
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Rajan Bharti Mittal
                            <p className='pg fw-normal'>
                                Member (w.e.f. January 1, 2024)
                            </p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Amit Prakash
                            <p className='pg fw-normal'>
                                Secretary to the Committee
                            </p>
                        </li>
                    </motion.ul>
                    <motion.ul {...slideUp} className='my-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>
                            CORPORATE SOCIAL RESPONSIBILITY
                            COMMITTEE
                        </h3>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Harsh Mariwala
                            <p className='pg fw-normal'>Chairman</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Saugata Gupta
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Milind Barve
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Ms. Nayantara Bali
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Amit Bhasin
                            <p className='pg fw-normal'>
                                Secretary to the Committee
                            </p>
                        </li>
                    </motion.ul>
                </div>

                <div className='col-md-4'>
                <motion.ul {...slideUp} className='mb-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>RISK MANAGEMENT COMMITTEE</h3>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Milind Barve
                            <p className='pg fw-normal'>Chairman</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Saugata Gupta
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Pawan Agrawal
                            <p className='pg fw-normal'>
                                Member & Secretary to the Committee
                            </p>
                        </li>
                    </motion.ul>
                    <motion.ul {...slideUp} className='my-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>
                            STAKEHOLDERS’ RELATIONSHIP
                            COMMITTEE
                        </h3>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Milind Barve
                            <p className='pg fw-normal'>Chairman</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Rajendra Mariwala
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Saugata Gupta
                            <p className='pg fw-normal'>Member</p>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Mr. Vinay M A
                            <p className='pg fw-normal'>
                                Secretary to the Committee
                            </p>
                        </li>
                    </motion.ul>
                    <motion.ul {...slideUp} className='my-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>
                            BANKERS
                        </h3>
                        <li className='pg my-2'>
                            State Bank of India
                        </li>
                        <li className='pg my-2'>
                            Axis Bank Limited
                        </li>
                        <li className='pg my-2'>
                            BNP Paribas
                        </li>
                        <li className='pg my-2'>
                            Citibank N.A.
                        </li>
                        <li className='pg my-2'>
                            HDFC Bank Limited
                        </li>
                        <li className='pg my-2'>
                            ICICI Bank Limited
                        </li>
                        <li className='pg my-2'>
                            Kotak Mahindra Bank Limited
                        </li>
                        <li className='pg my-2'>
                            Standard Chartered Bank
                        </li>
                        <li className='pg my-2'>
                            The Hong Kong and Shanghai <br /> Banking Corporation Limited
                        </li>
                        <li className='pg my-2'>
                            Federal Bank
                        </li>
                    </motion.ul>
                    <h3 className='text-blue fs-5 fw-bold mb-1'>
                        STATUTORY AUDITORS
                    </h3>
                    <p className='fs-5 fw-bold mb-4'>
                        M/s. B S R & Co. LLP
                    </p>
                    <h3 className='text-blue fs-5 fw-bold mb-1'>
                        INTERNAL AUDITORS
                    </h3>
                    <p className='fs-5 fw-bold mb-4'>
                        Deloitte Touche Tohmatsu India LLP
                    </p>
                    <h3 className='text-blue fs-5 fw-bold mb-1'>
                        COST AUDITOR
                    </h3>
                    <p className='fs-5 fw-bold mb-4'>
                        M/s. Ashwin Solanki & Associates
                    </p>
                </div>

                <div className='col-md-4'>
                    <h3 className='text-blue fs-5 fw-bold mb-1'>
                        SECRETARIAL AUDITOR
                    </h3>
                    <p className='fs-5 fw-bold mb-4'>
                        Dr. K. R. Chandratre
                    </p>
                    <h3 className='text-blue fs-5 fw-bold mb-1'>
                        REGISTERED OFFICE
                    </h3>
                    <p className='fs-5 mb-4'>
                        7 th Floor, Grande Palladium, 175,  CST Road, Kalina, Santacruz (East), Mumbai 400 098
                    </p>
                    <motion.ul {...slideUp} className='mb-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>OUR PRESENCE</h3>
                        <li className='fs-5 fw-bold my-2'>
                            Factories
                            <span className='pg fw-normal'> – 15
                                (7 in India and 8 overseas)</span>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Regional Offices
                            <span className='pg fw-normal'> – 5 in India</span>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Depots
                            <span className='pg fw-normal'> – 24 in India</span>
                        </li>
                        <li className='fs-5 fw-bold my-2'>
                            Overseas Offices
                            <span className='pg fw-normal'> – 24</span>
                        </li>
                    </motion.ul>

                    <motion.ul {...slideUp} className='my-4 custom-list'>
                        <h3 className='text-blue fs-5 fw-bold '>
                            WEBSITES
                        </h3>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.marico.com" >
                                www.marico.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.niharnaturals.com" >
                                www.niharnaturals.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.parachuteadvansed.com" >
                                www.parachuteadvansed.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.saffolalife.com" >
                                www.saffolalife.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.fittify.in" >
                            www.fittify.in
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.setwet.com" >
                            www.setwet.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.beardo.in" >
                            www.beardo.in
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.mycocosoul.com" >
                            www.mycocosoul.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.puresense.co.in" >
                            www.puresense.co.in
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.justherbs.in" >
                            www.justherbs.in
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.true-elements.com" >
                            www.true-elements.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.maricoinnovationfoundation.org" >
                            www.maricoinnovationfoundation.org
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.parachutekalpavriksha.org" >
                            www.parachutekalpavriksha.org
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.studioxstyle.com" >
                            www.studioxstyle.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.plixlife.com" >
                            www.plixlife.com/
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://ascentfoundation.in/" >
                            https://ascentfoundation.in/
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.parachuteadvansedafrica.com" >
                            www.parachuteadvansedafrica.com
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://coconutforlife.org/" >
                            https://coconutforlife.org/
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://justforbaby.co/" >
                            https://justforbaby.co/
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://www.parachuteadvansedcis.com/" >
                            https://www.parachuteadvansedcis.com/
                            </Link>
                        </li>
                        <li className='pg my-2 underline'>
                            <Link to="https://sustainability.marico.com/" >
                            https://sustainability.marico.com/
                            </Link>
                        </li>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}

export default CorporateInfo