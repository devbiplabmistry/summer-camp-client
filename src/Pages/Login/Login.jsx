import { useState } from 'react';
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const Login = () => {
    const { register,handleSubmit, reset, formState: { errors } } = useForm();
    const [showPass,setShowPass]=useState(false)
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left my-4">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                showPass ?  <AiFillEyeInvisible onClick={()=>setShowPass(false)}></AiFillEyeInvisible> :   <AiFillEye onClick={()=>setShowPass(true)}></AiFillEye>
                            } 
                           </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='font-[roboto] text-lg'><small>Are you new Here ? <Link to="/register">Please Register</Link></small></p>
                        <div className="divider">OR</div>
                        <div className='mx-auto font-bold text-3xl'>
                            <BsGoogle></BsGoogle>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;