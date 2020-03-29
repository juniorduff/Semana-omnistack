import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';



export default function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Watsapp, setWatsapp] = useState('');
  const [City, setCity] = useState('');
  const [uf, setUf] = useState('');
  function handleRegister(e) {

    e.preventDefault();

  }
  return (

    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className='.back-link' to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={Name}
            onChange={e => setName(e.target.value)}

          />
          <input
            type="email"
            placeholder="E-mail"
            value={Email}
            onChange={e => setEmail(e.target.value)}

          />
          <input
            placeholder="WhatsApp"
            value={Watsapp}
            onChange={e => setWatsapp(e.target.value)}

          />


          <div className="input-group">
            <input
              placeholder="Cidade"
              value={City}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF" style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}

            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
