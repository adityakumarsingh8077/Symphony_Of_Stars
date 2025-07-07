import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full   my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
        <h2 className="hiw-title">
            Journey through the Universe.
            <br /> Explore the Mysteries of Space.
          </h2>

          <p className="hiw-subtitle">
            Dive into stunning visuals from the James Webb Space Telescope, capturing the beauty and vastness of the cosmos.
          </p>
       
        </div>

      

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                <p className="hiw-text g_fadeIn">
              The *Symphony of the Stars* brings you breathtaking images from space, where {' '}
              <span className="text-white">
                galaxies, stars, and nebulae
              </span> 
              come to life with unmatched clarity.
            </p>

            <p className="hiw-text g_fadeIn">
              Experience the wonders of the universe with{' '}
              <span className="text-white">
                stunning visuals and peaceful music,
              </span>{' '}
              making learning about space an immersive journey.
            </p>
          </div>
              

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Discover</p>
            <p className="hiw-bigtext">Galaxies & Stars</p>
            <p className="hiw-text">like never before</p>
          </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks