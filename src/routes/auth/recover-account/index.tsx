import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from '../login/login.module.css';

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content w-80 mx-auto">
                <div class="form_container">
                    <div class="logo_container ">
                        <img class={styles.logo} src="/assets/logos/gula-logo-w.svg" alt="gula" />
                        <p class={styles.subtitle}>Ingresa tu teléfono celular de GULA</p>
                    </div>

                    <div>
                    <form >
                        <div>
                            <input type="text" class="w-full my-5 border-b bg-transparent" placeholder="Teléfono Celular" required name="emailOrPhone" />
                        </div>
                        <div class="my-5">
                            <button type="submit" class="w-full px-10 py-4 border-solid border-white border-x border-y text-sm rounded-md">Iniciar sesión</button>
                        </div>
                        <p class="text-sm my-5">¿Ya recordaste tu contraseña? <Link class="underline" href="/auth/login">Inicia sesión</Link></p>
                    </form>
                    </div>
                </div >
            </div >
        </div >
    )
})