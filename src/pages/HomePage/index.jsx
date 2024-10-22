import { FaPhoneAlt, FaStar } from "react-icons/fa";
import "./index.css";
import Logo from "../../assets/Logo.png";
import line from "../../assets/Line.png";
import human1 from "../../assets/human1.png";
import human2 from "../../assets/human2.png";
import { MdOutlinePlayCircle } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src={Logo} alt="logotip" />
            </Link>
          </div>
          <div className="header-menu">
            <Link to="/">Home</Link>
            <Link to="services">Services</Link>
            <Link to="pages">Pages</Link>
            <Link to="blog">Blog</Link>
            <Link to="concat">Contact</Link>
            <div className="header-span">
              <FaPhoneAlt />
              <p>+49 30 9846565</p>
            </div>
          </div>
        </div>

        <div className="home-body">
          <div className="stars">
            {/* Star elements */}
            {[...Array(10)].map((_, index) => (
              <div key={index} className="star" style={{ left: `${10 * (index + 1)}%`, top: `${100 - 10 * index}%` }}></div>
            ))}
          </div>

          <div className="blocks">
            <div className="block-left">
              <div className="home-left-top">
                <img src={line} alt="linebar" />
                <h1>WELCOME TO Ztech!</h1>
              </div>
              <h1>
                We Are Ready <span className="highlight">To Provide</span> IT
                Solutions
              </h1>
              <p>
                Assertively streamline interactive interfaces after value-added infrastructures. We are 100+ professional software engineers ready to meet your needs.
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
                <div className="reviews">
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
            {[
              { value: "98%", label: "Automatic payment" },
              { value: "100k+", label: "New users per week" },
              { value: "110k+", label: "Monthly active users" },
              { value: "33%", label: "Growth-over-year" },
            ].map((block, index) => (
              <div key={index} className="footer-block">
                <h1>{block.value}</h1>
                <p>{block.label}</p>
                {index < 3 && <div className="hr"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="About-us">
        <h1>Our Company Specializes In IT Solutions & Technology with Passion</h1>
        <div className="about-blocks">
          <div className="about-block1">
            <img src={human1} alt="human1" />
            <div className="about-span">
              <h1>12+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="about-block2">
            <img src={human2} alt="human2" />
          </div>
          <div className="about-block3">
            <h1>We provide all kinds of technology solutions based on your requirements and are the best in our field.</h1>
            <p>
              Assertively streamline interactive interfaces after value-added infrastructures. We deliver end-to-end architectures that bring significant benefits.
            </p>
            <div className="about-hr"></div>
            <h1>We offer IT services to hundreds of SME customers across diverse sectors.</h1>
            <p>
              Progressively simplify end-to-end paradigms to meet all your tech needs.
            </p>
            <button>MORE ABOUT US</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
