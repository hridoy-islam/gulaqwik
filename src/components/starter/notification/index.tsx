import { component$, useContext } from "@builder.io/qwik";
import { GulaContext } from "~/root";
import styles from "./notification.module.css";


export default component$(() => {
    const gulaContext = useContext(GulaContext);
    return (
        <>
            <div class={styles.dialog_overlay}>
                <div class={styles.noti_container}>
                    <p class={styles.title_container}>Debes ser un usuario registrado</p>
                    <p class={styles.message_container}>Para hacer uso de estas funcionalidades, debes registrar o iniciar sesión.</p>
                    <div class={styles.actions}>
                        <button class={styles.button} onClick$={() => gulaContext.openNotificationsModal = false}>
                            Cancelar
                        </button>
                        <a href="/auth/signin" class={styles.button}>
                            ¡Regístrate gratis!
                        </a>
                        <a href="/auth/login" class={styles.isfill}>
                            Iniciar sesión
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
})