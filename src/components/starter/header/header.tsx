import { component$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.module.css';

export default component$(() => {
  const store = useStore({
    scrolled: false
  })
  return (
    <header class={"fixed top-0 left-0 w-full p-0 text-white text-xl sm:text-4xl sm:p-8 " + (store.scrolled ? 'bg-[#070707]' : 'bg-transparent')}
      document:onScroll$={() => {
        if (window.scrollY > 0) {
          store.scrolled = true
        } else {
          store.scrolled = false
        }
      }}>
      <div class='flex justify-between items-center p-3'>
        <ul class='flex mx-4 items-center'>
          <li class={styles}>
            <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/escorts/mujeres">
              <img class={styles} src="/assets/icons/search-w.svg" alt='search' />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img class={styles} src="/assets/icons/home_w.svg" alt='home_w' />
            </Link>
          </li>

          <li>
            <Link href="/">
              <img class={styles} src="/assets/icons/bookmark_fill_w2.svg" alt='bookmark_fill_w2' />
            </Link>
          </li>

          <li>
            <Link href="/red-social-erotica/mujeres" >
              <img class={styles} src="/assets/icons/wall_w2.svg" alt='wall_w2' />
            </Link>
          </li>

          <li>
            <Link href="" >
              <img class={styles} src="/assets/icons/alarm_w_2.svg" alt='alarm_w_2' />
            </Link>
          </li>

          <li>
            <Link href="/auth/login" >
              <img class={styles} src="/assets/icons/user_w.svg" alt='user_w' />
            </Link>
          </li>
        </ul>
        <div class={['pr-3', styles.logo]}>
          <a href="/">
            <img class={styles.logo} src="/assets/logos/gula-logo-w.svg" alt="gula-logo" />
          </a>
        </div>
      </div>
      {/* <div class={styles.aligner}>
          
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <img src="/assets/logos/gula-logo-w.svg" height={50} width={143} alt="" />
          </a>
        </div>
      </div> */}
    </header>
  );
});
