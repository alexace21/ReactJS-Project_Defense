import styles from './Page404.module.css';

const Page404 = () => {
    return (
        <div className={styles['home-content-container']}>
            <div className={styles['home-text']}>
                <div className={styles['hs-cont']}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                    <div className={styles['hs-wrap']}>
                        <div className={styles['hs-line13']}>
                            <font face='Segoe UI'>404</font>
                        </div>
                        <br />
                        <div className={styles['hs-line4']}>
                        <font face='Segoe UI'>Oppps, nothing to see here...</font>
                        </div>
                        <div className={styles['local-scroll']}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;