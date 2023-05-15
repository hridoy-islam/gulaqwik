import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.wrapper}>
          <ul>
            <li>
              <Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/escorts/mujeres">
                <img src="/assets/icons/search-w.svg" alt='' />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img src="/assets/icons/home_w.svg" alt='' />
              </Link>
            </li>

            <li>
              <Link href="/">
                <img src="/assets/icons/bookmark_fill_w2.svg" alt='' />
              </Link>
            </li>

            <li>
              <Link href="/red-social-erotica/mujeres" >
                <img src="/assets/icons/wall_w2.svg" alt='' />
              </Link>
            </li>

            <li>
              <Link href="" >
                <img src="/assets/icons/alarm_w_2.svg" alt='' />
              </Link>
            </li>

            <li>
              <Link href="/auth/login" >
                <img src="/assets/icons/user_w.svg" alt='' />
              </Link>
            </li>
          </ul>
        </div>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <img src="/assets/logos/gula-logo-w.svg" height={50} width={143} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
});
