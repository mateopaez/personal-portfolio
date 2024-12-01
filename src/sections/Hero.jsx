import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../index.js';
import HackerRoom from '../components/HackerRoom.jsx'

const Hero = () => {
  // Using media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">

        {/* Main text */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi <span className="waving-hand">👋</span>, I'm Mateo
            </p>
            <p className="hero_tag text-gray_gradient glow">Full-Stack Problem Solver</p>
        </div>

        <div className="w-full h-full absolute inset-0">

            {/* Canvas section for 3d objects */}
            <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
                {/* Keep Leva controller hidden (only use in Dev): */}
                <Leva hidden />

                {/* Perspective camera */}
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                {/* Main hero camera and hackerroom scene */}
                <HeroCamera isMobile={isMobile}>
                <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                </HeroCamera>

                {/* Floating objects around the scene */}
                <group>
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                </group>

                {/* Adding the lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
            </Canvas>
        </div>

        {/* Button at the bottom of the screen */}
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
            </a>
        </div>
    </section>
  );
};

export default Hero;