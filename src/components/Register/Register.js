import styles from './Register.module.css';

const Register = () => {
    return (
        <section id="register-page" className={styles.auth}>
            <form id="register" >
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
                            If you already have profile click <a href="/login">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
};

export default Register;