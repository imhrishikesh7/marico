import React from 'react';
import './Headings.css'; // Import the CSS file

const Headings = ({ he1, he2, clr, clr2, svg }) => {
    return (
        <div className='d-flex heading-container flex-column flex-md-row align-items-start mb-4' style={{ position: 'relative' }}>
            <div className='d-flex flex-column' style={{ flex: '1' }}>
                <h2 className={`m-0 text-${clr}`}>{he1}</h2>
                <h1 className={`m-0 text-${clr2}`}>{he2}</h1>
            </div>
            <img
                src={svg}
                className='img-fluid'
                alt=""
                style={{
                    position: 'absolute',
                    top: 0,
                    maxWidth: '100%',
                    height: 'auto',
                    width: 'auto', // Ensure image fits well
                }}
            />
        </div>
    );
}

export default Headings;
