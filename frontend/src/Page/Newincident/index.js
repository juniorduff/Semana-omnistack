import React from 'react';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';




export default function NewIncident() {
  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Be the Hero" />
        <h1>Cadastro novo caso</h1>
        <p>Descreva o caso detalhadamente para encontra um heroi pra resolver isso.</p>
        <Link className='.back-link' to="/profile">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para home
        </Link>
      </section>
      <form >
        <input placeholder="Titulo do caso" />
        <textarea  placeholder="Descrição" />
        <input placeholder="Valor em reais" />

        <div className="input-group">
          <input placeholder="Cidade" />
          <input placeholder="UF" style={{ width: 80 }} />
        </div>
        <button className="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>

    )

  }
