import styles from '../../Header/TopBar.module.css';

const ProductSearch = () => {
    return (
        <div className={styles['search-box']}>
            <img src="./images/search.png" alt="searchImage" />
            <input type="text" placeholder='Search...' />
        </div>
    )
};

export default ProductSearch;