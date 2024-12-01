const Footer = () => {

    // Open resume in a new tab
    const handleResumeClick = () => {
        window.open("src/assets/MateoPaez-Resume.pdf");
    };

    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a className="social-icon" href="https://github.com/mateopaez" target="_blank" rel="noreferrer">
            <img src="src/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <button className="social-icon" onClick={handleResumeClick}>
            <img src="src/assets/paper.svg" alt="paper" className="w-1/2 h-1/2" />
          </button>
          <a className="social-icon" href="https://linkedin.com/in/mateopaez" target="_blank" rel="noreferrer">
            <img src="src/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Mateo Paez. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;