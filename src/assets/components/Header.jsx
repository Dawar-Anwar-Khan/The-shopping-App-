import Cart from "../images/Cart.svg"
import profile from "../images/profile.svg"
import search from "../images/Vector.png"

export default function Header() {
  return (
   <div className="max-w-screen-2xl mx-auto shadow-lg">
     <div className="flex justify-around py-8 px-16 items-center">
        <div><h1 className="font-CF text-4xl">SHOP.CO</h1></div>
        <div>
            <ul className="flex gap-8 cursor-pointer">
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
        </div>
        <div className="flex items-center rounded-full bg-[#F0F0F0] px-4 py-2">
            <img src={search} alt="" />
            <input className="bg-[#F0F0F0] w-full px-24 outline-none" type="text" placeholder="Search for products..." />
        </div>
       <div className="flex gap-4">
         <img src={Cart} alt="" />
        <img src={profile} alt="" />
       </div>
    </div>
   </div>
  )
}
