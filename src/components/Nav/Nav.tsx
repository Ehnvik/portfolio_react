import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <>
      <nav className="menu">
        <div className="menu__logo-box">
          <a className="menu__logo-box__anchor" href="/">
            <i className="menu__logo-box__anchor--logo fa-solid fa-briefcase fa-xl"></i>
          </a>
        </div>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__container" htmlFor="menu__toggle">
          <span className="menu__container__button"></span>
        </label>
        <ul className="menu__list">
          <li className="menu__list__link">
            <a className="menu__list__link__anchor" href="/">
              Hem
            </a>
          </li>
          <li className="menu__list__link">
            <a className="menu__list__link__anchor" href="/projects">
              Projekt
            </a>
          </li>
          <li className="menu__list__link">
            <a className="menu__list__link__anchor" href="/resume">
              Resumé
            </a>
          </li>
          <li className="menu__list__link">
            <a className="menu__list__link__anchor" href="/contact">
              Kontakt
            </a>
          </li>
          <li className="menu__list__link">
            <a className="menu__list__link__anchor" href="/" target="_blank">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
