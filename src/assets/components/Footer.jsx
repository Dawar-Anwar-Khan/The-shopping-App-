import X from '../images/X.svg'
import fb from '../images/fb.svg'
import insta from '../images/insta.svg'
import github from '../images/github.svg'

export default function Footer() {
  return (
    <section className='max-w-screen-2xl mx-auto px-32 py-20 bg-[#f2f0f1]'>
            <div className='flex justify-center gap-12 max-w-screen-2xl'>
                <div className=''>
                    <h1 className='text-4xl font-CF'>SHOP.CO</h1>
                    <p className='mt-4 text-gray-500'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <ul className='flex mt-4 gap-5'>
                        <a href=''><img className='border rounded-full bg-white p-2' src={X} alt="" /></a>
                        <a href=''><img src={fb} alt="" /></a>
                        <a href=''><img src={insta} alt="" /></a>
                        <a href=''><img className='border rounded-full bg-white p-2' src={github} alt="" /></a>
                    </ul>
                </div>
                <div className='flex flex-col gap-6 w-96'>
                    <p className='font-bold font-satoshi'>COMPANY</p>
                    <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                        <a href="">About</a>
                        <a href="">Features</a>
                        <a href="">Works</a>
                        <a href="">Career</a>
                    </ul>
                </div>
                <div className='flex flex-col gap-6 w-96'>
                    <p className='font-bold font-satoshi'>HELP</p>
                    <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                         <a href="">Customer Support</a>
                        <a href="">Delivery Details </a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a>
                    </ul>
                </div>
                <div className='flex flex-col gap-6 w-96'>
                    <p className='font-bold font-satoshi'>FAQ</p>
                    <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                         <a href="">Account</a>
                        <a href="">Manage Deliveries</a>
                        <a href="">Orders</a>
                        <a href="">Payments</a>
                    </ul>
                </div>
                <div className='flex flex-col gap-6 w-96'>
                    <p className='font-bold font-satoshi'>RESOURCES</p>
                    <ul className='flex flex-col text-sm gap-4 text-gray-500'>
                         <a href="">Free eBooks</a>
                        <a href="">Development Tutorials</a>
                        <a href="">How to - Blog</a>
                        <a href="">Youtube Playlist</a>
                    </ul>
                </div>
            </div>
    </section> 
  )
}
