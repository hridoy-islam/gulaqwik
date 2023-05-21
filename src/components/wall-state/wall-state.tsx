import { $, component$, useStyles$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import type { IWallState } from '~/api/states';
import { DateFrom, FileIsValidVideo, GetUrlPreview } from '~/utils';
import styles from './wall-state.scss?inline';
import dayjs from 'dayjs';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';

interface WallProps {
  state: IWallState;
}

export default component$((props: WallProps) => {
  useStyles$(styles);
  const nav = useNavigate();
  const { state } = props;
  const editionActive = false;
  const canDeleteState = false;
  const likeItAlreadySelected = false;

  dayjs.extend(dayjsRelativeTime);
  const createdAt = DateFrom(dayjs, state.createdAt);

  const routeToProfile = $((state: IWallState) => {
    // this._tabWallService.lastClickedStateId = this.data.id;
    nav(`/escort/${state.userSlug}`);
  })

  return <div class="wall_state" id={state.id}>
    <div class="header">
      <div class="profile_image" onClick$={() => routeToProfile(state)}
        style={{ background: state?.profileImg ? 'url(' + GetUrlPreview(state.profileImg) + ')' : 'url(assets/images/default_user_profile.png)' }}>
        <div class="content">
          <div class="username_container">

            {
              !!state?.username &&
              <span class="username">{state.username}</span>
              // <Link class="username" href={"/escort/" + state.userSlug} onClick$={() => routeToProfile(state)}
              // >{state.username}</Link>
            }
            {
              !!createdAt &&
              <p class="date" >Hace <span class="date_label">{createdAt}</span></p>
            }
          </div>
          {
            editionActive &&
            <div class="edition_container" >
              <textarea class="edit_comment_textarea" maxLength={400}></textarea>
              <div class="edition_actions">
                <button class="action">Publicar</button>
                <button class="action">Cancelar</button>
              </div>
            </div >
          }

        </div >
        {
          (!editionActive && canDeleteState) &&
          <div class="actions">
            <button class="open_menu_button">
              <img class="icon" src="assets/icons/dots.svg" alt="Abrir el menu" />
            </button>
          </div >
        }

      </div >
    </div >
    {
      state?.description && !editionActive &&
      <p class="description"> {state.description}</p >
    }
    {
      !!state?.media?.length &&
      <div class="media_output">
        <div class="image_container">
          {
            !FileIsValidVideo(state.media[0]) &&
            <img alt="MediaState" class="image" src={GetUrlPreview(state?.media[0])} />
          }
          {
            FileIsValidVideo(state.media[0]) &&
            <video class="video" preload="metadata" playsInline controls>
              <source src={state.media[0] + '#t=0.1'} type="video/webm" />
              <source src={state.media[0] + '#t=0.1'} type="video/ogg" />
              <source src={state.media[0] + '#t=0.1'} type="video/mp4" />
              <source src={state.media[0] + '#t=0.1'} type="video/3gp" />
            </video>
          }

        </div >
      </div >
    }


    <div class="reactions_container">
      <div class="reactions_aligner">
        {
          !!state.likes.length &&
          <div class={"reactions_counter " + (likeItAlreadySelected ? "like_it_selected" : "")}>
            <img alt="Like" class="icon" src="/assets/icons/like_w.svg" />
            <p class="number">{state?.likes?.length ? state?.likes?.length : '0'}</p>
          </div>
        }

      </div>
      <hr class="separator" />
      <div class="actions">
        <div class="left">
          <a class={"action " + + (likeItAlreadySelected ? "like_it_selected" : "")} href='https://auth.gula.com.uy/auth/login'>
            <p class="label">Me Gusta</p>
          </a>
          <a class="action" href='https://auth.gula.com.uy/auth/login'>
            {
              state?.commentsData.comments.length === 0 &&
              <p class="label" >Comentar</p>
            }
            {
              state?.commentsData.comments.length === 1 &&
              <p class="label" >1 comentario</p>
            }
            {
              state?.commentsData.comments.length > 1 &&
              <p class="label"  >
                {state?.commentsData.comments.length} comentarios</p >
            }
          </a >
        </div >
      </div >
    </div >
  </div >
});
