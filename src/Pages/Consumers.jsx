import React from 'react'

function Consumers() {
  return (
    <div className='marginal'>
        <div>
              <p className='py-4 head-c'>CONSUMERS</p>
              <p className='head-b text-[#faa830]'>Prioritising consumer</p>
              <p className='head-a text-[#faa830]'>expectations</p>
        </div>
        <div>
              <p className='head-b text-[#504a5d]'>For consumers, our constant innovation delivers
                differentiated value, guaranteeing satisfaction as central
                focus, and ensuring commercial viability at the core of
                decision-making.</p>
              <div className='py-8'>
                   <img src="./Consumer/cons-1.jpg" alt="" />
              </div>
        </div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
             <div>
                   <img src="./Consumer/cons-2.jpg" alt="" />
             </div>
             <div>
                 <p className='py-4 head-b text-[#faa830]'>Enriching the Overall Customer Experience</p>
                 <p className='pg py-4'>The goalposts of what consumers seek are always shifting for the
                    better. Our strategic imperative lies in meticulously discerning
                    these aspirations, thereby crafting products that not only cater
                    to their unmet needs, but also enrich their overall experience.
                    Consumers occupy the central locus of our value creation
                    paradigm, with our paramount objective being the provision of
                    exceptional product experiences at attainable price thresholds.</p>
                <p className='pg py-4'>Marico’s steadfast commitment to prioritising the consumer needs
                    determines our every action. Grounded in our core values of
                    ‘Consumer First’, we constantly aim to exceed their expectations.
                    Our agile operational model, cutting-edge production facilities,
                    expert research teams and robust supply chain network, bind
                    together seamlessly to deliver products known for their quality,
                    innovation and reliability.</p>
                <p className='pg py-4'>With sharper focus on consumer-centricity, we innovate and excel
                    in the market, while ensuring sustainable growth practices. We
                    empathise with stakeholder needs, cherish their feedback, commit
                    to swift responses and strive to bring satisfaction and joy to every
                    consumer.</p>
             </div>
        </div>
        <div className='my-8'>
              <img src="./Consumer/cons-3.jpg" alt="" />
        </div>
    </div>
  )
}

export default Consumers
