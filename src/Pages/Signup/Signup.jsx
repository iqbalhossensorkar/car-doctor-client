import { useContext, useState } from 'react';
import logImg from '../../assets/images/login/login.svg'
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [userName, setUserName] = useState('')
    const { createUser, user, googleSignIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSIgnUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                form.reset()
                const newUser = result.user;
                console.log(newUser);
                handleUserUpdate(newUser, name)
            })
            .catch(error => (
                console.log('error', error.message)
            ))

    }

    const handleUserUpdate = (result, name) => {
        updateProfile(result, {
            displayName: name

        })
            .then(() => {
                console.log(result.displayName);
                setUserName(result.displayName);
            }).catch((error) => {
                console.log('error', error.message);
            });
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
                    <p>{user?.displayName}</p>
                    <div className="card-body space-y-8">
                        <h1 className="text-3xl text-center font-bold">SIgn Up</h1>
                        <form onSubmit={handleSIgnUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="name" placeholder="your name" name="name" className="input input-bordered" required />
                            </div>
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
                                <input className="btn bg-orange-600 border-none" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="font-semibold text-center">Or Sign Up with</p>
                        <div className='text-center'>
                            <button className='btn btn-circle bg-slate-200 text-blue-700 border-none mr-3'><FaFacebookF></FaFacebookF></button>
                            <button className='btn btn-circle bg-slate-200 text-blue-500 border-none mr-3'><FaLinkedinIn></FaLinkedinIn></button>
                            <button onClick={handleGoogleSignIn} className='btn btn-circle bg-slate-200 text-blue-400 border-none mr-3'><FaGoogle></FaGoogle></button>
                        </div>
                        <p className="font-bold text-center">Have an account? <Link to='/login'><span className="text-orange-600">Log In</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;