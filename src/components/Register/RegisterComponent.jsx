import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import registerUser from '../../redux/thunks/registerUser';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .matches(
            /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/,
            'Please enter at least your first and last name'
        ),

    email: yup
        .string()
        .required('Email is required')
        .matches(emailRegex, 'Invalid email format'),

    password: yup
        .string()
        .required('Password is required')
        .matches(
            passwordRegex,
            'Password must be at least 8 characters, include uppercase, lowercase, number, and special character'
        ),

    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const RegisterComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispatch(registerUser({ name: data.name, email: data.email, password: data.password }))
            .unwrap()
            .then(() => {
                toast.success('Registration successful!');
                reset();
                navigate('/home');
            })
            .catch((err) => {
                if (err?.errors && Array.isArray(err.errors)) {
                    err.errors.forEach(e => toast.error(e.msg));
                } else {
                    toast.error(err?.message || 'Registration failed!');
                }
            });
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="content d-flex justify-content-center justify-content-lg-between">
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                    <h1 className="fw-bold">Register💕</h1>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group my-2">
                            <label style={{ fontSize: '15px' }} htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                {...register('name')}
                            />
                            {errors.name && <p style={{ fontSize: '12px' }} className="text-danger mb-0">{errors.name.message}</p>}
                        </div>

                        <div className="form-group my-2">
                            <label style={{ fontSize: '15px' }} htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                {...register('email')}
                            />
                            {errors.email && <p style={{ fontSize: '12px' }} className="text-danger mb-0">{errors.email.message}</p>}
                        </div>

                        <div className="form-group my-2">
                            <label style={{ fontSize: '15px' }} htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                {...register('password')}
                            />
                            {errors.password && <p style={{ fontSize: '12px' }} className="text-danger mb-0">{errors.password.message}</p>}
                        </div>

                        <div className="form-group my-2">
                            <label style={{ fontSize: '15px' }} htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && (
                                <p style={{ fontSize: '12px' }} className="text-danger mb-0">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        <div className="button d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-primary align-self-center px-4 fw-bold">
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="register-link">
                        Already have an account? <Link to="/Login">Login</Link>
                    </p>
                </div>

                <div className="pic d-none d-lg-flex justify-content-center flex-column align-items-center">
                    <img src="public/images/register.png" alt="Background" />
                    <h3>Feel Free To Join Our Community</h3>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;