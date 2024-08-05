import React from 'react';

const Leaf = ({ fill, left, right, top, bottom, width, rotate}) => {
  return (
    <div
      className="leaf-wrapper"
      style={{
        position: "absolute",
        width: `${width}`,
        left: `${left}`,
        right: `${right}`,
        top: `${top}`,
        bottom: `${bottom}`,
        zIndex: `-1`,
        transform: `rotate(${rotate}deg)`
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.9 75">
        <g>
          <g id="Layer_1">
            <path
              style={{ fill: fill }}
              d="M9.1,71.3c23.4,13.2,72.7-8.2,76.8-69.2C23.5-11.5-8.6,44.3,2,66.8c11.9-4.4,29.5-16.8,37.8-36.1-4.6,31.4-30.8,40.6-30.8,40.6"
            />
            <rect className="cls-1" x="-2.8" y="51" width="85.9" height="75" fill='none'/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Leaf;
