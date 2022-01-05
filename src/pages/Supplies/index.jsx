import Counter from 'components/Counter';
import Header from 'components/Header';
import postit from 'assets/Img/SuppliesPictures/postit.png';
import kitCovid from 'assets/Img/SuppliesPictures/kitCovid.png';
import stylos from 'assets/Img/SuppliesPictures/stylos.png';
import notebook from 'assets/Img/SuppliesPictures/notebook.png';
import earphones from 'assets/Img/SuppliesPictures/earphones.png';
import stabilo from 'assets/Img/SuppliesPictures/stabilo.png';
import fournitures from 'assets/Img/fournitures.png';
import SSupplies from './style';

export default function Supplies() {
  return (
    <>
      <SSupplies>
        <Header logo={fournitures} />
        <div className="container">
          <div className="kitCovid">
            <img src={kitCovid} alt="kitCovid" />
            <div className="description">
              <h2>Kit anti-covid 19</h2>
              <p>15 masques</p>
              <p>3 gels hydroalcooliques</p>
              <Counter />
            </div>
          </div>
          <div className="pencils">
            <img src={stylos} alt="stylosBic" />
            <div className="description">
              <h2>Stylos BIC</h2>
              <p>Pack de 12</p>
              <p>(bleu, vert, rouge, noir)</p>
              <Counter />
            </div>
          </div>
          <div className="notebook">
            <img src={notebook} alt="notebook" />
            <div className="description">
              <h2>Carnet de notes</h2>
              <p>A5, 120 pages</p>
              <Counter />
            </div>
          </div>
          <div className="earphones">
            <img src={earphones} alt="earphones" />
            <div className="description">
              <h2>Ecouteurs</h2>
              <p>Paire d&apos;écouteurs filaires</p>
              <p>Prise jack 3mm</p>
              <Counter />
            </div>
          </div>
          <div className="stabilo">
            <img src={stabilo} alt="surliner" />
            <div className="description">
              <h2>Stabilo surligneurs</h2>
              <p>dfférents coloris</p>
              <Counter />
            </div>
          </div>
          <div className="postit">
            <img src={postit} alt="postIt" />
            <div className="description">
              <h2>Post-it</h2>
              <p>Bloc de notes repositionnables</p>
              <Counter />
            </div>
          </div>
        </div>
        <button className="addCart" type="button">
          Ajouter au panier
        </button>
      </SSupplies>
    </>
  );
}
