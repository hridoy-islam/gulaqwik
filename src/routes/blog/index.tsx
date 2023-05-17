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

// export const onGet: RequestHandler<BlogData[]> = async () => {
//     console.log("fetching data")

//     const res = await fetch('https://gula-api-test-2i55x.ondigitalocean.app/blog/')
//     const data =await res.json()

//     return data
// }

export const useProductDetails = routeLoader$(async () => {
    // This code runs only on the server, after every navigation
    const res = await fetch(`https://gula-api-test-2i55x.ondigitalocean.app/blog`);
    const product = (await res.json()) as product[];
    return product;
});
export default component$(() => {
    const signal = useProductDetails();

    return (
        <>
            <div class={styles.states_output}>

                <div class="flex items-center flex-col justify-left">
                    <span class={styles.text}>Categoria</span>
                    <select class={["select w-1/2", styles.select_element]}>
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
                </div>
                <div>
                    <Blogs></Blogs>
                </div>
            </div>
        </>
    )
})