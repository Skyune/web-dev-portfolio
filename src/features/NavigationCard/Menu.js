import { useState } from "react";
import styles from "./Menu.module.scss";

export const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="menu" className={styles.Menu}>
            <div className={`${styles.BoxShadow_boxShadow} ${isOpen ? styles.BoxShadow_boxShadowHidden : styles.BoxShadow_boxShadowVisible}`}></div>
            <button onClick={handleToggle}>
                <div className={`${styles.MenuToggle_menuToggle} ${isOpen ? "" : styles.MenuToggle_menuToggleActive}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <nav className={`${styles.Menu_container} ${isOpen ? styles.Menu_containerHidden : styles.Menu_containerVisible}`}>
        <div class={styles.Header_container}>
          <div class={styles.Header_titleContainer}>
            <div
              class={styles.Header_title}
             
            >
              menu
            </div>
          </div>
          <div class={styles.Header_linkContainer}>
            <div
              class={styles.Header_linkLine}
            
            ></div>
            <a
              class={styles.Header_headerLink}
              href="mailto:krystianh595@gmail.com"
              style={{ opacity: 1 }}
            >
              <span>k</span>
              <span>r</span>
              <span>y</span>
              <span>s</span>
              <span>t</span>
              <span>i</span>
              <span>a</span>
              <span>n</span>
              <span>h</span>
              <span>5</span>
              <span>9</span>
              <span>5</span>
              <span>@</span>
              <span>g</span>
              <span>m</span>
              <span>a</span>
              <span>i</span>
              <span>l</span>
              <span>.</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
            </a>
          </div>
        </div>
        <div class={styles.Menu_menuColumn}>
          <ul class={styles.PageLinks_links}>
            <li class="undefined">
              <div class={styles.PageLinks_linkContainer}>
                <div
                  class={styles.PageLinks_linkIcon}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                  </svg>
                </div>
                <a href="#home">
                  Witaj
                </a>
              </div>
            </li>
            <li class="undefined  ">
              <div class={styles.PageLinks_linkContainer}>
                <div
                  class={styles.PageLinks_linkIcon}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 15 15"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <a href="#about">
                  O mnie
                </a>
              </div>
            </li>
            <li class="undefined">
              <div class={styles.PageLinks_linkContainer}>
                <div
                  class={styles.PageLinks_linkIcon}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M48 336v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96"
                    ></path>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M48 336h144m128 0h144m-272 0a64 64 0 00128 0"
                    ></path>
                    <path
                      fill="none"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96L432 72c-5-27-23-40-48-40z"
                    ></path>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M48 192h144m128 0h144m-272 0a64 64 0 00128 0"
                    ></path>
                  </svg>
                </div>
                <a href="#skills">
                  Umiejętności
                </a>
              </div>
            </li>
            <li class="undefined  ">
              <div class={styles.PageLinks_linkContainer}>
                <div
                  class={styles.PageLinks_linkIcon}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="448"
                      height="320"
                      x="32"
                      y="128"
                      fill="none"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="48"
                      ry="48"
                    ></rect>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32m112 112H32m288 0v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
                    ></path>
                  </svg>
                </div>
                <a href="#work">
                  Portfolio
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
