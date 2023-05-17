import { component$, useStyles$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { GetAgeFromDateStr, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-info.scss?inline';

interface EscortTabInfoProps {
    workeruser: WorkerUser;
}

export default component$((props: EscortTabInfoProps) => {
    useStyles$(styles);
    const { workeruser } = props;

    const getWorkplacesDescription = (user: WorkerUser) => {
        let description = '';
        if (user.privatePlace) {
            description = 'Lugar Propio';
        }
        if (user.goHome) {
            const goHome = 'Domicilio';
            description += description.length ? (', ' + goHome) : goHome;
        }
        if (user.hotel) {
            const hotel = 'Hotel';
            description += description.length ? (', ' + hotel) : hotel;
        }
        return description;
    }

    const details = [
        {
            icon: '/assets/icons/location.svg',
            type: 'Ubicación',
            description: workeruser.currentNeighborhood
                ? workeruser.currentNeighborhood + ', ' + workeruser.currentProvince
                : workeruser.currentProvince,
        },
        workeruser.dob ?
            {
                icon: '/assets/icons/user_w.svg',
                type: 'Edad',
                description: String(GetAgeFromDateStr(workeruser.dob)),
            } : undefined,
        {
            icon: '/assets/icons/mobile_w.svg',
            type: 'Teléfono',
            description: workeruser.phone,
        },
        {
            icon: '/assets/images/calendar.webp',
            type: 'Disponibilidad',
            description: GetWorkdaysDescription(workeruser),
        },
        GetScheduleDescription(workeruser) ?
            {
                icon: '/assets/icons/clock_w.svg',
                type: 'Horario de atención',
                description: GetScheduleDescription(workeruser),
            } : undefined,
        {
            icon: '/assets/icons/home_w.svg',
            type: 'Lugar de atención',
            description: getWorkplacesDescription(workeruser),
        },
        workeruser.hourlyRate && workeruser.hourlyRate !== '0' ?
            {
                icon: '/assets/images/money.webp',
                type: 'Tarifa',
                description: workeruser.hourlyRate,
            } : undefined,
        {
            icon: '/assets/images/credit-card-icon.webp',
            type: 'Acepta tarjetas',
            description: workeruser.acceptCard ? 'Si' : 'No',
        },
        {
            type: 'Altura (cm)',
            description: String(workeruser.height),
        },
        {
            type: 'Peso (kg)',
            description: String(workeruser.weight),
        },
        {
            type: 'Piel',
            description: `Profile.Info.Skins.${workeruser.skin}`,
        },
        {
            type: 'Pelo',
            description: `Profile.Info.Hairs.${workeruser.hairColor}`,
        },
        {
            type: 'Ojos',
            description: `Profile.Info.Eyes.${workeruser.eyeColor}`,
        },
    ].filter(d => d)

    return <div class="tab_info">
        <div class="info_container">
            <div class="title_container"><h2 class="title">{workeruser.name} Escort en {workeruser.currentNeighborhood ?? workeruser.currentProvince}</h2></div>
            <div class="description_container">
                <p class="description">{workeruser.description}</p>
            </div>

            <div class="info_data">
                {
                    details.map((d, i) => <div key={i} class="data_item item_has_icon">
                        <img alt="DataItem" class="icon" src={d?.icon} />
                        <div class="title_container"><p class="title">{d?.type}</p></div>
                        <div class="description_container"><p class="description">{d?.description}</p></div>
                    </div>)
                }
            </div>

            <div class="services_container">
                <p class="title">Mis servicios</p>
                <span class="description">Atiendo hombres, </span><span class="description">Acompañante, </span><span class="description">Lluvias, </span><span class="description">Pies, </span><span class="description">Vaginal, </span><span class="description">Terminación libre, </span><span class="description">Cambio de roles</span>
            </div>
        </div>
    </div>
});
