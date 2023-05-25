import { component$ } from "@builder.io/qwik";
import styles from './sidenav.module.css';

export default component$(() => {
    return (
        <div class={styles.aside_container}>
            <div>

                <div>
                    <a href="/user/settings/profile"
                        class={styles.label}>Editar perfil</a>
                </div>
                <div>
                    <a href="/user/settings/gallery" class={styles.label}>Editar galería</a>
                </div>
                <div>
                    <a href="/user/settings/password" class={styles.label}>Cambiar contraseña</a>
                </div>
                <div>
                    <a href="/user/settings/phone" class={styles.label}>Cambiar Celular</a>
                </div>
                <div>
                    <a href="/user/settings/emergency" class={styles.label}>Mensaje de emergencia</a>
                </div>
                <div>
                    <a href="/user/settings/payment" class={styles.label}>Pagos</a>
                </div>
            </div>
        </div >
    )
})


