import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='flex flex-col h-72 p-16'>
            <div className='flex flex-row mb-6'>
                <div className='flex flex-row w-[60%] justify-around'>
                    <div>
                        <div className='mb-1 font-bold'>HobbyCue</div>
                        <div><a href="#">About Us</a></div>
                        <div><a href="#">Our Services</a></div>
                        <div><a href="#">Work with Us</a></div>
                        <div><a href="#">FAQ</a></div>
                        <div><a href="#">Contact Us</a></div>
                    </div>
                    <div>
                        <div className='mb-1 font-bold'>How do I</div>
                        <div><a href="#">Sign Up</a></div>
                        <div><a href="#">Add a Listing</a></div>
                        <div><a href="#">Claim a Listing</a></div>
                        <div><a href="#">Post a Query</a></div>
                        <div><a href="#">Add a Blog Post</a></div>
                        <div><a href="#">Other Queries</a></div>
                    </div>
                    <div>
                        <div className='mb-1 font-bold'>Quick Links</div>
                        <div><a href="#">Listings</a></div>
                        <div><a href="#">BlogPosts</a></div>
                        <div><a href="#">Shop / Store</a></div>
                        <div><a href="#">Community</a></div>
                    </div>
                </div>
                <div className='flex flex-col px-10 w-[40%] gap-10'>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Social Media</div>
                        <div className='flex flex-row justify-between text-sm text-gray-500'>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaFacebookF /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaTwitter /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaInstagram /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaPinterest /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaGoogle /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaYoutube /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaTelegram /></a></div>
                            <div className='rounded-full bg-gray-300 p-2'><a href="#"><FaEnvelope /></a></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>Invite Friends</div>
                        <div className="">
                            <input type="text" className="p-2 h-10 w-3/4 bg-gray-100 rounded-l-md border-l-[1px] border-t-[1px] border-b-[1px] border-[#8064A2] outline-none" placeholder="Email ID" />
                            <button className="bg-[#8064A2] font-semibold h-10 p-2 rounded-r-md text-white border-[#8064A2] border-[1px] hover:text-[#8064A2] relative top-[1px] hover:bg-[white]" type="button">Invite</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center p-6 text-sm mt-6 bg-[#F7F5F9]'>
            © Purple Cues Private Limited
            </div>
        </div>
    )
}
