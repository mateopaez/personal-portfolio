import Globe from "react-globe.gl"
import Button from "./Button"

const About = () => {
  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            
            {/* Name Grid(1)*/}
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="src/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">Hi, I'm Mateo</p>
                        <p className="grid-subtext">
                            Combining my educational background with a diverse personal portfolio, I specialize in crafting dynamic & responsive websites and applications.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Stack Grid(2)*/}
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="src/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                            I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Globe Grid */}
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 53, lng: -113,
                                text: "I'm here!",
                                color: 'white',
                                size: 100}]}
                            />
                    </div>
                    <div>
                        <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
                        <p className="grid-subtext">I'm based in Alberta, Canada and open to remote work worldwide.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About
