import visa from '../images/visa.svg'
import master from '../images/master.svg'
import paypal from '../images/Paypal.svg'
import Apple from '../images/Apple.svg'
import gpay from '../images/gpay.svg'

export default function LastLine() {
  return (
    <section className='max-w-screen-2xl mx-auto px-32 pb-20 bg-[#f2f0f1]'>
        <div className='flex justify-between items-center'>
            <p>Shop.co © 2000-2021, All rights reserved</p>
            <ul className='flex'> 
                <li><img src={visa} alt="" /></li>
                <li><img src={master} alt="" /></li>
                <li><img src={paypal} alt="" /></li>
                <li><img src={Apple} alt="" /></li>
                <li><img src={gpay} alt="" /></li>
            </ul>
        </div>
    </section>
  )
}
