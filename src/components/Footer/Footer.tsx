import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <ul className="footer__list">
        <li className="footer__list__link">
          <strong>Adress:</strong>
        </li>
        <li className="footer__list__link">Beckomberga allé 8</li>
        <li className="footer__list__link">168 61 Bromma</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list__link">gustav.ehnvik@gmail.com</li>
        <li className="footer__list__link">073-0501470</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list__link">
          <a
            className="footer__list__link__anchor"
            target="_blank"
            href="./assets/cv/gustav-ehnvik-cv.pdf">
            <i
              className="fa fa-download footer__list__link__anchor--cv"
              aria-hidden="true"></i>
          </a>
          <span>CV</span>
        </li>

        <li className="footer__list__link">
          <a
            className="footer__list__link__anchor"
            target="_blank"
            href="https://www.linkedin.com/in/gustav-ehnvik-993a9090/">
            <i
              className="fa fa-linkedin footer__list__link__anchor--linkedin"
              aria-hidden="true"></i>
          </a>
          <span>LinkedIn</span>
        </li>
      </ul>
      <ul id="weather-container"></ul>
    </>
  );
};
