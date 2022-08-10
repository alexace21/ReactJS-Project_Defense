import { useNavigate, Link } from 'react-router-dom';
import * as authService from '../../services/authService';

import styles from './Register.module.css';

const Register = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        console.log(email);
        console.log(password);
        console.log(confirmPassword);
        authService.register(email, password)
            .then(() => {
                navigate('/');
            })
    }

    return (
        <section id="register-page" className={styles.auth}>
            <form id="register" onSubmit={onSubmit}>
                <div className={styles.container}>
                <div className={styles['brand-logo']}><img src='./images/crypto.png'></img> </div>
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <button className={styles['btn-submit']} type="submit" defaultValue="Register">Submit</button>
                    <p className={styles.field}>
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
};

export default Register;