import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import type { IWallState, NewMediaContent } from '~/api/states';
import { DateFrom, FileIsValidVideo, GetUrlPreview } from '~/utils';
import styles from './wall.scss?inline';
import dayjs from 'dayjs';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';

interface WallProps {
  states: IWallState[];
  sex: string;
  showSeeMoreStatesBtn?: boolean;
}

export default component$((props: WallProps) => {
  useStyles$(styles);
  const nav = useNavigate();
  const { states, sex, showSeeMoreStatesBtn } = props;
  const editionActive = false;
  const canDeleteState = false;
  const likeItAlreadySelected = false;

  const workerUserInYourProfile = useSignal(false);
  // return user?.type === 'workeruser' && user?.id === escortId;

  const newMediaContent = useSignal<NewMediaContent[]>([]);

  dayjs.extend(dayjsRelativeTime);

  const createState = $(() => {
    nav('/auth/login');
    // if (!user.publishedProfileByWorkerUser) {
    //   _toastr.error('Despublicaste tu perfil. Debes activarlo para crear estados');
    //   return;
    // } else if (!newStateMsg && !newMediaContent.value.length) {
    //   _toastr.error('Ingresa texto o contenido multimedia para crear un estado');
    //   return;
    // } else if (!user?.activeProfile) {
    //   _toastr.error('Los usuarios despublicados no pueden crear nuevos estados');
    //   return;
    // }
    // const state: StateWorkerUser = {
    //   text: newStateMsg,
    //   media: newMediaContent.value.map(c => c.media),
    //   statesOf: user.id,
    //   likeIt: [],
    //   comments: [],
    //   mediaFromGallery: newMediaContent.value.some(m => m.fromGallery),
    //   sex: user.sex
    // };
    // _stateService.createState(state).pipe(untilDestroyed(this)).subscribe((s) => {
    //   newStateMsg = '';
    //   newMediaContent = [];
    //   data.unshift(mapState(s));
    //   _selectMediaContentService.addMedia([], false);
    //   _toastr.success('Estado creado con exito');
    // }, () => {
    //   _toastr.error('Error creando estado');
    // })
  })

  const clickUploadMediaState = $(() => {
    // _selectMediaContentService.openViewer();
  })

  const seeMoreStates = () => {
    let sexRoute = 'mujeres';
    if (sex) {
      sexRoute = sex === 'trans' ? 'trans-travestis' : sex === 'male' ? 'hombres' : 'mujeres';
    }
    return '/red-social-erotica/' + sexRoute;
  }

  const routeToProfile = $((state: IWallState) => {
    // this._tabWallService.lastClickedStateId = this.data.id;
    nav(`/escort/${state.userSlug}`);
  })

  return <>
    <div class="wall_container">
      <div class="aligner">
        {
          workerUserInYourProfile.value &&
          <div class="post_form">
            <div class="top_container">
              <textarea class="textarea"
                placeholder={"Profile.Wall.Post_form_placeholder"} maxLength={400}></textarea>
              <button class="button" onClick$={() => createState()}>Publicar</button>
            </div>
            <hr class="separation" />
            <div class="bottom_container">
              <button class="button" onClick$={() => clickUploadMediaState()}>
                Seleccionar Foto/Video
              </button>
              <div class='files_name_container'>
                {
                  newMediaContent.value.map((c, i) => {
                    return <span key={i}>{c.name}</span>
                  })
                }
              </div>
            </div>
          </div >
        }
        <div class="wall_output">
          {
            !states?.length &&
            <p class="emtpy">No hay estados para mostrar</p>
          }
          {
            !!states?.length &&
            states.map((state, i) => {
              const createdAt = DateFrom(dayjs, state.createdAt);
              return <div key={i} class="wall_state" id={state.id}>
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
                        <img alt="MediaState" class="image" src={GetUrlPreview(state.media[0])} />
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
            })

          }
          {
            showSeeMoreStatesBtn &&
            <Link class="button_more" href={seeMoreStates()}>
              Ver más estados
            </Link >
          }
        </div >
      </div >
    </div >
    {/* <gula-select-media-content></gula-select-media-content> */}
  </>
});
