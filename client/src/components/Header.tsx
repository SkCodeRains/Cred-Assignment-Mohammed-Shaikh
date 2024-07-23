import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
    const [nav, setNav] = useState(false);
    const { logout } = useAuth();
    const [activeLink, setActiveLink] = useState("/dashboard");
    const links = [
        {
            id: 1,
            title: "HOME",
            link: "/dashboard",
        },
        {
            id: 2,
            title: "EMPLOYEES",
            link: "/dashboard/employees",
        },
        {
            id: 3,
            title: "VENDOR",
            link: "/dashboard/vendor",
        },
        {
            id: 4,
            title: "MAILS",
            link: "/dashboard/mails",
        },
    ];

    function doLogout(event: any): void {
        logout();
    }

    return (
        <div className="flex justify-between uppercase items-center w-full h-20 px-4 text-white bg-black sticky nav">
            <div>
                <h1 className="text-4xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Logo
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, title }) => (
                    <li
                        key={id}
                        onClick={() => setActiveLink(link)}
                        className={`nav-links uppercase px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white ${activeLink === link ?'text-blue-700 bg-gray-200':''} duration-200 link-underline`}
                    >
                        <Link href={link} prefetch={false} className='inline-block hover:text-blue-700 hover:bg-gray-50 rounded-t-lg py-4 px-6 text-lg font-semibold' >{title}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={doLogout} className='px-8 py-2 text-lg font-semibold uppercase bg-red-600 hover:bg-red-700 rounded-lg'>Logout</button>
        </div>
    );
}
