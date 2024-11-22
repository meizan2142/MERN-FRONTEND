import { useForm } from "react-hook-form"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import SocialLogIn from "../../Components/SocialLogIn/SocialLogIn"

export const LogIn = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        signIn(data.email, data.password)
        console.log(data);
        navigate(location?.state ? location?.state : '/')
    }
    return (
        <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 my-36">
            <div className='text-3xl'>
                <NavLink to='/'><FaArrowAltCircleLeft /></NavLink>
            </div>
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    <label htmlFor="password" className="block  font-bold text-black">
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
                <button className="w-1/2  rounded-md bg-cyan-500 mx-[90px] px-4 py-2 text-white transition-colors ">Sign In</button>
            </form>
            <p className="text-center text-sm  font-bold text-black">
                Don&apos;t have an account?
                <NavLink to='/register'> SignUp</NavLink>
            </p>
            <div className="my-8 flex items-center">
                <hr className="flex-1 border-gray-400" />
                <div className="mx-4 text-gray-400">OR</div>
                <hr className="flex-1 border-gray-400" />
            </div>
            {/* Social icons */}
            <SocialLogIn/>
        </div>
    )
}
