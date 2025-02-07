import React from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/components/header-sec/navbar.scss';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand logo" to="/">Tawasol</Link>
        <button className="navbar-toggler bg-theme" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-6 fw-medium navigate" aria-current="page" to="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-6 fw-medium navigate" to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <div className="buttons d-flex gap-lg-2 row-gap-2 flex-column flex-lg-row ms-0 ms-lg-2">
            <Link className="btn btn-primary align-self-center px-4 fw-bold" to="/Login"><span>Login</span></Link>
            <Link className="btn btn-primary align-self-center px-4 fw-bold" to="/Register"><span>Register</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;