import { useContext, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const { signIn,user,googleSignUp } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        const { email, password } = data;
        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                reset()
                {
                    user &&
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Hi ${user.displayName} Welcome !!!`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
 
    const handleGoogleLogin = () => {
        googleSignUp()
        .then((result) => {
            const user = result.user;
          if(user){
            navigate("/")
          }
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left my-4">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? 'text' : 'password'} {...register("password")} placeholder="password" className="input input-bordered" />
                            <div className='absolute top-[176px] right-[40px]'>
                                {
                                    showPass ? <AiFillEyeInvisible onClick={() => setShowPass(false)}></AiFillEyeInvisible> : <AiFillEye onClick={() => setShowPass(true)}></AiFillEye>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='font-[roboto] text-lg'><small>Are you new Here ? <Link to="/register">Please Register</Link></small></p>
                        <div className="divider">OR</div>
                        <div className='mx-auto font-bold text-3xl'>
                            <BsGoogle onSubmit={handleGoogleLogin}></BsGoogle>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;