import Counter from 'components/Counter';
import Header from 'components/Header';
import fournitures from 'assets/Img/fournitures.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainButton from 'components/MainButton';
import SSupplies from './style';

require('dotenv').config();

export default function Supplies() {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/supplies`).then(({ data }) => {
      setSupplies(data);
    });
  }, []);

  return (
    <>
      <SSupplies>
        <Header logo={fournitures} />
        <div className="container">
          {supplies.map((supply) => {
            return (
              <div key={supply.id} className="supply">
                <img src={supply.picture} alt={supply.name} />
                <div className="description">
                  <h2>{supply.name}</h2>
                  <p>{supply.description}</p>
                  <Counter />
                </div>
              </div>
            );
          })}
        </div>
        <section>
          <MainButton className="addToCart" content="Ajouter au panier" />
        </section>
      </SSupplies>
    </>
  );
}
