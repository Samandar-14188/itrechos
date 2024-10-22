import group from "../../assets/group.png";
import icon2 from "../../assets/icon2.png";
import iconbu from "../../assets/iconbu.png";
import icon3 from "../../assets/icon3.png";
import right from "../../assets/right.png";
import "./Services.css";
function Services() {
  return (
    <div className="services">
      <div className="services-blocks">
        <div className="services-left">
          <h1>We Providing Complete Professional IT Services.</h1>
          <p>
            Assertively streamline interactive interfaces after value a
            infrastructures. Authoritatively fabricate fully tested
            methodologies before Holistic deliver end-to-end architectures
            rather sound benefits.
          </p>
          <div className="services-left-block1">
            <img src={group} alt="" />
            <div className="services-span">
              <h1>Analytical Research Problem Findings</h1>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before.{" "}
              </p>
            </div>
          </div>
          <div className="services-left-block1">
            <img src={group} alt="" />
            <div className="services-span">
              <h1>Analytical Research Problem Findings</h1>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before.{" "}
              </p>
            </div>
          </div>
          <div className="services-left-block1">
            <img src={group} alt="" />
            <div className="services-span">
              <h1>Analytical Research Problem Findings</h1>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before.
              </p>
            </div>
          </div>
        </div>
        <div className="services-right">
          <div className="services-right-block srb1">
            <img src={iconbu} alt="" />
            <h2>Network solution</h2>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures.
            </p>
            <div className="right-span">
              <img src={right} alt="" />
              <p>LEARN MORE</p>
            </div>
          </div>
          <div className="services-right-block srb2">
            <img src={icon2} alt="" />
            <h2>Data analytics</h2>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures.
            </p>
            <div className="right-span">
              <img src={right} alt="" />
              <p>LEARN MORE</p>
            </div>
          </div>
          <div className="services-right-block srb3">
            <img src={icon3} alt="" />
            <h2>Cyber security</h2>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures.
            </p>
            <div className="right-span">
              <img src={right} alt="" />
              <p>LEARN MORE</p>
            </div>
          </div>
          <div className="services-right-block srb4">
            <img src={right} alt="" />
            <h1>View all services</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Services;
