import React from 'react'
import MyImg from '../images/my_img.jpg'
import MyAudio from '../audio/ReactJS_intro.mp3'
import { FaMicrophone } from 'react-icons/fa6'

export default function Testimonials2() {

    return (
        <div className='bg-[rgb(247,253,255)] p-24'>
            <div className="border-[1px] h-96 bg-[#F7F5F9] border-gray-300 flex flex-col justify-between p-8 rounded-md">
                <div className='flex'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_4729)">
                            <circle cx="10" cy="10" r="30" transform="rotate(-180 10 10)" fill="white" />
                            <path d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z" fill="#8064A2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_4729">
                                <rect width="40" height="40" fill="white" transform="translate(40 40) rotate(-180)" />
                            </clipPath>
                        </defs>
                    </svg>


                    <span className='ml-2 mt-1 text-xl font-bold'>Testimonials</span>
                </div>
                <div>
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </div>
                <div className='flex flex-row justify-between items-center'>
                    {/* <button className='px-6 py-2 border-[2px] rounded-lg border-[#8064A2] text-[#8064A2] hover:bg-[#8064A2] hover:text-white font-medium'>
                        Add new
                    </button> */}
                    <div className="w-8/12 p-2">
                        <div className="relative flex items-center">
                            <audio controls className="w-full custom-audio-element" >
                                <source className='bg-[#CCC1DA]' src={MyAudio} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                            <div className="absolute right-3 top-2 bottom-4 w-8 h-8">
                                <img
                                    src={MyImg}
                                    alt="Artist"
                                    className="rounded-full w-full h-full object-cover border-2"
                                />
                                <div className="absolute bottom-0 right-6 w-4 h-4 rounded-full transform translate-x-1/2 translate-y-1/2">
                                    <FaMicrophone
                                        color='white'
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-3/12 p-2 justify-evenly items-center">
                        <img
                            src={MyImg}
                            alt="Artist"
                            className="rounded-full w-16 h-16 object-cover border-2"
                        />
                        <div className="flex flex-col justify-center">
                            <div className='text-[#8064A2]'>Pratham Shalya</div>
                            <div className='text-[#0096C8] text-xs'>Competitive Programmer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
