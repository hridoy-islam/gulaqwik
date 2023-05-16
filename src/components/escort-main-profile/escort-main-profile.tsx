import { component$, useStyles$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-main-profile.scss?inline';

interface EscortMainProfileProps {
    workeruser?: WorkerUser;
}

export default component$((props: EscortMainProfileProps) => {
    useStyles$(styles);
    const { workeruser } = props;
    console.log(workeruser)

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
                <div class="image profile_image_pointer" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-19290e33-89d3-47fa-bcf2-812b195d2de2113592-preview.png&quot;);">
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
                    <h1 class="username">Tamara</h1>
                    <img alt="VerifiedProfile" src="/assets/icons/verified-check-w.svg" class="icon" />

                </div>
                <div class="description_container">
                    <h2 class="description">❤</h2>
                </div>

                <div class="items_grid" style="display: grid; grid-template-columns: 1fr 1px 1fr 1px 1fr;">
                    <p class="label">Elite</p>
                    <span class="separator"></span>
                    <p class="label">
                        Centro</p>
                    <span class="separator"></span>
                    <p class="label">21 años</p>
                </div>

                <div class="items_grid items_grid_bottom" style="display: grid; grid-template-columns: 1fr 1px 1fr;">
                    <p class="label">Lun a Vie</p>
                    <span class="separator"></span>
                    <p class="label">13hs a 20hs</p>

                </div>

                <div class="buttons_grid">
                    <a target="_blank" href="tel:094180596">
                        <button class="button"><img alt="Phone" src="/assets/icons/phone_w.svg" class="icon" /></button>
                    </a>
                    <a target="_blank" href="https://wa.me/59894180596?text=Hola TAMARA, vi tu anuncio en Gula y me gustaría contactarme contigo">
                        <button class="button"><img alt="whatsapp" src="/assets/icons/whatsapp_w.svg" class="icon" /></button>
                    </a>

                </div>
            </div>
        </div>
    </div>
});
