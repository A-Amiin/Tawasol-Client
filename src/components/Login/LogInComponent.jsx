import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginUser from '../../redux/thunks/loginUser';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LogInComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, []);

    const onSubmit = (data) => {
        dispatch(loginUser(data)).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
                localStorage.setItem('token', result.payload.accessToken);
                toast.success('Login successful! 🎉');
                navigate('/home');
            } else {
                toast.error('Login failed. Please check your credentials. ❌');
            }
        });
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="content d-flex justify-content-center justify-content-lg-between">
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                    <h1 className="fw-bold">Welcome Back💕</h1>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="form-control"
                                type="email"
                                placeholder="Enter email"
                                {...register('email')}
                                disabled={loading}
                            />
                            {errors.email && <p style={{ fontSize: '12px' }} className="text-danger">{errors.email.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                className="form-control"
                                type="password"
                                placeholder="Enter password"
                                {...register('password')}
                                disabled={loading}
                            />
                            {errors.password && <p style={{ fontSize: '12px' }} className="text-danger">{errors.password.message}</p>}
                        </div>

                        <p className="forgot-password"><a href="#">Forgot Password?</a></p>

                        <div className="button d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary px-4 fw-bold" disabled={loading}>
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <p className="register-link">
                        Don't have an account? <Link to="/Register">Register</Link>
                    </p>
                </div>

                <div className="pic d-none d-lg-flex justify-content-center flex-column align-items-center">
                    <img src="public/images/login-img-card.png" alt="Background" />
                    <h3>Login To Join Our Community</h3>
                </div>
            </div>
        </div>
    );
};

export default LogInComponent;