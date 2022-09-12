import styles from '../Catalog.module.css';
import { Link } from 'react-router-dom'

const CatalogItem = ({ product }) => {
    console.log(product._id)
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

            <Link to={`/catalog/product-details/${product._id}`} className={styles["btn-details"]}>Details</Link>
        </div>
    )
};

export default CatalogItem;