import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ilyas Sophia </span>
            from <span className="purple"> Okene, Kogi </span>
            <br />I am a junior pursuing BSCE in Theatre Arts in Unilag
            <br />
            <br />
            Apart from acting, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to make a difference using my skills"{" "}
          </p>
          <footer className="blockquote-footer">Sophie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
