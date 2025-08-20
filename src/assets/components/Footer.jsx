import X from '../images/X.svg'
import fb from '../images/fb.svg'
import insta from '../images/insta.svg'
import github from '../images/github.svg'

export default function Footer() {
  return (
    <section className='bg-[#f2f0f1]'>
        <div className='max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16 lg:py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12'>
                {/* Company Info Section */}
                <div className='lg:col-span-2'>
                    <h1 className='text-4xl font-CF mb-4'>SHOP.CO</h1>
                    <p className='text-gray-500 text-sm sm:text-base mb-6 max-w-sm'>
                        We have clothes that suits your style and which you're proud to wear. From women to men.
                    </p>
                    <div className='flex gap-3 sm:gap-5'>
                        <a href='' className='hover:opacity-70 transition-opacity'>
                            <img className='border rounded-full bg-white p-2 w-8 h-8 sm:w-10 sm:h-10' src={X} alt="Twitter" />
                        </a>
                        <a href='' className='hover:opacity-70 transition-opacity'>
                            <img className='w-8 h-8 sm:w-10 sm:h-10' src={fb} alt="Facebook" />
                        </a>
                        <a href='' className='hover:opacity-70 transition-opacity'>
                            <img className='w-8 h-8 sm:w-10 sm:h-10' src={insta} alt="Instagram" />
                        </a>
                        <a href='' className='hover:opacity-70 transition-opacity'>
                            <img className='border rounded-full bg-white p-2 w-8 h-8 sm:w-10 sm:h-10' src={github} alt="GitHub" />
                        </a>
                    </div>
                </div>

                {/* Company Links */}
                <div className=''>
                    <h3 className='font-bold font-satoshi text-sm sm:text-base mb-4 sm:mb-6 tracking-wider'>COMPANY</h3>
                    <ul className='space-y-3 sm:space-y-4'>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>About</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Features</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Works</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Career</a></li>
                    </ul>
                </div>

                {/* Help Links */}
                <div className=''>
                    <h3 className='font-bold font-satoshi text-sm sm:text-base mb-4 sm:mb-6 tracking-wider'>HELP</h3>
                    <ul className='space-y-3 sm:space-y-4'>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Customer Support</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Delivery Details</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Terms & Conditions</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Privacy Policy</a></li>
                    </ul>
                </div>

                {/* FAQ Links */}
                <div className=''>
                    <h3 className='font-bold font-satoshi text-sm sm:text-base mb-4 sm:mb-6 tracking-wider'>FAQ</h3>
                    <ul className='space-y-3 sm:space-y-4'>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Account</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Manage Deliveries</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Orders</a></li>
                        <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Payments</a></li>
                    </ul>
                </div>
            </div>

            {/* Resources Section - Full width on mobile, inline on larger screens */}
            <div className='mt-8'>
                <div className='md:grid md:grid-cols-2 lg:block'>
                    <div className='md:col-span-1'>
                        <h3 className='font-bold font-satoshi text-sm sm:text-base mb-4 sm:mb-6 tracking-wider'>RESOURCES</h3>
                        <ul className='space-y-3 sm:space-y-4'>
                            <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Free eBooks</a></li>
                            <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Development Tutorials</a></li>
                            <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>How to - Blog</a></li>
                            <li><a href="" className='text-gray-500 text-sm sm:text-base hover:text-gray-700 transition-colors'>Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright/Bottom Section */}
            <div className='mt-12 pt-8 border-t border-gray-300'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-500 text-xs sm:text-sm text-center sm:text-left'>
                        © 2024 SHOP.CO. All rights reserved.
                    </p>
                    <div className='flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm'>
                        <a href="" className='text-gray-500 hover:text-gray-700 transition-colors'>Privacy Policy</a>
                        <a href="" className='text-gray-500 hover:text-gray-700 transition-colors'>Terms of Service</a>
                        <a href="" className='text-gray-500 hover:text-gray-700 transition-colors'>Cookies Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}