import Counter from 'components/Counter';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import postit from 'assets/Img/SuppliesPictures/postit.png';
import kitCovid from 'assets/Img/SuppliesPictures/kitCovid.png';
import stylos from 'assets/Img/SuppliesPictures/stylos.png';
import notebook from 'assets/Img/SuppliesPictures/notebook.png';
import earphones from 'assets/Img/SuppliesPictures/earphones.png';
import stabilo from 'assets/Img/SuppliesPictures/stabilo.png';
import fournitures from 'assets/Img/fournitures.png';
import MainButton from 'components/MainButton';
import SSupplies from './style';

export default function Supplies({ theme }) {
  const isDarkTheme = theme === 'dark';
  return (
    <>
      <SSupplies>
        <Header logo={fournitures} />
        <div className="container">
          <div className={isDarkTheme ? 'darkThemeBackground' : 'kitCovid'}>
            <img src={kitCovid} alt="kitCovid" />
            <div className="description">
              <h3>Kit anti-covid 19</h3>
              <p>15 masques</p>
              <p>3 gels hydroalcooliques</p>
              <Counter />
            </div>
          </div>
          <div
            className={isDarkTheme ? 'pencils darkThemeBackground' : 'pencils'}
          >
            <img src={stylos} alt="stylosBic" />
            <div className="description">
              <h3>Stylos BIC</h3>
              <p>Pack de 12</p>
              <p>(bleu, vert, rouge, noir)</p>
              <Counter />
            </div>
          </div>
          <div
            className={
              isDarkTheme ? 'notebook darkThemeBackground' : 'notebook'
            }
          >
            <img src={notebook} alt="notebook" />
            <div className="description">
              <h3>Carnet de notes</h3>
              <p>A5, 120 pages</p>
              <Counter />
            </div>
          </div>
          <div
            className={
              isDarkTheme ? 'earphones darkThemeBackground' : 'earphones'
            }
          >
            <img src={earphones} alt="earphones" />
            <div className="description">
              <h3>Ecouteurs</h3>
              <p>Paire d&apos;écouteurs filaires</p>
              <p>Prise jack 3mm</p>
              <Counter />
            </div>
          </div>
          <div
            className={isDarkTheme ? 'stabilo darkThemeBackground' : 'stabilo'}
          >
            <img src={stabilo} alt="surliner" />
            <div className="description">
              <h3>Stabilo surligneurs</h3>
              <p>dfférents coloris</p>
              <Counter />
            </div>
          </div>
          <div
            className={isDarkTheme ? 'postit darkThemeBackground' : 'postit'}
          >
            <img src={postit} alt="postIt" />
            <div className="description">
              <h3>Post-it</h3>
              <p>Bloc de notes repositionnables</p>
              <Counter />
            </div>
          </div>
        </div>
        <section>
          <MainButton className="addToCart" content="Ajouter au panier" />
        </section>
      </SSupplies>
    </>
  );
}

Supplies.propTypes = {
  theme: PropTypes.string,
};

Supplies.defaultProps = {
  theme: '',
};
