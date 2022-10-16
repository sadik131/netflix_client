import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';


export default function SignModal({ setSinginModal }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
    };
    if (loading) {
        return <Loading></Loading>
    }

    if(user){
        navigate("/artical")
        reset()
        // setSinginModal(false)
    }

    // useEffect(() => {
    //     // navigate("/artical")
    //     console.log("first", user)
    //     // reset()
    //     // setSinginModal(false)
    // }, [user])


    return (
        <div>
            <input type="checkbox" id="signIn-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="signIn-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-center items-center'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-xl font-bold text-black text-center">Sign in</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="input input-bordered text-black w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email fild is Required"
                                                },
                                                pattern: {
                                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                    message: 'Enter a valided Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}

                                        </label>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Type here"
                                                className="input input-bordered text-black w-full max-w-xs"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: "password fild is requerd"
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: "Use 6 carecter in password or more"
                                                    }
                                                })}
                                            />
                                            <label className="label">
                                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                                            </label>
                                        </div>
                                    </div>
                                    <input className='btn w-full' type="submit" value="Sign in" />
                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
