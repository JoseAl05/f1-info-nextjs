import Image from 'next/image'
import styles from './page.module.css'
import About from './components/about/About'
import Circuits from './components/circuits/Circuits'
import Seasons from './components/seasons/Seasons'
import Drivers from './components/drivers/Drivers'
import DriversCarousel from './components/drivers/DriversCarousel'
import Footer from './components/footer/Footer'


export default function Home() {
  return (
    <main>
      <About />
      <Circuits />
      <Seasons />
      <div className='flex flex-row items-center justify-around pt-20'>
        <Drivers />
        <DriversCarousel />
      </div>
      <Footer />
    </main>
  )
}
