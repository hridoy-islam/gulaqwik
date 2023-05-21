import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import type { IWallState, NewMediaContent } from '~/api/states';
import styles from './wall.scss?inline';
import dayjs from 'dayjs';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import WallState from '../wall-state/wall-state';

interface WallProps {
  states: IWallState[];
  sex: string;
  showSeeMoreStatesBtn?: boolean;
}

export default component$((props: WallProps) => {
  useStyles$(styles);
  const nav = useNavigate();
  const { states, sex, showSeeMoreStatesBtn } = props;

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
              return <WallState key={i} state={state} />
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
