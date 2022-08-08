import styles from './Login.module.css';

const Login = () => {
    return(
        <section id="login-page" className={styles.auth}>
            <form id="login">
                <div className={styles.container}>
                    <div className={styles['brand-logo']}><img src='./images/crypto.png'></img> </div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <button type="submit" className={styles['btn-submit']}defaultValue="Login">Submit</button>
                    <p className={styles.field}>
                        <span>
                            If you don't have profile click <a href="/register">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
};

export default Login;