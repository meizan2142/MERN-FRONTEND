import { FaArrowAltCircleLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export const LogIn = () => {
    return (
        <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 my-36">
            <div className='text-3xl'>
                <NavLink to='/'><FaArrowAltCircleLeft /></NavLink>
            </div>
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <form className="space-y-6">
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="Email" className="block font-bold text-black">
                        Email
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        id="Email"
                        placeholder="Enter email"
                        type="text"
                    />
                </div>
                <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <label htmlFor="password" className="block  font-bold text-black">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 text-black focus-visible:outline-none dark:border-zinc-700"
                        placeholder="Enter Password"
                        type="password"
                    />
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
            <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
                <button aria-label="Log in with Google" className="rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
