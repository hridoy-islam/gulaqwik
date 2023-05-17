import { component$ } from "@builder.io/qwik";
import styles from './contact.module.css';

export default component$(() => {
    return (
        <>
            <div class={styles.form_section}>
                <div>
                    <img class="w-40 mx-auto mb-4" src="/assets/logos/gula-logo-w.svg" alt="" />
                </div>
                <h2 class="text-lg">El mejor sitio de Escorts de Uruguay</h2>
                <p class="text-sm text-[#f5f5f5] my-9">Puedes contactarte con nosotros completando el siguiente formulario o vía whatsapp haciendo click en el botón</p>
                <button class={styles.button}>
                    <a href="">
                        <img class="w-5" src="/assets/icons/whatsapp_w.svg" alt="" />
                    </a>
                </button>
                <div class={['mt-11',styles.form_slot]}>
                    <form >
                        <div class="flex">
                            <input type="text" class={styles.form_input} placeholder="Nombre*" required name="emailOrPhone" />
                            <input type="text" class={styles.form_input} placeholder="Correo electrónico*" required name="emailOrPhone" />
                        </div>
                        <textarea name="" id="" placeholder="Escribe aquí...*" class={styles.form_textarea}></textarea>
                        <div class={styles.buttons_output}>
                            <button class={styles.button}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
})