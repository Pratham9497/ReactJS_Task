import React from 'react'

export default function Testimonials1() {
    return (
        <div className='bg-[rgb(247,253,255)] p-24'>
            <div className="h-64 border-[1px] border-gray-300 flex flex-col justify-between p-8 rounded-md">
                <div className='flex'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_22216_425)">
                            <g clipPath="url(#clip1_22216_425)">
                                <path d="M20.0002 3.33331C10.8002 3.33331 3.3335 10.8 3.3335 20C3.3335 29.2 10.8002 36.6666 20.0002 36.6666C29.2002 36.6666 36.6668 29.2 36.6668 20C36.6668 10.8 29.2002 3.33331 20.0002 3.33331ZM26.6668 21.6666H21.6668V26.6666C21.6668 27.5833 20.9168 28.3333 20.0002 28.3333C19.0835 28.3333 18.3335 27.5833 18.3335 26.6666V21.6666H13.3335C12.4168 21.6666 11.6668 20.9166 11.6668 20C11.6668 19.0833 12.4168 18.3333 13.3335 18.3333H18.3335V13.3333C18.3335 12.4166 19.0835 11.6666 20.0002 11.6666C20.9168 11.6666 21.6668 12.4166 21.6668 13.3333V18.3333H26.6668C27.5835 18.3333 28.3335 19.0833 28.3335 20C28.3335 20.9166 27.5835 21.6666 26.6668 21.6666Z" fill="#0096C8" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_22216_425">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_22216_425">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span className='ml-2 mt-1 text-xl font-bold'>Add your own</span>
                </div>
                <div>
                    Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
                </div>
                <div>
                    <button className='px-6 py-2 border-[2px] rounded-lg border-[#8064A2] text-[#8064A2] hover:bg-[#8064A2] hover:text-white font-medium'>
                        Add new
                    </button>
                </div>
            </div>
        </div>
    )
}
