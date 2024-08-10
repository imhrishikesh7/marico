import React from 'react';
import './LinkBtn.css'; // Make sure to import your CSS file

const LinkBtn = ({link}) => {
  return (
    <div className="button my-3">
      <a className="link" href={link}>Read More</a>
    </div>
  );
};


export default LinkBtn;
