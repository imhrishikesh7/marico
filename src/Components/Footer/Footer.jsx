import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white py-3 w-100" style={{ backgroundColor: "#002a39"
         }}>
            <div className="container text-center">
                <div className="d-md-flex justify-content-between">
                    <div className="col-auto mb-2 mb-md-0">
                        &copy; Marico
                    </div>
                    <div className="col-auto">
                        Developed by K&A
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
