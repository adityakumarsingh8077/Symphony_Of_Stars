import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';
import { heroVideo, smallHeroVideo } from '../utils';

function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useEffect(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.5 });
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  return (
    <section className='w-full nav-height bg-black relative mt-5'>
      <div className="w-full">
        <div className='h-5/6 w-full flex-center flex-col mt-[-15px]'>
          <div style={{ position: 'absolute', top: '10px', left: '30%', zIndex: 100, paddingTop:"60px" }}>
            <p id="hero" className='hero-title '>
              Discover the <span className='text-white'>Symphony of the Stars</span>
             <br/>
              Where Music Meets the Universe
            </p>
          </div>

        </div>
      </div>
      <div className="w-full h-screen">
      <iframe src="https://eyes.nasa.gov/apps/solar-system/#/mercury?interactPrompt=true&featured=false&logo=false&search=false&shareButton=false&menu=false&collapseSettingsOptions=true&hideFullScreenToggle=true" allowfullscreen className="w-full h-full border-none" >
      
      
      </iframe>
</div>

    </section>
  );
}

export default Hero;