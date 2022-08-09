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
                <h1>Product Title</h1>
                <span className={styles.price}> </span>
                <span className={styles['actual-price']}>130.00$</span>
                <p className={styles['box-description']}>Description</p>
                <div className={styles['text-box']}>
                    <div disabled contentEditable='false' >
                        <p className={styles.productRate}>Product rating...</p>
                    </div>
                </div>

                <div className={styles['box-rating']}>
                    <div className={styles['rating-range']}>Ratings and reviews section. Average 3.8 of 5 stars</div>
                    <div className={styles['rating-group']}>
                        <span className={styles['rating-star']} data-index="1"></span>
                        <span className={styles['rating-star']} data-index="2"></span>
                        <span className={styles['rating-star']} data-index="3"></span>
                        <span className={styles['rating-star']} data-index="4"></span>
                        <span className={styles['rating-star']} data-index="5"></span>
                    </div>
                    <output aria-hidden="true" className={styles['rating-count']}>22</output>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                

            </div>
            {/* <div className={styles['default-page']}>
                <div className={styles.row}>
                    
                        <div className={styles['buy-box']}>
                            <div className={styles['buy-boxImage']}>
                                <div className={styles.image}>
                                    <picture>
                                        <img src='./images/camera.jpg' />
                                    </picture>
                                </div>
                            </div>
                            <div className={styles['buy-content']}>

                            </div>
                        </div>

                        <div className={styles['product-content']}>
                            <h1>Product Title</h1>
                            <span className={styles.price}>
                                <span className={styles['actual-price']}>130.00$</span>
                                <p className={styles['box-description']}>Description</p>
                                <div className={styles['text-box']}>
                                    <div disabled contentEditable='false' >
                                        <p>Product rating...</p>
                                    </div>
                                </div>

                                <div className={styles['box-rating']}>
                                    <div className={styles['rating-range']}>Ratings and reviews section. Average 3.8 of 5 stars</div>
                                    <div className={styles['rating-group']}>
                                        <span className={styles['rating-star']} data-index="1"></span>
                                        <span className={styles['rating-star']} data-index="2"></span>
                                        <span className={styles['rating-star']} data-index="3"></span>
                                        <span className={styles['rating-star']} data-index="4"></span>
                                        <span className={styles['rating-star']} data-index="5"></span>
                                    </div>
                                    <output aria-hidden="true" className={styles['rating-count']}>22</output>
                                </div>
                            </span>
                        </div>
                    
                </div>
            </div> */}
        </div>
    )
};

export default ProductDetails;