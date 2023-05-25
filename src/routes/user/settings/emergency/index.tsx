import { component$ } from "@builder.io/qwik";
import styles from './emergency.module.css';
import Sidenav from "~/components/sidenav";

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content_sidenav">
                <div class="lg:w-4/12">
                    <Sidenav></Sidenav>
                </div>
                <div class="lg:w-8/12">
                    <div class={styles.emergency_message_container}>
                        <div class={styles.title_container}>
                            <p class={styles.title}>Mensaje de emergencia</p>
                        </div>
                        <div class={styles.description_container}>
                            <p class={styles.description}>En gula nos preocupamos por nuestros usuarios, por ese motivo creamos una herramienta que nos permite enviar un mensaje de ayuda en caso de que sea necesario.</p>
                        </div>
                        <div class={styles.fields_container}>
                            <div class={styles.emergency_field_container}>
                                <div class={styles.index_container}>
                                    <p class={styles.index_number}>1</p>
                                </div>
                                <div class={styles.fields_description_container}>
                                <p class={styles.description}>Escribe la dirección a donde vas a ir.</p>
                                </div>
                                <div class={styles.field_content}>
                                    <div class={styles.content}>
                                        <input placeholder="Ubicación" class={styles.input_first} type="text" />
                                    </div>
                                </div>
                            </div>
                            <div class={styles.emergency_field_container}>
                                <div class={styles.index_container}>
                                    <p class={styles.index_number}>2</p>
                                </div>
                                <div class={styles.fields_description_container}>
                                <p class={styles.description}>Programa la hora en la cual si aún no has vuelto, quieres que le enviemos un mensaje con tus datos a tu contacto de emergencia.</p>
                                </div>
                                <div class={styles.field_content}>
                                    <div class={styles.content}>
                                        <input class={styles.input} type="time" />
                                        <p class={styles.label}>Hora Montevideo</p>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.emergency_field_container}>
                                <div class={styles.index_container}>
                                    <p class={styles.index_number}>3</p>
                                </div>
                                <div class={styles.fields_description_container}>
                                <p class={styles.description}>Déjanos el nombre y número de tu contacto de emergencia; además de un mensaje, para enviarselo junto con tu información vía sms en caso de que no desactives la alarma.</p>
                                </div>
                                <div class={styles.field_content}>
                                    <div class={styles.content}>
                                        <input class={styles.input} type="text" placeholder="Nombre" />
                                        <input class={styles.input} type="text" placeholder="Celular" />
                                        <input class={styles.input} type="text" placeholder="Mensaje" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class={styles.bottom_container}>
                            <div class={styles.switch_container}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Activar alarma</p>
                                    <input type="checkbox" class="toggle" checked />
                                </div>
                            </div>
                            <button class={styles.save_button}>Guardar alarma</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})