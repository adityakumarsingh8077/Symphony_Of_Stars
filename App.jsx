import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Spline from '@splinetool/react-spline';
import * as Sentry from '@sentry/react';
import p4 from '/public/assets/audio/p4.mp3'; // Replace with your actual paths
import p3 from '/public/assets/audio/p3.mp3';
import p9 from '/public/assets/audio/p9.mp3';
import Learn from './components/Learn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import { jwst01, jwst02} from './utils';
import { p5,p6 } from './utils';

const App = () => {
  const audioRef = useRef(null); // Create a ref to hold the current audio instance

  const handleAudioPlay = (audioSrc) => {
    // If the audio source is already playing, do nothing
    if (audioRef.current && audioRef.current.src === audioSrc) {
      return; // Don't play the same audio again
    }

    // Stop the currently playing audio if it exists
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to start
    }

    // Create a new audio instance and play it
    const audio = new Audio(audioSrc);
    audioRef.current = audio; // Store the reference to the currently playing audio
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  return (
    <Router>
      <main className="bg-black">
        <Navbar />
        <Hero />

        <div>
          <div className="container mx-auto p-4 h-90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="test-white text-center rounded p-6 pt-[100px]" style={{ height: '500px' }}>
                <h1 className="earth-info p-14 pb-2 text-3xl font-semibold">The Earth: Our Dynamic Planet</h1>
                <h4>Earth formed about 4.5 billion years ago from gas and dust left over from the formation of the Sun. It's the only known planet to support life due to its water, atmosphere, and climate. The planet's atmosphere protects us from harmful solar radiation, while its magnetic field shields the surface from space weather. Continents move slowly over time due to plate tectonics, reshaping the land. Earth’s orbit and axial tilt also create the changing seasons we experience annually.</h4>
              </div>

              <div className="test-white text-center rounded p-6">
                <Spline
                  scene="https://prod.spline.design/7DsjfQXLERCYoF7K/scene.splinecode"
                  onClick={() => handleAudioPlay(p3)} // Play audio for first Spline
                />
              </div>



            


              <div className="test-white text-center rounded p-6 border-r-8 border-black">
                <img src={jwst01} alt=""
                
                onClick={() => handleAudioPlay(p5)}  />
              </div>


              <div className="test-white text-center rounded p-6 pt-[140px]" style={{ height: '500px' }}>
                <h1 className="earth-info p-14 pb-2 text-3xl font-semibold">The Crab Nebula: A Supernova's Aftermath</h1>
                <h4>The Crab Nebula, located about 6,500 light-years away in the constellation Taurus, is the remnant of a supernova explosion observed by Earth in 1054 AD. This nebula is composed of expanding clouds of gas and dust, energized by the neutron star (or pulsar) at its center, which rotates rapidly, emitting powerful beams of radiation. The intricate filaments seen in the nebula are composed of hydrogen, helium, and other elements, representing the material ejected during the star's explosive death. The Crab Nebula continues to fascinate astronomers as it provides valuable insights into stellar evolution and supernova mechanics.git</h4>
              </div>
              
           




              <div className="test-white text-center rounded p-6 h-[500px]">
                <h1 className="test1 p-14 pb-2 text-3xl font-semibold pt-[140px]">Yellow Stars: Life Givers of the Universe</h1>
                <h4>Yellow stars, like our Sun, are categorized as G-type stars. They form from massive clouds of gas and dust, igniting nuclear fusion in their cores to produce energy. These stars have stable temperatures and can live for about 10 billion years. The Sun, Earth's primary energy source, has been burning for 4.6 billion years and is essential for sustaining life on our planet.</h4>
              </div>
             
              <div className="test-white text-center rounded p-6">
                <Spline
                  scene="https://prod.spline.design/M-e7yN0BMXE8G8uj/scene.splinecode"
                  onClick={() => handleAudioPlay(p3)} // Play audio for second Spline
                />
              </div>






              <div className="test-white text-center rounded p-6  border-black  pt-[100px]">
                <img src={jwst02} alt=""
                
                onClick={() => handleAudioPlay(p6)}  />
              </div>


              <div className="test-white text-center rounded p-6 pt-[120px]" style={{ height: '500px' }}>
                <h1 className="earth-info p-14 pb-2 text-3xl font-semibold">
                Helix Nebula: The Eye of God</h1>
                <h4>The Helix Nebula, located about 650 light-years away in the constellation Aquarius, is a planetary nebula formed from the outer layers of a dying star. This nebula, often referred to as the "Eye of God" due to its striking appearance, is the result of a star shedding its outer layers as it transitions into a white dwarf. The colorful gas and dust are illuminated by the star's ultraviolet radiation, creating a glowing halo. Over time, this nebula will disperse, leaving only the white dwarf behind, marking the final stages of the star's life cycle.</h4>
              </div>






            

              <div className="test-white text-center rounded p-6" style={{ height: '500px' }}>
                <h1 className="test1 p-14 pb-2 text-3xl font-bold font-serif">Black Holes: The Mysterious Giants of Space</h1>
                <h4>Black holes are regions in space with such strong gravity that not even light can escape them. They form when massive stars collapse at the end of their life cycle. Black holes can vary in size, from small to supermassive, often found at the centers of galaxies. Despite their reputation for destruction, black holes play a key role in shaping galaxies and influencing cosmic evolution.</h4>
              </div>

              <div className="test-white text-center rounded p-6">
                <Spline
                  scene="https://prod.spline.design/YSRiMsQlM4uXfmaS/scene.splinecode"
                  onClick={() => handleAudioPlay(p9)} // Play audio for third Spline (could be a different audio)
                />
              </div>
            </div>
          </div>
        </div>

        <Highlights />
        <Features />
        <HowItWorks />

        <Routes>
          <Route path="/learn" element={<Learn/>} />
        </Routes>

        <Quiz/>

        <Footer />
      </main>
    </Router>
  );
}

export default Sentry.withProfiler(App);