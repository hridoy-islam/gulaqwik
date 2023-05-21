import { $, component$ } from "@builder.io/qwik";
import styles from "./notification.module.css";
import { Link } from "@builder.io/qwik-city";

import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const nav = useNavigate();
    const buttonToogle = $(() => noti.menu = false);
    return (
        <>
            <div class={styles.dialog_overlay}>
                <div class={styles.noti_container}>
                    <p class={styles.title_container}>Debes ser un usuario registrado</p>
                    <p class={styles.message_container}>Para hacer uso de estas funcionalidades, debes registrar o iniciar sesión.</p>
                    <div class={styles.actions}>
                        <button onClick$={async () => {await buttonToogle(); nav('/auth/signin');}} class={styles.button}>
                            Cancelar
                        </button>
                        <button onClick$={async () => {await buttonToogle(); nav('/auth/signin');}} class={styles.button}>
                            ¡Regístrate gratis!
                        </button>
                        <button onClick$={async () => {await buttonToogle(); nav('/auth/login');}} class={styles.isfill}>
                            Iniciar sesión
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
})