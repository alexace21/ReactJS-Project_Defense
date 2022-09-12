import styles from '../Catalog.module.css';


const CatalogItem = ({product}) => {
    console.log(product)
    return (
        <div className={styles.coin}>
            <div className={styles['coin-img']}>
                <img src={product.image} />
            </div>
            <div className={styles["coin-info"]}>
                <h1>{product.name}</h1>
                <p><span>Price: </span>${product.price}</p>
                <p><span>Category: </span>{product.category}</p>
            </div>


            <a href={`/catalog/product-details/${product._id}`} className={styles["btn-details"]}>Details</a>
        </div>
    )
};

export default CatalogItem;