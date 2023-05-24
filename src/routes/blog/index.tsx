import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead} from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { GetUrlPreview } from "~/utils";
import styles from './blog.scss?inline';
import dayjs from 'dayjs';
import { getPosts } from "~/api/posts";


export const usePosts = routeLoader$(async () => {
    return (await getPosts()).results
});

export const head: DocumentHead = () => {
    return {
      title: 'El blog de escorts mas picante de Uruguay 🔥 | Gula',
      meta: [
        {
          name: 'description',
          content: 'Ingresa al Blog de Escorts mas picante. Gula un espacio de publicidad donde putas, mujeres trans y hombres, ofrecen sus diferentes servicios.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https:/gula.com.uy/blog'
        },
      ],
    };
  };

export default component$(() => {
    useStyles$(styles);
    const signal = usePosts();
    const posts = signal?.value;

    return <section class="main_wall">
        <h1 class="subtitle">El mejor sitio de Escorts de Uruguay</h1>
        <div class="states_output">
            <div class="blog_scroll">
                {
                    posts.map((post, i) => {
                        const createdAt = dayjs(post.createdAt);
                        return <a key={i} class="preview" href={"/blog/" + post.slug}>
                            <img class="postPreviewImage" src={post.previewImage ? GetUrlPreview(post.previewImage) : '/assets/images/profile_default.png'} />
                            <span class="postPreviewHeaderContainer">
                                <span class="previewDate">{createdAt.format('DD/MM/YYYY')}</span>
                                <span ></span>
                            </span>

                            <span class="title">
                                {post.title}
                            </span>
                            <div class="description">
                                {post.shortDescription}
                            </div>
                        </a>
                    })
                }
            </div>
        </div>
    </section>
})