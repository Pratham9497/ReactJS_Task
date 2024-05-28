import React from 'react'
import { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import GrpImg from '../images/Group 27.png'

export default function Home() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className='min-h-screen flex flex-row px-4 pt-28 justify-evenly bg-[#F7F5F9]'>
            <div className='flex flex-col justify-between w-3/6'>
                <div className='flex flex-col gap-8'>
                    <div className='text-4xl font-bold'>
                        <i>Explore your <span className='text-[#0096C8]'>hobby</span> or <span className='text-[#8064A2]'>passion</span></i>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-justify'>
                            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>
                        <p className='text-justify'>
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                        </p>
                    </div>
                </div>
                <div className='mt-10'>
                    <img className='w-[100%]' src={GrpImg} alt="Group" />
                </div>
            </div>
            <div className='w-2/6'>
                <div className="w-full max-w-md px-8 space-y-3 rounded-lg">
                    <div className="flex mb-6">
                        <button
                            className={`pb-2 px-4 font-medium text-[#8064A2] ${!isSignUp ? 'border-b-2 border-indigo-500' : 'text-gray-400'}`}
                            onClick={() => toggleForm('signIn')}
                        >
                            Sign In
                        </button>
                        <button
                            className={`pb-2 px-4 font-medium text-[#8064A2] ${isSignUp ? 'border-b-2 border-indigo-500' : 'text-gray-400'}`}
                            onClick={() => toggleForm('signUp')}
                        >
                            Join In
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex items-center w-full px-3 py-2 font-bold border-[2px] border-[#8064A2] text-black bg-[#F7F5F9] rounded-lg focus:outline-none hover:bg-[#8064A2] hover:text-white"
                        >
                            <svg className='text-left w-[10%]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_22216_120)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z" fill="#FBBC05" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z" fill="#EA4335" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z" fill="#34A853" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z" fill="#4285F4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_22216_120">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className='text-center w-[90%]'>Continue with Google</div>
                        </button>
                    </div>
                    <div>
                        <button
                            className="flex items-center w-full px-3 py-2 font-bold border-[2px] border-[#8064A2] text-black bg-[#F7F5F9] rounded-lg focus:outline-none hover:bg-[#8064A2] hover:text-white"
                        >
                            <svg className='text-left w-[10%]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_22216_408)">
                                    <path d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z" fill="#1877F2" stroke="white" strokeWidth="0.2" />
                                    <path d="M6.75 10.2125H4.81875V8.1H6.75H6.85V8V6.2375C6.85 5.25496 7.14223 4.50463 7.64634 4.00005C8.15054 3.49538 8.87824 3.225 9.77172 3.225C10.204 3.225 10.6475 3.26363 10.9839 3.30246C11.1518 3.32186 11.2926 3.34125 11.3912 3.35577C11.4182 3.35975 11.4421 3.36336 11.4625 3.36651V5.15H10.5537C10.0351 5.15 9.67856 5.31179 9.45354 5.572C9.23087 5.82949 9.15 6.16845 9.15 6.49931V8V8.1H9.25H11.3522L11.0282 10.2125H9.25H9.15V10.3125V15.8168C8.7746 15.8716 8.39066 15.9 8 15.9C7.60934 15.9 7.22537 15.8716 6.85 15.8168V10.3125V10.2125H6.75Z" fill="white" stroke="white" strokeWidth="0.2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_22216_408">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className='text-center w-[90%]'>Continue with Facebook</div>
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t-2"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-gray-500">Or connect with</span>
                        </div>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder='Email'
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder='Password'
                            />
                        </div>
                    </form>
                    {isSignUp ? (
                        <>
                            <div className='text-xs text-center'>
                                By continuing, you agree to our Terms of Service and Privacy Policy.
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="rounded-md w-full px-3 py-2 text-white bg-[#8064A2] focus:outline-none"
                                >
                                    Agree and Continue
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm flex">
                                    <FaLock color='grey' className='mr-1 mt-1' />
                                    <a href="#" className="">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="rounded-md w-full px-3 py-2 font-bold border-[2px] border-black text-black bg-[#F7F5F9] focus:outline-none hover:text-white hover:bg-black"
                                >
                                    Continue
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
