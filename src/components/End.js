import React from 'react'
import GroupImg from '../images/Group 99.png'

export default function End() {
    return (
        <div className='bg-[#F7FDFF] flex flex-col justify-around px-24 pt-24 pb-10 gap-24'>
            <div className='flex flex-col gap-10'>
                <div className='font-semibold text-3xl'><i>Your <span className='text-[#8064A2]'>Hobby</span>, Your <span className='text-[#0096C8]'>Community...</span></i></div>
                <div>
                    <button className='font-semibold text-white border-[2px] rounded-lg border-[#8064A2] bg-[#8064A2] hover:text-[#8064A2] hover:bg-white p-2'>
                        Get started
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <img src={GroupImg}  alt="GroupImg" />
            </div>
        </div>
    )
}
