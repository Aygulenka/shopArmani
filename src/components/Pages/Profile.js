// Profile.jsx

import React, { useState } from 'react';
import './Profile.css'

const Profile = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику обработки данных формы
    // В зависимости от isLoginForm, отправить запрос на вход или регистрацию
  };

  return (
    <div className="profile-container">
      <div className= 'block'>
      <h2>{isLoginForm ? 'Вход' : 'Регистрация'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLoginForm && (
          <>
            <label>
             <p className='data'> Имя: </p>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="input-container"/>
            </label>
            <label>
            <p className='data'> Фамилия: </p>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="input-container"/>
            </label>
            <label>
            <p className='data'> Компания:</p>
              <input type="text" name="company" value={formData.company} onChange={handleChange} required className="input-container"/>
            </label>
            <label>
            <p className='data'> Телефон: </p>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-container"/>
            </label>
          </>
        )}
        <label>
        <p className='data'> Email: </p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-container"/>
        </label>
        <label>
        <p className='data'> Пароль: </p>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="input-container"/>
        </label>
        {!isLoginForm && (
          <label>
          <p className='data'>  Повторите пароль: </p>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="input-container"/>
          </label>
        )}
        <button type="submit" className="input-container">{isLoginForm ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
      <p>
        {isLoginForm ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
        <button type="button" onClick={toggleForm}>
          {isLoginForm ? 'Зарегистрируйтесь' : 'Войдите'}
        </button>
      </p>
    </div></div>
  );
};

export default Profile;
