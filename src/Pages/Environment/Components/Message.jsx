import React from "react";

const Message = ({ quotes1, quotes02, img }) => {
  return (
    <div className="bg-[#b8d1a8] p-5 relative">
      <p className="message-text-style font-[500] md:w-[80%] m-auto">In our pursuit of continued success, we recognise the profound importance
        of environmental stewardship. We are committed to operating in a way that
        minimises our impact on the planet. From implementing sustainable practices
        into our operations to partnering with environmentally conscious suppliers, this
        philosophy is deeply interwoven into the fabric of our decision-making process.
        With an emphasis on constantly reducing our environmental footprint, we ensure
        transparency in reporting our progress towards measurable goals. We believe,
        integrating environmental responsibility into our core values will enable us to
        sustain a thriving business and a healthy planet for generations to come.</p>
      <div className="flex md:flex-row flex-col justify-evenly align-middle">
        <div className="image-containerx md:w-[30%] lg:w-[50%] justify-content-center">
          <img src="./Environment/Enviro001.png" className="m-auto d-block" alt="" />
        </div>
        <div className="quotes md:w-[50%] flex flex-col justify-center">
          <div>
            <img
              className="w-[40px] md:w-[80px]"
              src="./Environment/quotest01.png"
              alt=""
            />
            <p className="message-text-style">
              Our Company's success is intrinsically linked to the well-being of
              the environment. We are dedicated to being responsible stewards,
              leaving a positive footprint through sustainable practices and
              innovation. We believe that environmental protection is not just a
              cost, but an investment in the future.
            </p>
            <img
              className="w-[30px] md:w-[70px]"
              src="./Environment/quotes02.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="message-head">Saugata Gupta</h3>
            <p className="">Managing Director & Chief Executive Officer</p>
          </div>
        </div>

      </div>
      <img className="absolute bottom-[0%] right-[2%]" src="./Environment/greenleaf.png" alt="" />
    </div>
  );
};

export default Message;
