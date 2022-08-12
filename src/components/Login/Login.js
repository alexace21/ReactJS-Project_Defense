import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';
import * as authService from '../../services/authService';

import styles from './Login.module.css';

const Login = () => {
    const { userLoginHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                console.log(authData);
                userLoginHandler(authData)
                navigate('/');
            })
            .catch(() => {
                navigate('/404')
            });
    };

    return (
        <section id="login-page" className={styles.auth}>
            <form id="login" onSubmit={onSubmit}>
                <div className={styles.container}>
                    <div className={styles['brand-logo']}><img src='./images/crypto.png'></img> </div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Example@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <button type="submit" className={styles['btn-submit']} defaultValue="Login">Submit</button>
                    <p className={styles.field}>
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
};

export default Login;