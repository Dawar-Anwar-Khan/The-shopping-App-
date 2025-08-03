import BrandLine from './BrandLine'
import DressStyle from './DressStyle.jsx'
import Footer from './Footer.jsx'
import Hero from './Hero'
import LastLine from './LastLine.jsx'
import NewArrivals from './NewArrivals/NewArrivals.jsx'
import TopSelling from './TopSelling/TopSelling.jsx'

export default function HomePage() {
 return (
    <>
    <Hero />
    <BrandLine />
    <NewArrivals />
    <TopSelling />
    <DressStyle />
    <Footer />
    <LastLine />
    </>
  )
}
