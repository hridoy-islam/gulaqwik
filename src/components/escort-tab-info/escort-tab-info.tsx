import { component$, useStyles$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { Capitalize, GetAgeFromDateStr, GetScheduleDescription, GetWorkdaysDescription, WorkkerUserServices } from '~/utils';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-info.scss?inline';
import translates from '~/env/translates';

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
            icon: '/assets/images/credit-card.jpg',
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
            description: translates.Skins[workeruser.skin as keyof {}],
        },
        {
            type: 'Pelo',
            description: translates.Hairs[workeruser.hairColor as keyof {}],
        },
        {
            type: 'Ojos',
            description: translates.Eyes[workeruser.eyeColor as keyof {}],
        },
    ].filter(d => d)

    const servicesCheckBoxes = WorkkerUserServices();
    const services = Object.keys(servicesCheckBoxes).filter(s => workeruser[s as keyof {}]).map(s => translates.Attributes[Capitalize(s, false) as keyof {}]);

    return <div class="tab_info">
        <div class="info_container">
            <div class="title_container"><h2 class="title">{workeruser.name} Escort en {workeruser.currentNeighborhood ?? workeruser.currentProvince}</h2></div>
            <div class="description_container">
                <p class="description">{workeruser.description}</p>
            </div>

            <div class="info_data">
                {
                    details.map((d, i) => <div key={i} class="data_item item_has_icon">
                        {
                            d?.icon &&
                            <img alt="DataItem" height={12} width={12} class="icon" src={d?.icon} />
                        }
                        <div class="title_container"><p class="title">{d?.type}</p></div>
                        <div class="description_container"><p class="description">{d?.description}</p></div>
                    </div>)
                }
            </div>
            {
                !!services.length &&
                <div class="services_container">
                    <p class="title">Mis servicios</p>
                    {
                        services.map((s, i) => <span key={i} class="description">{s}{services.length !== i + 1 ? ', ' : ''} </span>)
                    }
                </div>
            }
        </div>
    </div>
});
