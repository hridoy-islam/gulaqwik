import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from './blog.module.css';
import Blogs from "./blogs";

interface product {
    createdAt: String,
    updatedAt: String,
    deletedAt: String,
    id: String,
    title: String,
    slug: String,
    seoTitle: String,
    seoDescription: String,
    published: Boolean,
    shortDescription: String,
    previewImage: String,
}


export const useProductDetails = routeLoader$(async () => {
    // This code runs only on the server, after every navigation
    const res = await fetch(`https://gula-api-test-2i55x.ondigitalocean.app/blog?skip=0&limit=40&published=true&sort=createdAt%20DESC`);
    const product = (await res.json()) as product[];
    return product;
});
export default component$(() => {
    const signal = useProductDetails();
    const blogs = signal?.value?.results;

    return (
        <>
            <div class={styles.states_output}>
                {/* <p>Count - {blogs.title}</p> */}
                <div class="flex items-center flex-col justify-left">
                    <span class={styles.text}>Categoria</span>
                    <div class={styles.select_icon}>
                    <select class={["select w-1/4", styles.select_element]}>
                        {/* <option selected disabled>
                            Categoria
                        </option> */}
                        <option >
                            Todos
                        </option>
                        <option >
                            Mujeres
                        </option>
                        <option >
                            Hombres
                        </option>
                        <option >
                            Trans
                        </option>
                        <option >
                            Sexo
                        </option>
                    </select>
                    <span class={styles.icon}></span>
                    </div>
                </div>
                <div class={styles.blog_scroll}>
                    <div class="grid grid-cols-3">
                        {
                            blogs?.map(blog =>
                                <Blogs key={blog._id} blog={blog}></Blogs>)
                        }

                    </div>
                </div>
            </div >
        </>
    )
})