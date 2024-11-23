import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import SocialLogIn from "../../Components/SocialLogIn/SocialLogIn";
export const Register = () => {
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password).then(() => {
            navigate(location?.state ? location?.state : '/')
        })
        console.log(data);
        
    }
    return (
        <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 my-36">
            <div className='text-3xl'>
                <NavLink to='/'><FaArrowAltCircleLeft /></NavLink>
            </div>
            <h1 className="text-3xl font-semibold">Create Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="Name" className="block font-bold text-black">
                        Name
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        id="name"
                        placeholder="Enter you name"
                        type="text"
                        {...register('name', { 'required': true })}
                    />
                    {errors.name?.type === 'required' && (
                        <p className='text-red-400'>Name is required</p>
                    )}
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="image" className="block font-bold text-black">
                        PhotoURL
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        id="image"
                        placeholder="Enter you PhotoURL"
                        type="file"
                        {...register('image', { 'required': true })}
                    />
                    {errors.name?.type === 'required' && (
                        <p className='text-red-400'>Image is required</p>
                    )}
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="Email" className="block font-bold text-black">
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        id="Email"
                        placeholder="Enter email"
                        type="text"
                        {...register('email', { 'required': true })}
                    />
                    {errors.email?.type === 'required' && (
                        <p className='text-red-400'>Email is required</p>
                    )}
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="password" className="block font-bold text-black">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        placeholder="Enter Password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Password must include uppercase, lowercase, a number, and a special character",
                            },
                        })}
                    />
                    {errors.password && (
                        <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="password" className="block font-bold text-black">
                        Confirm Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        placeholder="Enter Password"
                        id='confirm'
                        type="password"
                        {...register('confirm', {
                            required: true,
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return 'Your password do not match';
                                }
                            }
                        })}
                    />
                    {
                        errors?.confirm && (
                            <p className='text-red-400'>Both passwords must match</p>
                        )
                    }
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="role" className="block font-bold text-black">
                        Select Role
                    </label>
                    <select
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        id="role"
                        {...register('role', { required: true })}
                    >
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <button className="w-1/2  rounded-md bg-cyan-500 mx-[90px] px-4 py-2 text-white transition-colors" type='submit'>Register</button>
            </form>
            <p className="text-center text-sm  font-bold text-black">
                Already have an account?
                <NavLink to='/login'> SignIn</NavLink>
            </p >
            <div className="my-8 flex items-center">
                <hr className="flex-1 border-gray-400" />
                <div className="mx-4 text-gray-400">OR</div>
                <hr className="flex-1 border-gray-400" />
            </div>
            {/* Social icons */}
            <SocialLogIn/>
        </div >
    )
}
