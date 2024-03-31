import React, { useState } from "react";
import { BsFillDropletFill } from "react-icons/bs";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger">
      <div className="container border-bottom">
        {/* Add the navbar brand */}
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png"
            width={170}
            height={100}
            alt="hope donations logo"
          />
        </a>
        {/* Add the navbar toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Add the navbar collapse section */}
        <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Add the nav items */}
            <li className="nav-item mx-1">
              <a href="/find-blood" className="nav-link">
                Find Blood
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="/donate" className="nav-link">
                <button className="btn btn-warning text-danger">
                  <span className="mx-1">Donate</span>
                  <BsFillDropletFill />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
