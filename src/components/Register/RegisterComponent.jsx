import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import registerUser from '../../redux/thunks/registerUser.jsx';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register Data:', { name: userData.name, email: userData.email, password: userData.password });
        if (userData.password === userData.confirmPassword) {
            dispatch(registerUser({ name: userData.name, email: userData.email, password: userData.password }));
        } else {
            alert("Passwords don't match!");
        }
    };
    return (
        <div className="container d-flex justify-content-center">
            <div className="content d-flex justify-content-center justify-content-lg-between">
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                    <h1 className="fw-bold">Register💕</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <label className="label" htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                value={userData.name}
                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label className="label" htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label className="label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={userData.password}
                                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                value={userData.confirmPassword}
                                onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                            />
                        </div>
                        <div className="button d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-primary align-self-center px-4 fw-bold">
                                <span>Register</span>
                            </button>
                        </div>
                    </form>
                    <p className="register-link">Already have an account? <Link to="/Login">Login</Link></p>
                </div>
                <div className="pic d-none d-lg-flex justify-content-center flex-column align-items-center">
                    <img src="../../public/images/register.png" alt="Background" />
                    <h3>Feel Free To Join Our Community</h3>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;