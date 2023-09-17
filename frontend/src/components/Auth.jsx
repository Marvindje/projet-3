import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Auth({ onAuthSuccess }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState(''); // Nouvelle variable d'état pour la date de naissance
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage('Les identifiants sont incomplets.');
      return;
    }

    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    const payload = {
      username,
      email,
      password,
    };

    // Ajoute la date de naissance au payload si l'utilisateur crée un compte
    if (!isLogin) {
      payload.birthDate = birthDate;
    }

    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
      if (response.status === 200) {
        localStorage.setItem('loggedInUsername', username);
        onAuthSuccess();
      }
    } catch (error) {
      setErrorMessage('Les identifiants sont incorrects.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
          UserName
        </label>
        <textarea
          id="username"
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          id="email"
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          id="password"
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Champ pour la date de naissance, affiché uniquement lors de la création d'un compte */}
      {!isLogin && (
        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-600">
            Date de naissance
          </label>
          <input
            id="birthDate"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
      )}

      <button
        className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        type="submit"
      >
        {isLogin ? 'Login' : 'Sign in'}
      </button>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Sign in ' : 'Connexion'}
      </button>
    </form>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
};

export default Auth;
