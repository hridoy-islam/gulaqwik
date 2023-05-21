import { component$, useStyles$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import styles from './states.scss?inline';
import Wall from '~/components/wall/wall';
import type { IWallState} from '~/api/states';
import { searchStates } from '~/api/states';
import seoWall from '~/env/wall';
const limit = 200;

export const useStates = routeLoader$(async (requestEvent) => {
    let sex = requestEvent.params.sex;
    sex = sex === 'hombres' ? 'male' : sex === 'trans-travestis' ? 'trans' : 'female';
    return { ... await searchStates(sex as any), sex };
});

export const head: DocumentHead = ({ params, url }) => {
    const sex = params.sex === 'hombres'? 'male' : params.sex === 'trans-travestis' ? 'trans' : 'female';
    console.log('url', url)
    return {
        title: seoWall[sex].title,
        meta: [
            {
                name: 'description',
                content: seoWall[sex].description,
            },
        ]
    };
};

export default component$(() => {
    useStyles$(styles);
    const statesPaginated = useStates();
    const states = useSignal(statesPaginated.value);
    const loading = useSignal(false);
    const isMobile = useSignal(true);
    const skip = useSignal(0);

    useVisibleTask$(() => {
        const onScroll = async () => {
            const search = (window.scrollY * 2) >= document.getElementsByTagName('main')?.[0]?.clientHeight;
            if (search && !loading.value) {
                loading.value = true;
                const newData = await searchStates(states.value.sex as any,  skip.value + limit).catch().finally(() => loading.value = false);
                if (newData?.results?.length) {
                    states.value = {
                        ...states.value,
                        results: states.value.results.concat(newData.results)
                    }
                    skip.value += limit;
                } else {
                    document.removeEventListener('scroll', onScroll);
                }
            }
        }
        document.addEventListener('scroll', onScroll);

        isMobile.value = window?.innerHeight > window?.innerWidth;
        const onResize = () => {
            isMobile.value = window?.innerHeight > window?.innerWidth;
        }
        window.addEventListener('resize', onResize, true);

        return () => {
            document.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize, true);
        };
    });

    const sex = states.value?.results?.[0]?.statesOf?.[0]?.sex ?? 'female';
    const wallStates = states.value?.results?.map((s) => {
        return {
          id: s.id,
          userId: s.statesOf[0].id,
          userType: s.statesOf[0].type,
          userSlug: s.statesOf[0].slug,
          userSex: s.statesOf[0].sex,
          profileImg: s.statesOf[0].profileImg,
          username: s.statesOf[0].name,
          description: s.text,
          createdAt: s.createdAt,
          media: s.media,
          likes: s.likeIt,
          commentsData: {
            idState: s.id,
            cretedById: s.id,
            customerLogged: false,
            comments: s.comments.map((c: any) => {
              return {
                id: c.id,
                userId: c.userId,
                message: c.text,
                username: c.username,
                profileImg: c.profileImg,
                createdAt: c.createdAt,
                responses: c.responses,
              };
            }),
          },
        } as IWallState;
      });

    return <section class="main_wall">
        {
            !isMobile.value &&
            <div class="aside_container">
                <div class="aside_fixed">
                    <div class="tab_pc_container">
                        <div class={"tab " + (states.value.sex === 'female' ? "active_tab" : "")}>
                            <a class="label" href="/red-social-erotica/mujeres">Mujeres</a>
                        </div><div class={"tab " + (states.value.sex === 'male' ? "active_tab" : "")}>
                            <a class="label" href="/red-social-erotica/hombres">Hombres</a>
                        </div><div class={"tab " + (states.value.sex === 'trans' ? "active_tab" : "")}>
                            <a class="label" href="/red-social-erotica/trans-travestis">Mujeres trans</a>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div class="states_output" >
            {
                isMobile.value &&
                <div class="tab_outlet">
                    <div class={"tab " + (states.value.sex === 'female' ? "active_tab" : "")} style="width: calc(33.3333%);">
                        <a class="label" href="/red-social-erotica/mujeres">Mujeres</a>
                    </div><div class={"tab " + (states.value.sex === 'male' ? "active_tab" : "")} style="width: calc(33.3333%);">
                        <a class="label" href="/red-social-erotica/hombres">Hombres</a>
                    </div><div class={"tab " + (states.value.sex === 'trans' ? "active_tab" : "")} style="width: calc(33.3333%);">
                        <a class="label" href="/red-social-erotica/trans-travestis">Mujeres trans</a>
                    </div>
                </div>
            }
            <div class="states_scroll">
                <Wall states={wallStates} sex={sex} />
            </div>
        </div>
    </section>
});
