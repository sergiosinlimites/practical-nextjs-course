import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/RecoverPassword.module.scss';

const RecoverPassword = () => {
  return (
    <div className={styles.RecoverPassword}>
      <div className={styles['form-container']}>
        <Image width={200} height={200} src={logo} alt="logo" className={styles.logo} />

        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>

        <div className={styles['email-image']}>
          <Image width={200} height={200} src={email} alt="email" />
        </div>

        <button className="primary-button RecoverPassword-button">Login</button>

        <p className="resend">
          <span>Didn&apos;t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default RecoverPassword;
