import { useContext, useState } from 'react';
import logImg from '../../assets/images/login/login.svg'
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log('error', error.message)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedIn = result.user;
                console.log(googleLoggedIn);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-10">
                    <img src={logImg} alt="" className='h-[600px]' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg border">
                    <div className="card-body space-y-8">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="your email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="your password" name="password" className="input input-bordered " required />
                                <span onClick={togglePasswordVisibility} className='absolute inset-y-0 top-9 right-0 px-3 flex items-center btn bg-orange-600 border-none rounded-l-none'>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 border-none" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className="font-semibold text-center">Or Sign In with</p>
                        <div className='text-center'>
                            <button className='btn btn-circle bg-slate-200 text-blue-700 border-none mr-3'><FaFacebookF></FaFacebookF></button>
                            <button className='btn btn-circle bg-slate-200 text-blue-500 border-none mr-3'><FaLinkedinIn></FaLinkedinIn></button>
                            <button onClick={handleGoogleSignIn} className='btn btn-circle bg-slate-200 text-blue-400 border-none mr-3'><FaGoogle></FaGoogle></button>
                        </div>
                        <p className="font-bold text-center">Have an account? <Link to='/signup'><span className="text-orange-600">Sign In</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;