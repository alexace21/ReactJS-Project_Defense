import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    return (
        <div>

            <div className={styles.leftColumn}>
                <div className={styles.image}>
                    <img src='./images/camera.jpg' />
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles['box-summary']}>
                    <h1>Product Title: </h1>
                    <span className={styles.price}> </span>
                    <span className={styles['actual-price']}>Price: 130.00$</span>
                    <p className={styles['box-description']}>Description: </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles['text-box']}>
                        <div disabled contentEditable='false' >
                            <p className={styles.productRate}>This product has been liked: 5 times.</p>
                        </div>
                    </div>
                    <button type='submit' className={styles['submit-btn']}>Like this product!</button>
                </div>
            </div>
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
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
};

export default ProductDetails;