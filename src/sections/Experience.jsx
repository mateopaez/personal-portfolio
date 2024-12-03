import { workExperiences } from '../index.js';

const WorkExperience = () => {

  return (
    <section className="c-space my-20 w-full" id="experience">
        <div className="w-full text-white-600">
            <p className="head-text">My Work Experience</p>

            {/* Main work Container */}
            <div className="work-container">
                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">{workExperiences.map((item, index) => (
                        <div key={index} className="work-content_container group">

                            {/* Logo and Content bar containers */}
                            <div className="flex flex-col h-full justify-start items-center py-2">
                                <div className="work-content_logo">
                                    <img className="w-full h-full rounded-2xl" src={item.icon} alt="" />
                                </div>
                                <div className="work-content_bar" />
                            </div>
                            
                            {/* Work information (name, position, date, and title) */}
                            <div className="sm:p-5 px-2.5 py-5">
                                <p className="font-bold text-white-800">{item.name}</p>
                                <p className="text-sm mb-5">
                                    {item.pos} --- <span>{item.duration}</span>
                                </p>
                                <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                            </div>
                        </div>
                    ))} 
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WorkExperience;
