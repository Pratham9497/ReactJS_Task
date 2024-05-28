import React from 'react'
import { useState } from 'react';
import { FaSearch, FaCompass } from 'react-icons/fa'
import Logo from '../images/logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-evenly px-6 py-1 items-center'>
            <div className='w-1/2 flex justify-evenly items-center'>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="drop-shadow-md">
                    <input type="text" className="p-2 h-10 bg-gray-100 rounded-l-md outline-none" placeholder="Search here..." />
                    <button className="bg-[#8064A2] h-10 p-2 rounded-r-md" type="button"><FaSearch color='white' /></button>
                </div>
            </div>
            <div className='w-1/2 flex justify-evenly items-center'>
                {/* <div><FaCompass /> Explore <FaChevronDown /></div> */}
                <div className="relative inline-block text-left">
                    <div className='flex flex-row items-center'>
                        <FaCompass color='#8064A2' className='mr-[2px] text-2xl' />
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md shadow-sm p-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            onClick={toggleDropdown}
                        >
                            Explore
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Support</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">License</a>
                                <form method="POST" action="#">
                                    <button type="submit" className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Sign out
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative inline-block text-left">
                    <div className='flex flex-row items-center'>
                        <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.5L20.2272 7.25V16.75L12 21.5L3.77276 16.75V7.25L12 2.5Z" fill="#8064A2" />
                            <path d="M11.6206 7.13723C11.7422 6.77269 12.2578 6.77269 12.3794 7.13723L13.2814 9.84062C13.3355 10.0028 13.4867 10.1127 13.6577 10.114L16.5075 10.1365C16.8918 10.1395 17.0511 10.6299 16.742 10.8582L14.4497 12.5514C14.3122 12.653 14.2544 12.8308 14.3059 12.9938L15.1652 15.711C15.2811 16.0774 14.864 16.3805 14.5513 16.1571L12.2326 14.5002C12.0935 14.4008 11.9065 14.4008 11.7674 14.5002L9.44871 16.1571C9.13604 16.3805 8.71889 16.0774 8.83476 15.711L9.69405 12.9938C9.7456 12.8308 9.68785 12.653 9.55032 12.5514L7.25798 10.8582C6.94887 10.6299 7.1082 10.1395 7.49248 10.1365L10.3423 10.114C10.5133 10.1127 10.6645 10.0028 10.7186 9.84062L11.6206 7.13723Z" fill="white" />
                        </svg>

                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md shadow-sm p-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                        >
                            Hobbies
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_22216_517)">
                                <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="#8064A2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_22216_517">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                </div>
                <div>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_22216_520)">
                                <path d="M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z" fill="#8064A2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_22216_520">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                </div>
                <div>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9198 7.24996V7.37996L20.4598 12.78C20.2873 13.4209 19.907 13.9865 19.3786 14.3882C18.8503 14.7899 18.2036 15.0051 17.5398 15H9.88982C9.13882 15.003 8.41398 14.7243 7.85853 14.2188C7.30308 13.7133 6.95741 13.0179 6.88982 12.27L6.23982 4.90996C6.2173 4.66064 6.10207 4.42884 5.91692 4.26035C5.73177 4.09186 5.49016 3.99895 5.23982 3.99996H3.06982C2.80461 3.99996 2.55025 3.89461 2.36272 3.70707C2.17518 3.51953 2.06982 3.26518 2.06982 2.99996C2.06982 2.73475 2.17518 2.48039 2.36272 2.29286C2.55025 2.10532 2.80461 1.99996 3.06982 1.99996H5.23982C5.99083 1.99692 6.71567 2.27566 7.27112 2.78112C7.82657 3.28659 8.17224 3.982 8.23982 4.72996V4.99996H19.9298C20.2149 4.99773 20.4971 5.05646 20.7577 5.17222C21.0182 5.28798 21.2509 5.4581 21.4403 5.67117C21.6297 5.88424 21.7714 6.13534 21.8558 6.40764C21.9402 6.67993 21.9655 6.96712 21.9298 7.24996H21.9198Z" fill="#8064A2" />
                            <path d="M9.06982 22.0001C10.4505 22.0001 11.5698 20.8808 11.5698 19.5001C11.5698 18.1193 10.4505 17.0001 9.06982 17.0001C7.68911 17.0001 6.56982 18.1193 6.56982 19.5001C6.56982 20.8808 7.68911 22.0001 9.06982 22.0001Z" fill="#8064A2" />
                            <path d="M17.0698 22.0001C18.4505 22.0001 19.5698 20.8808 19.5698 19.5001C19.5698 18.1193 18.4505 17.0001 17.0698 17.0001C15.6891 17.0001 14.5698 18.1193 14.5698 19.5001C14.5698 20.8808 15.6891 22.0001 17.0698 22.0001Z" fill="#8064A2" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button className='px-6 font-bold text-[#8064A2] py-2 border-[2px] rounded-md border-[#8064A2] hover:bg-[#8064A2] hover:text-white'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

