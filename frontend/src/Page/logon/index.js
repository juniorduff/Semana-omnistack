import React, { useState } from 'react';
import api from '../../service/api';
import './styles.css';
import { Link , useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setID] = useState('');
  const history = useHistory();

  async function handleLogin(e) {

    e.preventDefault();

    try {
      const res = await api.post('session', { id });
      console.log(res.data.name);

     localStorage.setItem('ongId', id);
     localStorage.setItem('ongName',res.data.name);

     history.push('/profile');
    } catch (error) {
      alert('Falha ao login , tente novamente');
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID"
            value={id}
            onChange={e => setID(e.target.value)}

          />
          <button onClick={handleLogin} className="button" type="submit">Entrar</button>
          <Link className='.back-link' to="/Register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
