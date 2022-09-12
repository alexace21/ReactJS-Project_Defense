import styles from './Catalog.module.css';
import * as productService from '../../services/productService';
import { useEffect, useState } from 'react';
import CatalogItem from './catalog-item/CatalogItem';

const Catalog = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(res => setProducts(res));
    }, [])


    return (
        <section className={styles['crypto-market']}>
            <h1><span>All</span> Products</h1>



            <div className={styles['offer-list']}>
                {products.map(x => <CatalogItem key={x._id} product={x} /> )}


            </div>

            {/* <div className={styles["no-offer"]}>
                <p>There are no crypto offers found!</p>
            </div> */}


        </section>

    );
};

export default Catalog;