import { component$ } from "@builder.io/qwik";
import styles from './blog.module.css';

export default component$(({blog}) => {
    console.log(blog)
    return (
        <>
        <div>
                        <a href="#" class={styles.preview}>
                            <img src={blog?.previewImage} class={styles.postPreviewImage} alt="img" />
                            <div>
                                <p class={styles.previewDate}>8 de marzo de 2023</p>
                            </div>
                            <h2 class={styles.title}>{blog?.title}</h2>
                            <h3 class={styles.description}>{blog?.seoDescription}</h3>
                        </a>
                    </div>
            
        </>
    )
})