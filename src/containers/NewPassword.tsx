import '@styles/NewPassword.scss';
import logo from '@logos/logo_yard_sale.svg';
import { useRef } from 'react';
import Image from 'next/image';

const NewPassword = () => {
  const form = useRef(new HTMLFormElement());

  return (
    <div className="NewPassword">
      <div className="form-container">
        <Image width={200} height={200} src={logo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>

        <form action="/" className="form" ref={form}>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />

          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input type="password" name="new-password" placeholder="*********" className="input input-password" />

          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
