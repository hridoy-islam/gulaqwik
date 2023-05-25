import { component$, useStyles$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { DateFrom } from '~/utils';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-reviews.scss?inline';
import dayjs from 'dayjs';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';

interface EscortTabReviewsProps {
    workeruser: WorkerUser;
}

export default component$((props: EscortTabReviewsProps) => {
    useStyles$(styles);
    const { workeruser } = props;

    dayjs.extend(dayjsRelativeTime);

    return <div class="reviews_container">
        <div class="aligner">
            <div class="form_container">
                <textarea maxLength={500} class="textarea ng-untouched ng-pristine ng-valid" placeholder="Escribe aquí..."></textarea>
                <a class="button" href='/auth/login'><img height={16} width={16} alt="Right" src="/assets/icons/right_arrow_w.svg" class="icon" /></a>
            </div>

            <div class="stars_container">
                <div class="stars_container">
                <p class="stars_label">Puntaje:</p>
                    <div class="star_button">
                        <span >☆</span>
                        <span >☆</span>
                        <span >☆</span>
                        <span >☆</span>
                        <span >☆</span>
                    </div>
                </div>
            </div>

            <div class="reviews_output">
                {
                    workeruser.rankings?.map((r, i) => {
                        const createdAt = DateFrom(dayjs, r.createdAt as string);
                        return <div key={i} class="review_container">

                            <div class="score_container">
                                <img alt="Bookmark" src="/assets/icons/bookmark_fill_w2.svg" class="icon" />
                                <p class="score">{r.score}</p>
                            </div>

                            <div class="data_container">
                                <img alt="ProfileImage" class="profile_img" src="/assets/images/default_user_profile.png" />
                                <div class="text_container">
                                    <div class="username_container">
                                        <p class="username">{r.createdByName}</p>
                                        <p class="date">{createdAt}</p>
                                    </div>
                                    <p class="description">{r.description}</p>

                                </div>
                            </div>
                            {/* <div class="actions">
                            </div> */}
                        </div>
                    })
                }
            </div>

        </div>
    </div>
});
