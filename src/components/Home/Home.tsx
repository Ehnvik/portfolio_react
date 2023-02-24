import "./Home.scss";
import logo from "../../assets/img/bild-gustav.jpg";

export const Home = () => {
  return (
    <main className="home">
      <section className="home__section">
        <article className="home__section__img-container">
          <img
            className="home__section__img-container__img"
            src={logo}
            alt="Bild på Gustav"
          />
        </article>
        <article className="home__section__container">
          <div className="home__section__container__name-title">
            <div>g</div>
            <div>u</div>
            <div>s</div>
            <div>t</div>
            <div>a</div>
            <div>v</div>
            <div></div>
            <div>e</div>
            <div>h</div>
            <div>n</div>
            <div>v</div>
            <div>i</div>
            <div>k</div>
          </div>
          <article className="home__section__container__info-container">
            <div className="home__section__container__info-container__info-title">
              <span className="home--logo">
                <i className="home__section__container__info-container__info-title--logo fa-solid fa-circle-question"></i>
              </span>
              Lite om mig...
            </div>
            <p className="home__section__container__info-container__info-text">
              Hej! Mitt namn är Gustav Ehnvik. Jag är 27 år gammal och bor med
              min sambo i Bromma. Jag studerar idag till webbutvecklare inom
              e-handel på Medieinstitutet i Stockholm. Utbildningen är på 2 år.
              När jag är klar med utbildningen så kommer jag att ha kunskaper
              inom HTML, CSS/SCSS, JavaScript, TypeScript, React, SQL, Git, API
              och PHP.
              <br />
              Som person så är jag amibitiös, noggrann och lätt att ha att göra
              med. Jag gillar att jobba hårt, så när jag bestämmer mig för att
              ta mig an något så gör jag det fullt ut och helhjärtat. Jag ger
              inte upp i det första taget. På fritiden så gillar jag att umgås
              med min sambo och mina vänner. Mitt största intresse här i livet
              är att resa.
              <br />
              <br />
              Jag söker för närvarande{" "}
              <em>LIA vecka 42 - 51 2023 och vecka 6 - 20 2024</em>. Om du
              driver ett företag eller jobbar på ett företag som söker
              LIA-studenter. Så är du varmt välkommen att kontakta mig{" "}
              <a
                className="home__section__container__info-container__info-text__contact-link"
                href="./html/contact.html">
                <strong>HÄR</strong>
              </a>
              .
            </p>
          </article>
        </article>
      </section>
    </main>
  );
};
