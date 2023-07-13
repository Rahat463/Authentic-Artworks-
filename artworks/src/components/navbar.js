
import App from "../App";
import React from 'react';
import  { useState } from 'react';

const Navbar = () => {
    const [showContainerSupplier, setShowContainerSupplier] = useState(false);
    const [showContainerAuditor, setShowContainerAuditor] = useState(false);

  const handleSupplierClick = () => {
    setShowContainerSupplier(true);
    setShowContainerAuditor(false);
  };
  const handleAuditorClick = () => {
    setShowContainerAuditor(true);
    setShowContainerSupplier(false);
  };
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="dropdown col-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Register
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSupplierClick()}
              >
                Supplier
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#"   onClick={() => handleAuditorClick()}>
                Auditor
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-success col-1"> Buy</button>

        <a className="navbar-brand mx-auto" href="#">
          Artworks
        </a>
      </div>
    </nav>
    {showContainerSupplier && (
        <div className="container">
          {/* Your container content goes here */}
          <h2>Supplier Container</h2>
          <p>This is the content of the Supplier container.</p>
        </div>
      )}
      {showContainerAuditor && (
        <div className="container">
          {/* Your container content goes here */}
          <h2>Auditor Container</h2>
          <p>This is the content of the Auditor container.</p>
        </div>
      )}
      </div>
  );
};

export default Navbar;
