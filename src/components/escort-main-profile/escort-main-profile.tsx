import { component$, useStyles$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { GetAgeFromDateStr, GetScheduleDescription, GetWorkdaysDescription, GetUrlPreview } from '~/utils';
import styles from './escort-main-profile.scss?inline';

interface EscortMainProfileProps {
    workeruser: WorkerUser;
}

export default component$((props: EscortMainProfileProps) => {
    useStyles$(styles);
    const { workeruser } = props;

    const getInternationalNumber = (phone: string) => {
        if (phone && phone.startsWith('0')) {
          // todo solo para uruguay
          return '598' + phone.substring(1);
        }
        return phone;
      }

    return <div class="main_profile">
        <div class="go_back_arrow_container">
            <a class="button_icon" href="/escorts">
                <img alt="Back" src="/assets/icons/left-arrow-w-shadow.svg" class="icon" />
            </a>
        </div>
        <div class="main_profile_container">
            <div class="buttons_container">

                <div ></div>
                <button class="button">Ver estados</button>
            </div>
            <div class="profile_image_container">
                <div class="image profile_image_pointer" style={{ background: "url('" + GetUrlPreview(workeruser.profileImg) + "')" }}>
                </div>
            </div>
            <div class="top_info">
                <div class="verified_container"></div>
                <button class="fav_button">
                    <img alt="Bookmark" width="30" height="39.92" src="/assets/icons/bookmark_w2.svg" class="icon" />

                    <p class="rating">5.0
                    </p>
                </button>
            </div>
            <div class="content">
                <div class="username_container">
                    <h1 class="username">{workeruser.name}</h1>
                    <img alt="VerifiedProfile" src="/assets/icons/verified-check-w.svg" class="icon" />

                </div>
                <div class="description_container">
                    <h2 class="description">{workeruser.shortDescription}</h2>
                </div>

                <div class="items_grid" style="display: grid; grid-template-columns: 1fr 1px 1fr 1px 1fr;">
                    <p class="label">{workeruser.billingType}</p>
                    <span class="separator"></span>
                    <p class="label">
                        {workeruser.currentNeighborhood ?? workeruser.currentProvince}</p>
                    <span class="separator"></span>
                    <p class="label">{GetAgeFromDateStr(workeruser.dob)} años</p>
                </div>

                <div class="items_grid items_grid_bottom" style="display: grid; grid-template-columns: 1fr 1px 1fr;">
                    <p class="label">{GetWorkdaysDescription(workeruser)}</p>
                    <span class="separator"></span>
                    <p class="label">{GetScheduleDescription(workeruser)}</p>

                </div>

                <div class="buttons_grid">
                    <a target="_blank" href={"tel:" + workeruser.phone}>
                        <button class="button"><img alt="Phone" src="/assets/icons/phone_w.svg" class="icon" /></button>
                    </a>
                    <a target="_blank" href={"https://wa.me/" + getInternationalNumber(workeruser.phone) + "?text=Hola " + workeruser.name + ", vi tu anuncio en Gula y me gustaría contactarme contigo"}>
                        <button class="button"><img alt="whatsapp" src="/assets/icons/whatsapp_w.svg" class="icon" /></button>
                    </a>

                </div>
            </div>
        </div>
    </div>
});
