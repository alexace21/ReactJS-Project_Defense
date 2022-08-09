import styles from './Home.module.css'

const Home = () => {

    return (


        <div className={styles.container}>
            {/* //---------Left-sidebar---------\\ */}
            <div className={styles['left-sidebar']}>
                <span className={styles.sideTitle}>Top Traders</span>
                <div>
                    <ul className={styles['imp-links']}>
                        <li><a href=""><img src="./images/image4.png" alt="img1" /> - Bounty_Hunter</a>Profit: 2314</li>
                        <li><a href=""><img src="./images/image2.png" alt="img2" /> - Gold Member</a>Profit: 2314</li>
                        <li><a href=""><img src="./images/image3.png" alt="img3" /> - Bigozzaa</a>Profit: 2314</li>
                        <li><a href=""><img src="./images/image1.jpg" alt="img4" /> - Certified</a>Profit: 2314</li>
                        <li><a href="">See More</a></li>
                    </ul>

                </div>
            </div>
            {/* //---------Main-sidebar---------\\ */}
            <div className={styles['main-content']}>
                {/* Product1 */}
                <div className={styles.game}>
                    <div className={styles['image-wrap']}>
                        <img src="./images/bugatii.jpg" />
                        <h3 className={styles['product-title']}>Product1</h3>
                        <div className={styles['data-buttons']}>
                            <a className={styles['btn']} href="product-details">Details</a>
                        </div>
                    </div>
                </div>


                {/* Product2 */}
                <div className={styles.game}>
                    <div className={styles['image-wrap']}>
                        <img src="./images/product2.jpg" />
                        <h3 className={styles['product-title']}>Product2</h3>
                        <div className={styles['data-buttons']}>
                            <a className={styles['btn']} href="product-details">Details</a>
                        </div>
                    </div>
                </div>


                {/* Product3 */}
                <div className={styles.game}>
                    <div className={styles['image-wrap']}>
                        <img src="./images/dog.jpg" />
                        <h3 className={styles['product-title']}>Product3</h3>
                        <div className={styles['data-buttons']}>
                            <a className={styles['btn']} href="product-details">Details</a>
                        </div>
                    </div>
                </div>

                {/* Product4 */}
                <div className={styles.game}>
                    <div className={styles['image-wrap']}>
                        <img src="./images/camera.jpg" />
                        <h3 className={styles['product-title']}>Product4</h3>
                        <div className={styles['data-buttons']}>
                            <a className={styles['btn']} href="product-details">Details</a>
                        </div>
                    </div>
                </div>

                {/* Product5 */}
                <div className={styles.game}>
                    <div className={styles['image-wrap']}>
                        <img src="./images/weapon.png" />
                        <h3 className={styles['product-title']}>Product5</h3>
                        <div className={styles['data-buttons']}>
                            <a className={styles['btn']} href="product-details">Details</a>
                        </div>
                    </div>
                </div>
            </div>






            {/* //---------Right-sidebar---------\\ */}
            <div className={styles['right-sidebar']}>
                <div className={styles['sidebar-title']}>
                    <h4>Gadgets</h4>
                </div>
                <img src="./images/trader2.png" />
            </div>
        </div>

    );

};

export default Home;