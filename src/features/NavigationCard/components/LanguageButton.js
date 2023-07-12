import "./LanguageButton.scss";

import React from "react";

const SettingsIcon = ({ top, rotate, onClick }) => {
  return (
    <div>
      <nav className="SettingIcon" style={{ top: top }}>
        <ul className="Icon">
        <button class="LanguageSelect_buttonLang LanguageSelect_buttonLangPl LanguageSelect_buttonLangDesktop  button--lang"></button>
        </ul>
      </nav>
    </div>
  );
};

export default SettingsIcon;
