import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { GetUrlPreview } from "~/utils";
import styles from './post.scss?inline';
import dayjs from 'dayjs';
import { getPostbySlug } from "~/api/posts";


export const usePost = routeLoader$(async (requestEvent) => {
    const idOrSlug = requestEvent.params.slug;
    return (await getPostbySlug(idOrSlug))?.results?.[0]
});

export const head: DocumentHead = ({ resolveValue }) => {
    const serverData = resolveValue(usePost);
    return {
        title: serverData?.seoTitle,
        meta: [
            {
                name: 'description',
                content: serverData?.seoDescription,
            },
        ],
    };
};

export default component$(() => {
    useStyles$(styles);
    const post = usePost();
    const postBanner = '/assets/images/blog-banner-' + (post?.value?.bannerOption ?? '2.svg');

    return <div class="post">
        <span class="postHeader">
            <a class="back" href="/blog">
                <img alt="Back" class="icon" src="/assets/icons/left-arrow-w-shadow.svg" />
            </a>
            <h1 class="postTitle">
                {post?.value.title}
            </h1>
        </span>

        <div class="postContent">
            <span class="postSubHeader">
                <span class="postSubHeaderText">
                    {/* {label} */}
                </span>
                <span class="postSubHeaderText">
                    {dayjs(post?.value.createdAt).format('DD/MM/YYYY')}
                </span>
            </span>
            <img
                src={post?.value.previewImage ? GetUrlPreview(post?.value.previewImage) : '/assets/images/profile_default.png'}
                class="postHeaderImage"
            />

            <div class="description" dangerouslySetInnerHTML={post?.value?.description}></div>
        </div>

        <a class="postBanner" href="/escorts">
            <img class="postBannerImg" src={postBanner} alt="PostBanner" />
        </a>

    </div >
})