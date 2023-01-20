import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import '@styles/RecoverPassword.scss';

const RecoverPassword = () => {
  return (
    <div class="RecoverPassword">
    <div class="form-container">
      <img src={logo} alt="logo" class="logo" />

      <h1 class="title">Email has been sent!</h1>
      <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>

      <div class="email-image">
        <img src={email} alt="email" />
      </div>

      <button class="primary-button RecoverPassword-button">Login</button>

      <p class="resend">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  );
}

export default RecoverPassword;