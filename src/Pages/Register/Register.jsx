import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from 'react';
const Register = () => {
    const [cPass, setCPass] = useState("")
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password != data.confirmPassword) {
          return  setCPass('Your password is not match')
        }

        console.log(data)
    }
        ;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left my-4">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, min: 6, max: 20 ,pattern: /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])$/ })} placeholder="password" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                            {errors.email && <span>Password length can not be less than 6 </span>}
                            {errors.email && <span>password must be one uppercase and one special charecter</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="Password" {...register("confirmPassword")} placeholder="Confirm password" className="input input-bordered" />
                       <p className='text-red-400 text-base fon-[roboto]'><small>{cPass}</small></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" {...register("photo", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='font-[roboto] text-lg'><small>Are you Already register ? <Link to="/login">Please Login now !!</Link></small></p>
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

export default Register;