import { component$ } from "@builder.io/qwik";
import styles from './sidenav.module.css';
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    const loc = useLocation();
    return (
        <div class={styles.aside_container}>
            <div class={styles.settings_aside_container}>
            <div>
                <span class={`${loc.url.pathname} == "/user/settings/profile" ? ${styles.active_tab_detail} : "" `}></span>
                <button class={styles.tab}>
                    <a href="/user/settings/profile" class={[styles.label]}>Editar perfil</a>
                </button>
            </div>
            <div>
                <span class={`${loc.url.pathname} == "/user/settings/gallery" ? ${[styles.active_tab_detail, '']} : "" `}></span>
                <button class={styles.tab}>
                    <a href="/user/settings/gallery" class={styles.label}>Editar galería</a>
                </button>
            </div>
            <div>
                <span class={`${loc.url.pathname} == "/user/settings/password" ? ${styles.active_tab_detail} : "" `}></span>
                <button class={styles.tab}>
                    <a href="/user/settings/password" class={styles.label}>Cambiar contraseña</a>
                </button>
            </div>
            <div>
                <span class={`${loc.url.pathname} == "/user/settings/phone" ? ${styles.active_tab_detail} : "" `}></span>
                <button class={styles.tab}>
                    <a href="/user/settings/phone" class={styles.label}>Cambiar Celular</a>
                </button>
            </div>
           <div>
                <span class={`${loc.url.pathname} == "/user/settings/emergency" ? ${styles.active_tab_detail} : "" `}></span>
                <button class={styles.tab}>
                    <a href="/user/settings/emergency" class={styles.label}>Mensaje de emergencia</a>
                </button>
           </div>
           <div>
                <span class={`${loc.url.pathname} == "/user/settings/payment" ? "yes" : "no" `}></span>
                <button class={styles.tab}>
                    <a href="/user/settings/payment" class={styles.label}>Pagos</a>
                </button>
           </div>
             
        </div>
        </div>
    )
})


        