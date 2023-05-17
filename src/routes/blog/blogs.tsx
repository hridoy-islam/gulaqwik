import { component$ } from "@builder.io/qwik";
import styles from './blog.module.css';

export default component$(() => {
    return (
        <>
            <div class={styles.blog_scroll}>
                <div class="grid grid-cols-3">
                    <div>
                        <a href="#" class={styles.preview}>
                            <img src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div>
                                <p class={styles.previewDate}>8 de marzo de 2023</p>
                            </div>
                            <h2 class={styles.title}>Sexo Anal, una práctica segura</h2>
                            <h3 class={styles.description}>Un sex shop puede ser una solución para aquellos que buscan mejorar su pareja o también poder mimarse a sí mismos y experimentar nuevas sensaciones.</h3>
                        </a>
                    </div>
                    <div>
                        <a href="#" class={styles.preview}>
                            <img src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div>
                                <p class={styles.previewDate}>8 de marzo de 2023</p>
                            </div>
                            <h2 class={styles.title}>Sexo Anal, una práctica segura</h2>
                            <h3 class={styles.description}>Un sex shop puede ser una solución para aquellos que buscan mejorar su pareja o también poder mimarse a sí mismos y experimentar nuevas sensaciones.</h3>
                        </a>
                    </div>
                    <div>
                        <a href="#" class={styles.preview}>
                            <img src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div>
                                <p class={styles.previewDate}>8 de marzo de 2023</p>
                            </div>
                            <h2 class={styles.title}>Sexo Anal, una práctica segura</h2>
                            <h3 class={styles.description}>Un sex shop puede ser una solución para aquellos que buscan mejorar su pareja o también poder mimarse a sí mismos y experimentar nuevas sensaciones.</h3>
                        </a>
                    </div>
                    <div>
                        <a href="#" class={styles.preview}>
                            <img src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div>
                                <p class={styles.previewDate}>8 de marzo de 2023</p>
                            </div>
                            <h2 class={styles.title}>Sexo Anal, una práctica segura</h2>
                            <h3 class={styles.description}>Un sex shop puede ser una solución para aquellos que buscan mejorar su pareja o también poder mimarse a sí mismos y experimentar nuevas sensaciones.</h3>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    )
})