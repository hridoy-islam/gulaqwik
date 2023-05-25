import { component$ } from "@builder.io/qwik";
import styles from './payment.module.css';
import Sidenav from "~/components/sidenav";

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content_sidenav">
                <div class="lg:w-4/12">
                    <Sidenav></Sidenav>
                </div>
                <div class="lg:w-8/12">
                    <div class={styles.tab_payment}>
                        <div class={styles.title_container}>
                            <p class={styles.title}>Cambiar teléfono</p>
                        </div>
                        <div class={styles.content}>
                            <div class={styles.bottom}>
                                <a class={styles.bottom_button} href="#">Ver beneficios de las categorías de pago</a>
                            </div>
                            <div class={styles.option}>
                                    <div class={styles.label_container}>
                                        <p class={styles.label}>Categoria</p>
                                    </div>
                                    <div class={styles.option_content}>
                                    <select class={styles.select}>
                                        <option value="Premium">Premium $5</option>
                                        <option value="Vip">Vip $1000</option>
                                        <option value="Elite">Elite $2000</option>
                                    </select>
                                    </div>
                            </div>
                            <div class={styles.option}>
                                    <div class={styles.label_container}>
                                        <p class={styles.label}>Forma de pago</p>
                                    </div>
                                    <div class={styles.option_content}>
                                    <select class={styles.select}>
                                        <option value="cardPayment">Pago con tarjeta</option>
                                    </select>
                                    </div>
                            </div>
                            <div class={styles.option}>
                                    <div class={styles.label_container}>
                                        <p class={styles.label}>Seleccionar tipo de documento</p>
                                    </div>
                                    <div class={styles.option_content}>
                                    <select class={styles.select}>
                                        <option value="CI">CI</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    </div>
                            </div>
                            <div class={styles.option}>
                                    <div class={styles.label_container}>
                                        <p class={styles.label}>Seleccionar tipo de documento</p>
                                    </div>
                                    <div class={styles.option_content}>
                                     <input class={styles.input} type="text" placeholder="Número de documento" />
                                    </div>
                            </div>
                            <div class={styles.button_container}>
                                <button class={styles.button_save}>Pagar</button>
                            </div>
                        </div>
                        <div class={styles.title_container}>
                            <p class={styles.title}>Historial de pagos</p>
                        </div>
                        <div class={styles.empty_message}>
                            <p class={styles.empty_message_label}>No hay nada que mostrar</p>
                        </div>
                        <div class={styles.bottom}>
                            <a class={styles.bottom_button} href="#">Reportar error</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})