import X from '../images/X.svg'
import fb from '../images/fb.svg'
import insta from '../images/insta.svg'
import github from '../images/github.svg'

export default function Footer() {
  return (
    <section className='max-w-screen-2xl mx-auto px-32 py-20 bg-[#f2f0f1]'>
            <div className='flex gap-20'>
                <div>
                    <h1 className='text-4xl font-CF'>SHOP.CO</h1>
                    <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <ul className='flex'>
                        <li><img src={X} alt="" /></li>
                        <li><img className='invert' src={fb} alt="" /></li>
                        <li><img src={insta} alt="" /></li>
                        <li><img src={github} alt="" /></li>
                    </ul>
                </div>
                <div>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
    </section> 
  )
}
