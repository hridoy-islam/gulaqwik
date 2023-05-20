import { $, component$, useContext, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.module.css';
import { GulaContext } from '~/root';
import HeaderDrawer from './headerDrawer';
import Notification from '../notification';

export default component$(() => {
  const state = useContext(GulaContext)
  const menuToogle = $(() => state.menu = !state.menu);
  const notiToogle = $(() => state.noti = !state.noti);
  const store = useStore({
    scrolled: false
  })
  return (
    <header class={"fixed top-0 left-0 w-full p-4 z-10 text-white text-xl sm:text-4xl " + (store.scrolled ? 'bg-[#070707]' : 'bg-transparent')}
      document:onScroll$={() => {
        if (window.scrollY > 0) {
          store.scrolled = true
        } else {
          store.scrolled = false
        }
      }}>
      <div class='flex justify-between items-center nav_item p-2'>
        <ul class='flex mx-4 items-center ml-10 '>
          
          <li class={[styles, '']}>
          
            
            <button onClick$={menuToogle}>
              {
                state?.menu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-2 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
              }
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-2 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> */}

            </button>
            
            {
              state?.menu && <HeaderDrawer></HeaderDrawer>
            }

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
              <img class={styles} src="/public/assets/icons/bookmark_fill_w2.svg" alt='bookmark_fill_w2' />
            </Link>
          </li>

          <li>
            <Link href="/red-social-erotica/mujeres" >
              <img class={styles} src="/assets/icons/wall_w2.svg" alt='wall_w2' />
            </Link>
          </li>

          <li>
              <button onClick$={notiToogle}>
                <img class={styles} src="/assets/icons/alarm_w_2.svg" alt='alarm_w_2' />
              </button>
              {
              state?.noti && <Notification></Notification>
            }
          </li>

          <li>
            <Link href="/auth/login" >
              <img class={styles} src="/assets/icons/user_w.svg" alt='user_w' />
            </Link>
          </li>
        </ul>
        <div class={['pr-3', styles.logo]}>
          <a href="/">
            <img class={styles.logo} src="/public/assets/logos/gula-logo-w.svg" alt="gula-logo" />
          </a>
        </div>
      </div>
    </header>
  );
});
