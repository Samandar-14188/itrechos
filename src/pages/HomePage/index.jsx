import { FaPhoneAlt, FaStar } from "react-icons/fa";
import "./index.css";
import Logo from "../../assets/Logo.png";
import line from "../../assets/Line.png";
import human1 from '../../assets/human1.png'
import human2 from '../../assets/human2.png'
import { MdOutlinePlayCircle } from "react-icons/md";
import { useEffect } from "react";
function Homepage() {
  useEffect(() => {
    const block1 = document.querySelector(".right-block1");
    const block2 = document.querySelector(".right-block2");

    const startAnimation = () => {
      block1.style.animation = "slideInFromLeft 1s forwards";
      block2.style.animation = "slideInFromRight 1s forwards";
      block1.style.opacity = 1;
      block2.style.opacity = 1;
    };

    const rotateBlocks = () => {
      block1.style.animation = "spin 1s linear forwards";
      block2.style.animation = "spin 1s linear forwards";

      setTimeout(() => {
        block1.style.animation = "";
        block2.style.animation = "";
      }, 1000);
    };

    startAnimation();

    const intervalId = setInterval(rotateBlocks, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="homepage">
      <div className="home-header">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logotip" />
          </a>
        </div>
        <div className="header-menu">
          <a href="/">Home</a>
          <a href="#">Services</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <div className="header-span">
            <a href="#">
              <FaPhoneAlt />
            </a>
            <p>+49 30 9846565</p>
          </div>
        </div>
      </div>
      <div className="home-body">
        <div className="stars">
          <div className="star" style={{ left: "10%", top: "90%" }}></div>
          <div className="star" style={{ left: "30%", top: "80%" }}></div>
          <div className="star" style={{ left: "50%", top: "85%" }}></div>
          <div className="star" style={{ left: "70%", top: "75%" }}></div>
          <div className="star" style={{ left: "90%", top: "65%" }}></div>
          <div className="star" style={{ left: "15%", top: "95%" }}></div>
          <div className="star" style={{ left: "35%", top: "70%" }}></div>
          <div className="star" style={{ left: "55%", top: "60%" }}></div>
          <div className="star" style={{ left: "75%", top: "50%" }}></div>
          <div className="star" style={{ left: "95%", top: "40%" }}></div>
        </div>
        <div className="blocks">
          <div className="block-left">
            <div className="home-left-top">
              <img src={line} alt="linebar" />
              <h1>WELCOME TO Ztech!</h1>
            </div>
            <h1>
              We Are Ready <span className="highlight">To Provide</span> It
              Solution
            </h1>
            <p>
              Assertively streamline interactive interfaces after value
              infrastructures. untorn datively fabricate fully tested
              methodologies before Assertively streamline interactive interfaces
              after infrastructures. We are 100+ professional software.
            </p>
            <div className="buttons">
              <button id="btn1">Explore Services</button>
              <button id="btn2">
                <MdOutlinePlayCircle />
                Watch a video
              </button>
            </div>
          </div>
          <div className="block-right">
            <div className="right-block1">
              <div className="clutch">
                <p>REVIEWED ON</p>
                <h1>Clutch</h1>
              </div>
              <div className="rewievs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>31 REVIEWS</p>
              </div>
            </div>
            <div className="right-block2">
              <h1>2000+</h1>
              <p>Happy Clients</p>
              <div className="right-stars">
                <FaStar />
                <p>4.9 (Review)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="footer-blocks">
          <div className="footer-block">
            <h1>98%</h1>
            <p>Automatic payment</p>
          </div>
          <div className="hr"></div>
          <div className="footer-block">
            <h1>100k+</h1>
            <p>New users per week</p>
          </div>
          <div className="hr"></div>
          <div className="footer-block">
            <h1>110k+</h1>
            <p>Monthly active users</p>
          </div>
          <div className="hr"></div>
          <div className="footer-block">
            <h1>33%</h1>
            <p>Growth-over-year</p>
          </div>
        </div>
      </div>
    </div>
    <div className="About-us">
      <h1>Our Company Specialize In IT Solutions & Technology with Passion</h1>
      <div className="about-blocks">
        <div className="about-block1">
          <img src={human1} alt="" />
          <div className="about-span">
            <h1>12+</h1>
            <p>Years  Experience</p>
          </div>
        </div>
        <div className="about block2">
          <img src={human2} alt="" />
        </div>
        <div className="about-block3">
          <h1>We try to give all kind of technology solution as your requirements and we are the best in field.</h1>
          <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interfaces .</p>
          <div className="about-hr"></div>
          <h1>Provide IT services to hundreds of SME customers across a diverse range of sectors.</h1>
          <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interfaces .</p>
          <button>MORE ABOUT US</button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Homepage;
