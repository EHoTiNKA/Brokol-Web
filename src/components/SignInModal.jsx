import React from "react";
import "./styles/SignInModal.scss";
import SignInIcon from "../widgets/SignInIcon";

const SignInModal = () => {
  return (
    <div className="signUpModal">
      <div className="signUpForm">
        <h1>Регистрация</h1>
        <p>Нет аккаунта, так давайте заведём!</p>
        <div className="formGroup1">
          <label className="labelName"> Имя пользователя</label>
          <input className="inputName" placeholder="Ваше имя"></input>
        </div>
        <div className="formGroup2">
          <label className="labelPass"> Пароль</label>
          <input className="inputPass" placeholder="Ваш пароль"></input>
        </div>
        <div className="formGroup3">
          <label className="labelMail"> E-mail</label>
          <input className="inputMail" placeholder="Ваша почта"></input>
        </div>

        <button className="regButton">Регистрация</button>
      </div>
      <SignInIcon />
      <div className="secondGridModal">
        <div className="logInInvitation">
          <div className="secondModalContent">
            <h2>Добро пожаловать обратно</h2>
            <p>Готовы вернуться обратно к заказам?</p>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
