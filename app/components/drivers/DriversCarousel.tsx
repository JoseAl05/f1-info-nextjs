'use client'

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

import verstappen from '/public/images/verstappen.webp';
import perez from '/public/images/perez.webp';
import leclerc from '/public/images/leclerc.webp';
import sainz from '/public/images/sainz.webp';
import hamilton from '/public/images/hamilton.webp';
import russel from '/public/images/russel.webp';
import ocon from '/public/images/ocon.webp';
import gasly from '/public/images/gasly.webp';
import norris from '/public/images/norris.webp';
import piastri from '/public/images/piastri.webp';
import bottas from '/public/images/bottas.webp';
import zhou from '/public/images/zhou.webp';
import alonso from '/public/images/alonso.webp';
import stroll from '/public/images/stroll.webp';
import magnussen from '/public/images/magnussen.webp';
import hulkenberg from '/public/images/hulkenberg.webp';
import tsunoda from '/public/images/tsunoda.webp';
import devries from '/public/images/devries.webp';
import albon from '/public/images/albon.webp';
import sargeant from '/public/images/sargeant.webp';

import Container from '../Container';


const DriversCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, delay: 1000,duration:900,stopOnInteraction:false }, [Autoplay()]);

    const drivers =[
            verstappen,
            perez,
            leclerc,
            sainz,
            hamilton,
            russel,
            ocon,
            gasly,
            norris,
            piastri,
            bottas,
            zhou,
            alonso,
            stroll,
            magnussen,
            hulkenberg,
            tsunoda,
            devries,
            albon,
            sargeant
        ]


    return (
        <Container>
            <div className="embla overflow-hidden rounded-xl w-full lg:w-[50vw]" ref={emblaRef}>
                <div className="embla__container">
                    {drivers.map((driverName,index) => {
                        return(
                            <Image key={index} className="embla__slide object-cover" alt='Verstappen' src={driverName} />
                        )
                    })}
                </div>
            </div>
        </Container>
    );
}

export default DriversCarousel;