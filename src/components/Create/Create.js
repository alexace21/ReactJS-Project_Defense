import { Link, useNavigate } from 'react-router-dom';
import * as productService from '../../services/productService';
import AuthContext from '../../context/AuthContext';
import * as userService from '../../services/authService';

import { useContext } from 'react';

import styles from './Create.module.css';

const Create = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const name = formData.get('name');
        const category = formData.get('category');
        const price = formData.get('price');
        const image = formData.get('image');
        const summary = formData.get('summary');
        const owner = user._id;

        console.log(owner);

        productService.create(
            name,
            category,
            price,
            image,
            summary,
            owner,
        )
            .then(res => {
                console.log(res);
                 const submitOwner = userService.getOne(user._id);
                 const productId = res._id;
               Promise.resolve(submitOwner)
               .then(res => {
                console.log(productId);
                res.collections.push(productId);
                userService.updateUser(user._id, res);
                navigate(`/product-details/${productId}`);
               })
            })
    }

    return (
        <section id="create-page" className={styles.auth}>
            <form id="create" onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Create Offer</h1>
                    <label htmlFor="leg-title">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter product name..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels">Starting Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min={1}
                        placeholder={1}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <button
                        className={styles['submit-btn']}
                        type="submit"
                        value="Create Offer"
                    >Submit</button>
                </div>
            </form>
        </section>
    )
};

export default Create;