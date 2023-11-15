import { useState } from "react";
// Import icons
import Icon from "@iconify/react";
import boxSeam from "@iconify/icons-bi/box-seam";
import houseIcon from "@iconify/icons-si-glyph/house";
import baselineFacebook from "@iconify/icons-ic/baseline-facebook";
import emailIcon from "@iconify/icons-entypo/email";
// Import redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../action/action";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const handleEmail = () => {
    const subject = encodeURIComponent(`Förråds frågor ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:forradshotelbjasta@hotmail.com?subject=${subject}&body=${body}`;
};

  // redux useSelector
  const toggleReducer = useSelector((state) => state.toggleReducer);

  // redux dispatch
  const dispatch = useDispatch();

  // functioner dispatch
  function handleToggleChange(e) {
    dispatch(toggleAction(!toggleReducer));
  }

  const scrollWinOurStorage = () => {
    window.scrollTo(0, 500);
  };
  const scrollWinQuestions = () => {
    window.scrollTo(0, 2655);
  };
  const scrollWinInfo = () => {
    window.scrollTo(0, 3140);
  };

  return (
    <footer className="footerWrapper">
      <div className="footerBox">
        <p onClick={handleToggleChange} className="footerP">
          Boka Förråd
        </p>
        <p onClick={scrollWinOurStorage} className="footerP">
          Våra Förråd
        </p>
        <p onClick={scrollWinQuestions} className="footerP">
          Vanliga Frågor
        </p>
        <p onClick={scrollWinInfo} className="footerP">
          Info
        </p>
      </div>

      <div className="footerBox">
        <h3 className="footerH3">Kontakta Oss</h3>
        <Icon className="footerSnabel" icon={emailIcon} />
        <div className="footerBox">
          <input
            className="footerInput"
            type="text"
            placeholder="Namn*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="footerInput"
            type="text"
            placeholder="MejlAdress*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="footerTextArea"
            type="text"
            placeholder="Meddelande*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="btn" onClick={handleEmail}>
            Skicka Mejl
          </button>
          <p className="footerCopywright">
            Copywright Förråds Hotel Bjästa AB 2021
          </p>
        </div>
      </div>

      <div className="footerBox">
        {/* <div className="footerContainerRight"> */}
        <a href="http://localhost:3000/" className="footerBoxRight">
          <Icon className="footerLogo" icon={boxSeam} />
          <p className="footerP">Förråds Hotel Bjästa</p>
        </a>

        <a
          href="https://www.google.se/maps/place/Orkesterv%C3%A4gen+19,+893+30+Bj%C3%A4sta/@63.2040748,18.5043895,17z/data=!3m1!4b1!4m5!3m4!1s0x467b540cafc2a55f:0xe0d83c8d7b27c6b8!8m2!3d63.2040724!4d18.5065782"
          target="_blank"
          rel="noreferrer"
          className="footerBoxRight"
        >
          <Icon className="footerLogo" icon={houseIcon} />
          <p className="footerP">Orkestervägen 19, 893 30 Bjästa</p>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61553516910517"
          target="_blank"
          rel="noreferrer"
          className="footerBoxRight"
        >
          <Icon className="footerLogo" icon={baselineFacebook} />
          <p className="footerP">Förråds Hotel Bjästa</p>
        </a>
      </div>
    </footer>
  );
}
