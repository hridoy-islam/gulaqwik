import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="main_section">
            <div class="content w-80 m-auto">
                <div class="form_container">
                    <div class="logo_container ">
                        <img class="d-block m-auto" src="/assets/logos/gula-logo-w.svg" alt="" />
                        <p class="text-lg my-5 text-center">El mejor sitio de Escorts de Uruguay</p>
                    </div>

                    <form>
                        <div>
                            <input type="text" class="w-full my-5 border-b bg-transparent" placeholder="Teléfono Celular" required name="emailOrPhone" />
                        </div>
                        <div>
                            <input type="text" class="w-full my-5 border-b bg-transparent" placeholder='Contraseña' required name="emailOrPhone" />
                        </div>
                        <div>
                            <p class="text-sm underline my-5"><Link href="/auth/recover-account">¿Olvidaste tu contraseña?</Link></p>
                        </div>
                        <div class="my-5">
                            <input type="checkbox" id="remember" />
                            <label class="text-sm ml-2" for="remember">Recordar mis datos de inicio de sesión</label>
                        </div>
                        <div class="my-5">
                            <button type="submit" class="w-full px-10 py-4 border-solid border-white border-x border-y text-sm rounded-md">Iniciar sesión</button>
                        </div>
                        <p class="text-sm my-5">¿Aún no estás registrado? <Link class="underline" href="/auth/signin">¡Regístrate gratis!</Link></p>
                    </form>
                </div >
            </div >
        </div >
    )
})