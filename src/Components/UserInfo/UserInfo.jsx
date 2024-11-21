import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const UserInfo = () => {
    const dropDownRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);
    return (
        <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
            <button onClick={() => setOpen((prev) => !prev)} className="rounded-sm px-7 py-2">
                <img
                    width={500}
                    height={500}
                    className="size-10 rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
            </button>
            <ul className={`${open ? 'visible translate-y-0 duration-300 w-full p-1 flex flex-col space-y-4 ' : 'invisible translate-y-4'} absolute top-12 z-50 w-full space-y-1 rounded-sm bg-sky-400 shadow-md`}>
                    <button><NavLink to='/dashboard' className='font-bold rounded-md bg-gray-700 p-1'>DashBoard</NavLink></button>
                <button className="bg-red-500 rounded-md font-bold">LogOut</button>
            </ul>
        </div>
    )
}
