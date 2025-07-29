const Footer = () => {

    // Open resume in a new tab
    const handleResumeClick = () => {
        window.open("./assets/MateoPaez-Resume.pdf");
    };

    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        {/* left side text */}
        <div className="text-white-500 flex gap-2">
          <a href="https://youtube.com/watch?v=dQw4w9WgXcQ">Terms & Conditions</a>
          <p>|</p>
          <a href="https://youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a>
        </div>

        {/* middle buttons*/}
        <div className="flex gap-3">
          <a className="social-icon" href="https://github.com/mateopaez" target="_blank" rel="noreferrer">
            <img src="./assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <button className="social-icon" onClick={handleResumeClick}>
            <img src="./assets/paper.svg" alt="paper" className="w-1/2 h-1/2" />
          </button>
          <a className="social-icon" href="https://linkedin.com/in/mateopaez" target="_blank" rel="noreferrer">
            <img src="./assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>

        {/* right side text */}
        <p className="text-white-500">© 2025 Mateo Paez. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;