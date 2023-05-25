import { component$ } from "@builder.io/qwik";
import styles from './gallery.module.css';
import Sidenav from "~/components/sidenav";

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content_sidenav">
                <div class="lg:w-4/12">
                    <Sidenav></Sidenav>
                </div>
                <div class="lg:w-8/12">
                    <div class={styles.gallery_content}>
                        <div class={styles.title_container}>
                            <p class={styles.title}>Editar galería</p>
                        </div>
                        <div class={styles.gallery}>
                            <div class={styles.image}>
                                <div class={styles.delete_media_item}>
                                    <img class={styles.icon} src="/assets/icons/trash_w.svg" alt="" />
                                </div>
                            </div>
                            <input id="img" style={'display:none'} type="file" accept="image/*, video/*" /> 
                            <label htmlFor="img">
                            <div class={styles.button}>
                                <img src="/assets/icons/add_image_w.svg" alt="" />
                            </div>
                            </label>
                            
                        </div>
                        <div class={styles.modify_images}>
                            <div class={styles.profile_image_container}>
                                <div class={styles.profile_image}></div>
                                <input id="img" style={'display:none'} type="file" accept="image/*, video/*" />
                                <label htmlFor="img">
                                <div class={styles.profile_button}>Cambiar Foto Perfil</div>
                                </label>
                            </div>
                            <div class={styles.profile_image_container}>
                                <div class={styles.cover_image_mobile}></div>
                                <input id="img" style={'display:none'} type="file" accept="image/*, video/*" />
                                <label htmlFor="img">
                                <div class={styles.profile_button}>Foto Portada para Cel</div>
                                </label>
                            </div>
                            <div class={styles.profile_image_container}>
                                <div class={styles.cover_image_pc}></div>
                                <input id="img" style={'display:none'} type="file" accept="image/*, video/*" />
                                <label htmlFor="img">
                                <div class={styles.profile_button}>Foto Portada para PC</div>
                                </label>
                            </div>
                        </div>
                        <div class={styles.button_container}>
                            <button class={styles.button_save}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
})