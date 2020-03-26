import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../Services/api'
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('session', {id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (e) {
      alert('Falha ao fazer Login tente novamente.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça o seu logon</h1>
          <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
          <button type="submit" className="button">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
