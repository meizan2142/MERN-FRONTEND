import { useEffect, useRef, useState } from "react";
// import { UserInfo } from "../UserInfo/UserInfo";
import { NavLink } from "react-router-dom";
export const Navigationbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    const navLinksLg = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/'>Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/products'>Products<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/about'>About<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'group flex  cursor-pointer flex-col text-red-500 font-bold' : "group flex  cursor-pointer flex-col"} to='/contact'>Contact Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span></NavLink>
        </li>
    </>
    const navLinksSm = <>
        <NavLink to='/' className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
            Home
        </NavLink>
        <NavLink to='/products' className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
            Products
        </NavLink>
        <NavLink to='/about' className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
            About
        </NavLink>
        <NavLink to='/contact' className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
            Contact
        </NavLink>

    </>






    return (
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 fixed w-full z-[10] text-white">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2>BUY<span className="text-sky-500">HIVE</span></h2>
            </div>
            <ul className="hidden items-center justify-center gap-10 md:flex">
                {navLinksLg}
            </ul>
            <div className="flex items-center space-x-4">
                <button className="rounded-lg bg-sky-500 px-3 py-2 text-md text-white duration-300 font-bold active:scale-95">
                    <NavLink to='/login'>Sign In</NavLink>
                </button>
                <button className="rounded-lg bg-sky-500 px-3 py-2 text-md text-white duration-300 font-bold active:scale-95">
                    <NavLink to='/register'>Sign Up</NavLink>
                </button>
                <div>
                    {/* <UserInfo /> */}
                </div>
            </div>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        {navLinksSm}
                    </ul>
                )}
            </div>
        </nav>
    )
}
