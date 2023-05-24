import { $, component$, useStore } from "@builder.io/qwik";
import styles from './password.module.css';
import Sidenav from "~/components/sidenav";

export default component$(() => {
    const showPassword = useStore({password: false})
    const passwordToogle = $(() => showPassword.password = !showPassword.password);
    return (
        <div class={styles.main_section}>
            <div class="content_sidenav">
                <div class="w-4/12">
                    <Sidenav></Sidenav>
                </div>
                <div class="w-8/12">
                    <div class={styles.tab_change_password}>
                        <div class={styles.title_container}>
                            <p class={styles.title}>Cambiar contraseña</p>
                        </div>
                        <div class={styles.content}>
                        <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Contraseña actual</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type={showPassword.password ? 'text' : 'password'} class={styles.input} />
                                    <button onClick$={passwordToogle} class={styles.show_password}>
                                        {
                                            showPassword.password ? <img src="/assets/icons/eye.svg" alt="eye" /> : 
                                            <img src="/assets/icons/eye-slash.svg" alt="eye" />
                                        }
                                    </button>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Nueva contraseña</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type={showPassword.password ? 'text' : 'password'} class={styles.input} />
                                    <span  onClick$={passwordToogle} class={styles.show_password}>
                                        {
                                            showPassword.password ? <img src="/assets/icons/eye.svg" alt="" /> : 
                                            <img src="/assets/icons/eye-slash.svg" alt="" />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Repetir nueva contraseña</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type={showPassword.password ? 'text' : 'password'} class={styles.input} />
                                    <span  onClick$={passwordToogle} class={styles.show_password}>
                                        {
                                            showPassword.password ? <img src="/assets/icons/eye.svg" alt="" /> : 
                                            <img src="/assets/icons/eye-slash.svg" alt="" />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div  class={styles.button_container}>
                                <button class={styles.button_save}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})