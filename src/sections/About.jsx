import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  // Making the globe auto-rotate
  const globeEl = useRef();
  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true; // Enable auto-rotation
      controls.autoRotateSpeed = 1; // Adjust rotation speed
    }
  }, []);

  const handleCopy = () => {

    // Copy email to clipboard
    navigator.clipboard.writeText("mattypaez@yahoo.ca");
    setHasCopied(true);

    // Change copy state and set a timeout so that we can copy again later
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    // Bento Grid style container
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Name Grid(1) */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="./assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Mateo Paez</p>
              <p className="grid-subtext">
                Combining my educational background with a diverse personal portfolio, I specialize
                in crafting dynamic & responsive applications.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Grid(2) */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="./assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        {/* Globe Grid */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: "I'm here!", color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm based in Alberta, Canada and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Passion Grid(3) */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="./assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn't just my
                profession, its my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Grid(4) */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="./assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? './assets/tick.svg' : './assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    mattypaez@yahoo.ca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;