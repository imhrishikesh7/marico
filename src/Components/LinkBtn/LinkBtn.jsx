import React from 'react';
import './LinkBtn.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';
const LinkBtn = ({link}) => {
  return (
    <div className="button my-3">
      <Link className="link" to={link}>Read More</Link>
    </div>
  );
};


export default LinkBtn;
