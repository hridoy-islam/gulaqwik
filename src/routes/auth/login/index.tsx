import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from './login.module.css';

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content w-80 mx-auto">
                <div class="form_container">
                    <div class="logo_container ">
                        <img class={styles.logo} src="/assets/logos/gula-logo-w.svg" alt="gula" />
                        <p class={styles.subtitle}>El mejor sitio de Escorts de Uruguay</p>
                    </div>

                    <div>
                    <form >
                        <div>
                            <input type="text" class="w-full my-5 border-b bg-transparent" placeholder="Teléfono Celular" required name="emailOrPhone" />
                        </div>
                        <div>
                            <input type="text" class="w-full my-5 border-b bg-transparent" placeholder='Contraseña' required name="emailOrPhone" />
                        </div>
                        <div>
                            <p class="text-sm underline my-5 text-[#f5f5f5] hover:white"><Link href="/auth/recover-account">¿Olvidaste tu contraseña?</Link></p>
                        </div>
                        <div class=" flex justify-left items-center">
                            <input type="checkbox" id="remember" />
                            <label class="text-sm ml-2" for="remember">Recordar mis datos de inicio de sesión</label>
                        </div>
                        <div class="my-5">
                            <button type="submit" class="w-full px-10 py-4 border-solid border-white border-x border-y text-sm rounded-md">Iniciar sesión</button>
                        </div>
                        <p class="text-sm my-5">¿Aún no estás registrado? <Link class="underline" href="/auth/signin">¡Regístrate gratis!</Link></p>
                    </form>
                    </div>
                </div >
            </div >
        </div >
    )
})