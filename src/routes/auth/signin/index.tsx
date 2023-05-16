import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from '../login/login.module.css';

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="w-80 m-auto">
                <div class="logo_container ">
                    <img class={styles.logo} src="/assets/logos/gula-logo-w.svg" alt="gula" />
                    <p class={styles.subtitle}>El mejor sitio de Escorts de Uruguay</p>
                </div>
                <form>
                    <div>
                        <input type="text" class="w-full my-5 border-b bg-transparent" placeholder="Nombre de usuario" required name="name" />
                    </div>
                    <div>
                        <input type="text" class="w-full my-5 border-b bg-transparent" placeholder='Teléfono celular' required name="phone" />
                    </div>
                    <div>
                        <input type="date" class="w-full my-5 border-b bg-transparent" placeholder='Fecha de nacimiento' required name="phone" />
                    </div>
                    <div>
                        <input type="password" class="w-full my-5 border-b bg-transparent" placeholder='Contraseña' required name="phone" />
                    </div>
                    <div>
                        <input type="confirm password" class="w-full my-5 border-b bg-transparent" placeholder='Repetir contraseña' required name="phone" />
                    </div>
                    <div>
                    <input type="file" class="block w-full text-sm text-slate-500" 
                        placeholder='Documento de identidad'/>
                    </div>
                    <div class="mt-6">
                        <input id="draft" class="peer/draft" type="radio" name="status" checked />
                        <label for="draft" class="peer-checked/draft:text-sky-500 mr-6">Soy Escort</label>
                        <input id="published" class="peer/published" type="radio" name="status" />
                        <label for="published" class="peer-checked/published:text-sky-500">NO soy Escort</label>
                        </div>
                    {/* <div>
                        <p class="text-sm underline my-5"><Link href="/auth/recover-account">¿Olvidaste tu contraseña?</Link></p>
                    </div> */}
                    <div class="my-5">
                        <input type="checkbox" id="remember" />
                        <label class="text-sm ml-2" for="remember">Acepto los Términos de uso</label>
                    </div>
                    <div class="my-5">
                        <button type="submit" class="w-full px-10 py-4 border-solid border-white border-x border-y text-sm rounded-md">Iniciar sesión</button>
                    </div>
                    <p class="text-sm my-5">¿Ya estás registrado? <Link class="underline" href="/auth/login">Inicia sesión</Link></p>
                </form>
            </div>
        </div>
    )
})