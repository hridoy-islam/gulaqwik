import { component$ } from "@builder.io/qwik";
import styles from "./notification.module.css";


export default component$(() => {

    return (
        <>
            <div class={styles.dialog_overlay}>
                <div class={styles.noti_container}>
                    <p class={styles.title_container}>Debes ser un usuario registrado</p>
                    <p class={styles.message_container}>Para hacer uso de estas funcionalidades, debes registrar o iniciar sesión.</p>
                    <div class={styles.actions}>
                        <button class={styles.button}>
                            Cancelar
                        </button>
                        <button class={styles.button}>
                            ¡Regístrate gratis!
                        </button>
                        <button class={styles.isfill}>
                            Iniciar sesión
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
})