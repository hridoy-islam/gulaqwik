import { component$, useStyles$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-info.scss?inline';

interface EscortTabInfoProps {
    workeruser?: WorkerUser;
}

export default component$((props: EscortTabInfoProps) => {
    useStyles$(styles);
    const { workeruser } = props;
    console.log(workeruser)

    return <div class="tab_info">
        <div class="info_container">
            <div class="title_container"><h2 class="title">Tamara Escort en Centro</h2></div>
            <div class="description_container">
                <p class="description">Hola bienvenido a mi perfil  mi nombre es Tamara. Tengo 20 años soy una chica con mucha sensualidad, divertida y bonita. Me encanta ver como disfrutas el rato que estas conmigo, soy muy atenta!.Con mi servicio busco que quedes satisfecho en todos los sentidos no solo sexualmente. En la cama soy una bomba me amoldo ah la manera en la que te guste hacerlo o como me lo pidas. Puedo ser desde lo más pervertida o puedo llegar a darte ternura, soy un 50 y un 50 soy lo que tu quieras 😉 hablame y te paso info❤</p>
            </div>

            <div class="info_data">
                <gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/icons/location.svg" />
                    <div class="title_container"><p class="title">Ubicación:</p></div>
                    <div class="description_container"><p class="description">Centro, Montevideo</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/icons/user_w.svg" />
                    <div class="title_container"><p class="title">Edad:</p></div>
                    <div class="description_container"><p class="description">21</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/icons/mobile_w.svg" />
                    <div class="title_container"><p class="title">Teléfono:</p></div>
                    <div class="description_container"><p class="description">094180596</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/images/calendar.webp" />
                    <div class="title_container"><p class="title">Disponibilidad:</p></div>
                    <div class="description_container"><p class="description">Lun a Vie</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/icons/clock_w.svg" />
                    <div class="title_container"><p class="title">Horario de atención:</p></div>
                    <div class="description_container"><p class="description">13hs a 20hs</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/icons/home_w.svg" />
                    <div class="title_container"><p class="title">Lugar de atención:</p></div>
                    <div class="description_container"><p class="description">Domicilio, Hotel</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item item_has_icon">
                    <img alt="DataItem" class="icon" src="/assets/images/credit-card-icon.webp" />
                    <div class="title_container"><p class="title">Acepta tarjetas:</p></div>
                    <div class="description_container"><p class="description">No</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item">

                    <div class="title_container"><p class="title">Altura (cm):</p></div>
                    <div class="description_container"><p class="description">160</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item">

                    <div class="title_container"><p class="title">Peso (kg):</p></div>
                    <div class="description_container"><p class="description">70</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item">

                    <div class="title_container"><p class="title">Piel:</p></div>
                    <div class="description_container"><p class="description">Clara</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item">

                    <div class="title_container"><p class="title">Pelo:</p></div>
                    <div class="description_container"><p class="description">Morocho</p></div>
                </div>
                </gula-data-item><gula-data-item  ><div class="data_item">

                    <div class="title_container"><p class="title">Ojos:</p></div>
                    <div class="description_container"><p class="description">Marrones</p></div>
                </div>
                </gula-data-item>
            </div>

            <div class="services_container">
                <p class="title">Mis servicios</p>
                <span class="description">Atiendo hombres, </span><span class="description">Acompañante, </span><span class="description">Lluvias, </span><span class="description">Pies, </span><span class="description">Vaginal, </span><span class="description">Terminación libre, </span><span class="description">Cambio de roles</span>
            </div>
        </div>
    </div>
});
