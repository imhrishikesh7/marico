import React from 'react'
import Message from './Components/Message';
import Impact from './Components/Impact';
import StewardsJourney from './Components/StewardsJourny';
import Leaf from '../../Components/Leaf/Leaf';
import { motion } from 'framer-motion';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../../Utilities/useAnimation';

const EnvironmentMain = () => {

  return (
    <div className='pg marginal'>
      <Message />
      <Impact />
      <StewardsJourney />

      <div className='p-3 my-4 relative '>
        <Leaf fill={"#94bd81"} bottom={"0%"} right={"-2vw"} width={"12vw"} animate={1} />
        <motion.img {...fadeIn} src="./Environment/env1.jpg" alt="" />
      </div>
      <div className='p-3 my-4'>

        <div className='row'>
          <div>
            <motion.img {...slideInFromLeft} src="./Environment/env2.jpg" className='img-fluid' alt="" />
          </div>
          <div className='col-md-6'>
            <h3 className='head-b text-dgreen mb-3'>
              Transitioning towards Zero Hazardous Waste to Landfill (ZHWL )
            </h3>
            <p className='pg'>
              As part of our overall endeavour to mitigate environmental risks, we are committed to minimise waste generation across our operations. As on FY24, most Marico facilities in India have adopted the ‘Zero Hazardous Waste to Landfill’ principle.
              <br /><br />
              This accomplishment not only reiterates our to minimise
              our ecological footprint but also sets the precedent for responsible waste management. It is a significant step towards environmental sustainability and plays an integral role in reducing the impact of our industrial activities on the ecosystem. Three of our manufacturing units, namely Perundurai and two units at Guwahati have achieved ZHWL through rigorous waste management practices i.e. recycling and waste to energy.
              <br /><br />
              Hazardous waste generated from these sites is periodically disposed to cement manufacturers/recyclers, as per the Central Pollution Control Board (CPCB) guidelines. Our plants have agreement with registered recyclers/incinerators approved
              by State Pollution Control Boards and all hazardous waste generated in these plants is directly sent to authorised recyclers for repurposing or disposal.
            </p>
          </div>
          <div className='col-md-6'>
            <motion.img {...fadeIn} src="./Environment/env3.jpg" className='w-75 d-block m-auto' alt="" />
          </div>
          <img src="./Environment/env4.jpg" alt="" />
          <div className='col-md-6'>
            <h3 className='head-b text-dgreen mb-3'>
              Creating natural carbon
              sinks towards ecosystem restoration
            </h3>
            <p className='pg'>
              Exercising the principles of biodiversity conservation, we have developed a Miyawaki forest within the periphery of three of our manufacturing facilities – Perundurai, Puducherry and Sanand. This initiative covers over 30,000 trees (more than 75 types of floral species) spread across 12,000 sq.mt. area. We attempt to sustain the forest through optimal usage of resources and processes that have minimal environmental footprint like the use of organic fertilizers, recycled water etc.
            </p>
          </div>
          <div className='col-md-6'>
            <motion.img {...fadeIn} src="./Environment/env5.jpg" className='w-75 d-block m-auto rounded' alt="" />
          </div>
          <img src="./Environment/env6.jpg" alt="" />
          <div className='col-md-4'>
            <h3 className='fs-3 text-dgreen mb-3'>
              Building Resilience: Adoption of Social Accountability principles across our operational footprint
            </h3>
            <p className='pg'>
              SA8000 is an internationally recognised standard for social accountability, crafted by Social Accountability International (SAI). It delineates requirements for organisations to cultivate, sustain and implement socially responsible practices within the workplace.
            </p>
          </div>
          <div className='col-md-7'>
            <motion.img {...fadeIn} src="./Environment/env7.jpg" className='d-block m-auto rounded' alt="" />
          </div>
          <h3 className='fs-3 text-dgreen my-3'>
            Social Responsibility
          </h3>
          <div className='col-md-7 px-2 border-end border-dark'>
            <motion.img {...fadeIn} src="./Environment/env8.jpg" alt="" />
          </div>
          <motion.div {...slideInFromRight} className='col-md-4  px-2'>
            <p className='fw-bold fs-5 mb-4'>
              In FY23-24, Marico initiated a series of internal audits specifically focusing on the SA8000 guidelines, which emphasise social accountability and adherence to workplace standards. Detailed assessments were carried out at three facilities: Jalgaon, Perundurai and Puducherry.
            </p>
            <p className='fs-5 '>
              These assessments included a thorough review of labour practices, health and safety protocols, management systems and other critical areas outlined in the standard. Each facility underwent an extensive evaluation to ensure compliance with stringent requirements.
            </p>
          </motion.div>
          <h3 className='fs-3 text-dgreen mt-4'>
            Mapping environmental footprint of international operations
          </h3>
          <p className='fs-5 mt-2'>
            As part of Marico’s sustainability framework, we are committed to transforming the environmental performance of our international operations. This process commenced in FY20 with the collection, analysis and reporting of environmental performance data on the three critical parameters – Energy, GHG Emissions and Water. Going forward, we will be measuring all KPIs that attribute to Marico’s group sustainability framework.
          </p>
          <motion.img {...fadeIn} src="./Environment/env9.jpg" alt="" />
          <motion.img {...fadeIn} src="./Environment/env10.jpg" className='rounded w-75 d-block m-auto img-fluid' alt="" />
        </div>
        <motion.img {...fadeIn} src="./Environment/env11.jpg" alt="" />
        <motion.img {...fadeIn} src="./Environment/env12.jpg" alt="" />
        <motion.h3 {...slideInFromLeft} className='fs-3 text-dgreen mt-4'>
          Rethinking Plastic for a Sustainable Future
        </motion.h3>
        <motion.p {...slideInFromLeft} className='fs-5 mt-2'>
          Plastic has long been the go-to choice for product packaging due to its lightweight and protective properties. However, we recognise the environmental impact of plastic pollution and our research and development team is actively seeking alternatives that can effectively replace the use of plastic for packaging.
        </motion.p>
        <motion.img {...fadeIn} src="./Environment/env13.jpg" alt="" />

        <div className='row my-3'>
          <motion.div {...slideInFromLeft} className='col-md-6'>
            <p className='pg'>
              We have taken a significant step to recover the plastic waste generated through our processes. This waste is converted into granules and reused for packaging production, thereby minimising virgin plastic use.
              <br /><br />
              By embracing innovation and collaboration, we aim to minimise plastic waste and contribute to a cleaner, greener future.
            </p>
            <motion.div {...slideInFromLeft} className='my-4 w-50 border-bottom border-dark pb-2'>
              <h1 className='mb-2 fs-1 text-dgreen'>1,343.9 <sub>MT</sub></h1>
              <p>
                Overall material savings due to the aforementioned sustainable packaging interventions in FY24
              </p>
            </motion.div>
            <motion.div {...slideInFromLeft} className='my-2 w-50 border-bottom border-dark pb-2'>
              <h1 className='mb-2 fs-1 text-dgreen'>4,800.6 <sub>tCO2e</sub></h1>
              <p>
                Overall emissions avoided due to the aforementioned sustainable packaging interventions in FY24
              </p>
            </motion.div>
          </motion.div>
          <div className='col-md-6'>
            <motion.img {...fadeIn} src="./Environment/env14.jpg" className='w-75' alt="" />
          </div>


        </div>
        <div className='row my-4'>

          <div className='col-md-4'>
            <h3 className='fs-4 fw-bold text-dgreen mb-2'>
              #SuccessStories
            </h3>
            <h3 className='fs-5 fw-bold my-2'>
              Transitioning to recycled plastic (r-PET)
              for Brand Nihar
            </h3>
            <p className='pg'>
              Marico has embarked on a
              journey towards sustainability by incorporating recycled plastic (R-PET) into its packaging. This shift reflects Marico's recognition of the increasing environmental awareness among consumers and the critical need to implement sustainable practices to mitigate environmental impact
              <br /><br />
              The introduction of R-PET in value added hair-oil portfolio presented significant challenges, particularly in maintaining the sensory attributes and aesthetic appeal of the products. Marico adopted a methodical approach to address these challenges before market release. The process involved identifying and assessing vendors, conducting stability studies with pilot trials, executing transit trials, setting up additional equipment
            </p>
          </div>
          <div className='col-md-4'>
            <p className='pg'>
              or making necessary modifications, and finally, producing and distributing the products in the market.
              <br /><br />
              The smaller SKUs of the value-added hair oil brand contains 20% post-consumer recycled plastic (PCR) while the larger ones contain 10% PCR. Additionally, high PCR trials for other brands are underway, with implementation planned for FY26 in compliance with government regulations.
            </p>
            <h3 className='fs-5 fw-bold my-2'>
              Optimizing use of paper as a resource
              in packaging
            </h3>
            <p className='pg'>
              In FY24, Marico implemented High- Resolution Computed Tomography (HRCT) paper, significantly reducing overall virgin-paper consumption without compromising strength. The project involved the removal of centre plates and the optimization of CFC dimensions across various product lines at the Perundurai and Puducherry plants.
            </p>
          </div>
          <div className='col-md-4'>
            <p className='pg'>
              These changes were part of Marico's broader circularity strategy to reduce paper usage while maintaining product quality and strength, demonstrating the company's commitment to environmental responsibility and resource efficiency.
            </p>
            <h3 className='fs-5 fw-bold my-2'>
              R-LDPE in secondary packaging
            </h3>
            <p className='pg'>
              Marico has made significant strides in sustainability by incorporating recycled LDPE in the packaging of various brands.
            </p>
            <h2 className='fs-3 my-4'>
              Currently, <span className='text-dgreen'>50% of recycled LDPE</span> is used in the packaging of several value added hair oil and personal care products.
            </h2>
            <h3 className='fs-5 fw-bold my-2'>
              Strategic alliances to scale up the sustainable plastic agenda for  India Inc
            </h3>
          </div>
        </div>
        <motion.img {...fadeIn} src="./Environment/env15.jpg" className='img-fluid my-4' alt="" />
        <motion.img {...fadeIn} src="./Environment/env16.jpg" className='img-fluid my-4' alt="" />
        <motion.img {...fadeIn} src="./Environment/env17.jpg" className='img-fluid my-4' alt="" />

        <div className='my-4'>
          <h3 className='fs-5 fw-bold my-2'>
            Applicability of Samyut framework
          </h3>
          <p className='pg'>
            The Samyut framework is applicable for all our critical value chain partners, business associates and approved sub-contractors, including raw material and packaging material suppliers, logistics and transportation partners, warehouse and depot associates, third party manufacturers and service providers. Critical value chain partners are defined using three criteria – Highest procurement share or volume share in the respective category, uniqueness of materials, products and/or services and dedicated association with Marico. We expect all our partners to refer and adhere to the terms indicated under Marico’s Samyut policy and apply the outlined principles in their businesses. <br /><br />
          </p>
          <h3 className='fs-5 my-2 text-dgreen'>
            Approach
          </h3>
          <p className='pg'>
            Under the purview of the Samyut framework, we have implemented a maturity-based transition programme for critical supply chain partners, to foster joint sustainability efforts. The programme is split into three levels: Level 1 - Educate, Level 2- Evaluate and Level 3- Evolve.
          </p>
          <motion.img {...fadeIn} src="./Environment/env18.jpg" className='img-fluid my-4 w-full lg:w-[80%]' alt="" />

        </div>

        <div className='d-flex flex-wrap my-4'>
          <h3 className='fs-5 w-full fw-bold my-4'>
            FY24 progress
          </h3>

          <motion.div {...slideInFromLeft} className='w-full sm:w-[48%] lg:w-[30%] border-bottom border-dark my-2 pb-2 mx-auto sm:mx-2'>
            <h1 className='mb-2 fs-1 text-dgreen'>82%</h1>
            <p>
              critical suppliers completed Level 1 certification. This includes raw materials suppliers, packaging materials suppliers and third-party manufacturing units
            </p>
          </motion.div>

          <motion.div {...slideInFromLeft} className='w-full sm:w-[48%] lg:w-[30%] border-bottom border-dark my-2 pb-2 mx-auto sm:mx-2'>
            <h1 className='mb-2 fs-1 text-dgreen'>26%</h1>
            <p>
              critical suppliers completed Level 2 certification. This includes raw materials suppliers, packaging materials suppliers and third-party manufacturing units
            </p>
          </motion.div>

          <motion.div {...slideInFromLeft} className='w-full sm:w-[48%] lg:w-[30%] border-bottom border-dark my-2 pb-2 mx-auto sm:mx-2'>
            <h1 className='mb-2 fs-1 text-dgreen'>94%</h1>
            <p>
              procurement by spends was from local/ indigenous suppliers
            </p>
          </motion.div>

          <motion.div {...slideInFromLeft} className='w-full sm:w-[48%] lg:w-[30%] border-bottom border-dark my-2 pb-2 mx-auto sm:mx-2'>
            <h1 className='mb-2 fs-1 text-dgreen'>19%</h1>
            <p>
              traceability (upto Tier-II levels) were established for agricultural raw materials
            </p>
          </motion.div>
          <motion.img {...fadeIn} src="./Environment/env19.jpg" className='img-fluid my-4 w-full lg:w-[80%]' alt="" />
        </div>
        <div className='my-4'>
          <h3 className='fs-5 fw-bold my-2'>
            Samyut’s Level 2 framework – Deepening ESG Risk Management across the Value Chain
          </h3>
          <p className='pg mb-4'>
            Our value chain is a complex ecosystem comprising interconnected products and services. Within this network, Environmental, Social, and Governance (ESG) risk factors are intricately interwoven across all levels. To ensure transparency, accountability and responsible sourcing practices throughout this chain, Marico has developed its Level 2 principles as the most critical step within its Samyut responsible sourcing programme.
          </p>
          <h3 className='fs-5 fw-bold my-2'>
            Level 2: Rigorous Evaluation for Maximum Impact
          </h3>
          <p className='pg mb-4'>
            Engagement with critical suppliers is central to the Level 2 approach. Here, we utilise ethical, environmental and social parameters as a set of quantifiable Key Performance Indicators (KPIs). It helps to rigorously evaluate suppliers' commitments, compliance with regulations, potential risks and opportunities for maximising sustainability within the entire business ecosystem
          </p>
          <h3 className='fs-5 fw-bold my-2'>
            Independent Expertise for Objective Assessment
          </h3>
          <p className='pg mb-4'>
            Level 2 assessments are typically conducted by independent third-party auditors. These auditors possess extensive cross-sector experience in sustainable supply chain management. It helps to accurately scrutinise the voluntary claims made by critical suppliers in Level 1 and identify potential risks and opportunities that could have a mutually beneficial impact on both Marico and the suppliers' own ecosystems.
            <br /><br />
            By combining Marico's Samyut framework with their own experience, these independent auditors can provide an objective assessment of supplier practices. This in-depth evaluation fosters a deeper understanding of supplier performance and allows Marico to work collaboratively with its partners to address any identified risks and make way for positive sustainability outcomes.
          </p>
          <h3 className='fs-5 fw-bold my-2'>
            Marico's ESG risk & opportunity-based supplier audit framework
          </h3>
          <motion.img {...fadeIn} src="./Environment/env20.jpg" className='img-fluid my-4 w-full lg:w-[80%]' alt="" />
        </div>
        <div className='my-4'>
          <h3 className='fs-5 text-green fw-bold my-2'>
            From Farm to Facility: Marico's Commitment to Tier 2 Traceability in Agricultural Sourcing
          </h3>
          <p className='pg'>
          We recognise the importance of venturing deeper into the agricultural supply chain to achieve tier 2 traceability for our raw materials. This necessitates gaining visibility into the very farms and agricultural practices that cultivate the ingredients that form the foundation of our products.
          <br /><br />
          While achieving tier 2 traceability presents a complex challenge, we remain steadfast in our commitment to extend responsible sourcing parameters beyond immediate suppliers. Several strategic methods are being explored to achieve this objective. One approach involves cultivating partnerships with certified farms and farmer cooperatives that uphold stringent sustainability standards. This collaborative approach allows for rigorous verification of agricultural practices and the sourcing locations of our raw materials. By leveraging innovative solutions, we are determined to establish transparent and immutable records, meticulously tracking the journey of our raw materials from the farm gate to our processing facilities.
          </p>
          <motion.img {...fadeIn} src="./Environment/env21.jpg" className='img-fluid my-4 w-full' alt="" />
          <motion.img {...fadeIn} src="./Environment/env22.jpg" className='img-fluid my-4 w-full lg:w-[80%]' alt="" />
        </div>

      </div>

    </div>
  )
}

export default EnvironmentMain;
