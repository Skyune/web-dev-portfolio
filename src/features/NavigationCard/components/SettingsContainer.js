import { useState, useEffect } from "react";
import "../CardContact.scss";

const SettingsContainer = ({ hidden }) => {
  const [selectedTheme, setSelectedTheme] = useState("");
  useEffect(() => {
    // Load the selected theme from localStorage on component mount
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      document.body.className = savedTheme;
      setSelectedTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (theme) => {
    document.body.className = theme;
    setSelectedTheme(theme);

    // Save the selected theme to localStorage
    localStorage.setItem("selectedTheme", theme);
  };

  return (
    <div className={`Settings_settingsContainer ${hidden ? "hidden" : ""}`}>
      {/*
      <button className="ThemeSelect_buttonTheme button--theme">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
        </svg>
      </button>
      */}
      <div className={`ColorSelect_colorSelect  ${hidden ? "hidden" : ""}`}>
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_orange ${
            selectedTheme === "orange" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("orange")}
        />
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_yellow ${
            selectedTheme === "yellow" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("yellow")}
        />
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_blue ${
            selectedTheme === "blue" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("blue")}
        />
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_red ${
            selectedTheme === "red" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("red")}
        />
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_purple ${
            selectedTheme === "purple" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("purple")}
        />
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_green ${
            selectedTheme === "green" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("green")}
        />
        <button
          className={`ColorSelect_colorButton ColorSelect_colorButtonPallet ColorSelect_pink ${
            selectedTheme === "pink" ? "ColorSelect_colorButtonActive" : ""
          }`}
          onClick={() => handleThemeChange("pink")}
        />
      </div>
    </div>
  );
};

export default SettingsContainer;
