import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginUser from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const LogInComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, user } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password) {
            alert("Please fill in all fields.");
            return;
        }
        dispatch(loginUser(credentials)).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
                navigate('/');
            }
        });
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="content d-flex justify-content-center justify-content-lg-between">
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                    <h1 className="fw-bold">Welcome Back💕</h1>
                    {error && <p className="text-danger">{error}</p>}
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group my-3">
                            <label className="label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                disabled={loading}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                disabled={loading}
                            />
                        </div>
                        <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                        <div className="button d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary align-self-center px-4 fw-bold" disabled={loading}>
                                <span>{loading ? "Logging in..." : "Login"}</span>
                            </button>
                        </div>
                    </form>
                    <p className="register-link">Don't have an account? <Link to="/Register">Register</Link></p>
                </div>
                <div className="pic d-none d-lg-flex justify-content-center flex-column align-items-center">
                    <img src="../../public/images/login-img-card.png" alt="Background" />
                    <h3>Login To Join Our Community</h3>
                </div>
            </div>
        </div>
    );
};

export default LogInComponent;
