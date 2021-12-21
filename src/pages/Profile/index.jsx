import Header from 'components/Header';
import { Link } from 'react-router-dom';
import UserAvatar from 'components/UserAvatar';
import SProfilPage from './style';
import apple from '../../assets/Img/apple.png';
import samsung from '../../assets/Img/samsung.png';
import applePay from '../../assets/Img/Apple_Pay_logo.svg';
import cb from '../../assets/Img/logo-cb.svg';
import larrondi from '../../assets/Img/LARRONDI.svg';
import logo from '../../assets/Img/easyApp.png';
import card from '../../assets/Img/easyCard.png';

const solde = '37,64€';

export default function ProfilPage() {
  return (
    <>
      <Header logo={logo} display="none" />
      <SProfilPage>
        <article>
          <UserAvatar />
        </article>
        <article className="solde">
          <h3>Solde : {solde} </h3>
          <div className="recharge">
            <button type="button">Recharger</button>
            <button type="button">Donner</button>
          </div>
          <div className="paimentLogo">
            <img src={cb} alt="CB" />
            <img src={applePay} alt="apple pay" />
            <img src={larrondi} alt="l&#039;arrondi" />
          </div>
        </article>
        <article className="badge">
          <h2>Votre badge digital </h2>
          <div className="logo">
            <div className="wallet">
              <a
                target="_blank"
                href="https://www.apple.com/apple-card/"
                rel="noreferrer"
              >
                <img src={apple} alt="apple wallet" />
              </a>
              <a
                target="_blank"
                href="https://www.samsung.com/be_fr/apps/samsung-pass/"
                rel="noreferrer"
              >
                <img src={samsung} alt="samsung wallet" />
              </a>
            </div>
            <div className="card">
              <Link to="/eazycard">
                <img src={card} alt="Eazycard" />
              </Link>
            </div>
          </div>
        </article>
        <article className="resumeF">
          <h2>Mes commandes</h2>
          <p>Recapitulatif commande en cours ...</p>
        </article>
        <article className="resumeL">
          <h2>Mon repas</h2>
          <p>Recapitulatif commande en cours ...</p>
        </article>
      </SProfilPage>
    </>
  );
}
