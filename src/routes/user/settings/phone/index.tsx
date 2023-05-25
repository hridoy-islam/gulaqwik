import { component$ } from "@builder.io/qwik";
import styles from './phone.module.css';
import Sidenav from "~/components/sidenav";

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content_sidenav">
                <div class="lg:w-4/12">
                    <Sidenav></Sidenav>
                </div>
                <div class="lg:w-8/12">
                <div class={styles.tab_change_password}>
                        <div class={styles.title_container}>
                            <p class={styles.title}>Cambiar teléfono</p>
                            <p class={styles.paragraph}>Ingresa tu nuevo teléfono celular y te enviaremos una notificación para que puedas verificarlo</p>
                        </div>
                        <div class={styles.content}>
                        <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Teléfono actual</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Nuevo teléfono</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Repetir nuevo teléfono</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" class={styles.input} />
                                </div>
                            </div>
                            <div  class={styles.button_container}>
                                <button class={styles.button_save}>Verificar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
})