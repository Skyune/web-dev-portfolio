import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "./cardContact.scss";
import TrackVisibility from "react-on-screen";
import { AnimatedSvg } from "./AnimatedSvg";
import VerticalNav from "./VerticalNav";
import SettingsIcon from "./IconCutIn";
import ProfileImg from "../assets/img/progile.webp";
import SettingsContainer from "./SettingsContainer";

export const CardContact = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div id="contact" className="Contact_contact">
      <div className="Contact_header" style={{ opacity: 1, transform: "none" }}>
        <h2 style={{ opacity: 1, transform: "none" }}>Krystian Hołyszko</h2>
        <p
          className="Contact_subheader"
          style={{ opacity: 1, transform: "none" }}
        >
          Junior web developer
        </p>
      </div>
      <img
        className="Contact_img"
        src={ProfileImg}
        alt="profile_bg"
        style={{ opacity: 1 }}
      />
      <div className="Contact_buttons">
        <div
          className="Contact_infoContainer"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="Contact_sectionsContainer">
            <div>
              <p>Lokalizacja: Poznań</p>
              <p className="Contact_textSecondary">z możliwością relokacji</p>
            </div>

            <div className="Contact_locationIcon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 1 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5-4-5h3zm15-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                </g>
              </svg>
            </div>
          </div>
          <SettingsIcon rotate={true} onClick={() => setHidden(!hidden)} />
      <SettingsContainer hidden={hidden} setHidden={setHidden} />
          <SettingsIcon top="75%"></SettingsIcon>
          <VerticalNav />

          <div
            className="Contact_infoSection"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="Contact_socialIcon"
              href="https://bit.ly/3P6vzpt"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                  ></path>
                </g>
              </svg>
            </a>
            <a
              className="Contact_socialIcon"
              href="https://bit.ly/3FpbAxS"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                </g>
              </svg>
            </a>
            <a
              className="Contact_socialIcon"
              href="https://bit.ly/3wd0F6n"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M14.6 2c-.62 0-1.21.24-1.65.68l-9.26 9.25c-.34.34-.68.87-.68 1.65v6.74c0 1.1.9 2 2 2h6.75c.78 0 1.31-.34 1.64-.68L20.32 9.7a2.349 2.349 0 0 0 0-3.3L16.24 2.68A2.296 2.296 0 0 0 14.6 2zm0 1.42l2.68 2.68h-1.42c-.78 0-1.31.34-1.64.68L4.68 14.25a.665.665 0 0 0-.19.51v1.42l-2.68 2.68a.61.61 0 0 0-.15.3.625.625 0 0 0 .06.36.696.696 0 0 0 .15.2l6.93 6.93c.14.14.34.22.55.22h6.75a1.996 1.996 0 0 0 2-2v-6.75c0-.21-.08-.41-.22-.55l-6.93-6.93a.7.7 0 0 0-.2-.15.614.614 0 0 0-.36-.06H9.7zm4.4 0v1.42l1.91 1.91c.34-.33.68-.87.68-1.65v-1.42h-2.6zm-1.12 7.04l-3.8 3.8H5.82l5.11-5.1 3.8-3.8v5.1z"></path>
                </g>
              </svg>
            </a>
          </div>
          <div
            className="Contact_locationSection"
            style={{ opacity: 1, transform: "none" }}
          >
            <button className="Contact_buttonResume" style={{ opacity: 1 }}>
              <div className="Contact_buttonDownload">Pobierz CV</div>
            </button>
            <button className="Contact_buttonHire" style={{ opacity: 1 }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
              </svg>
              Zadaj mi pytanie!
            </button>
            <div
              className="Contact_footer"
              style={{ opacity: 1, transform: "none" }}
            >
              © 2023 Michał Stępień
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
