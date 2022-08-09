import styles from './Create.module.css';

const Create = () => {
    return (
        <section id="create-page" className={styles.auth}>
            <form id="create">
                <div className={styles.container}>
                    <h1>Create Offer</h1>
                    <label htmlFor="leg-title">Product Name:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter product title..."
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
                        id="imageUrl"
                        name="imageUrl"
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