import { $, component$, useContext, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { GulaContext } from '~/root';
import Notification from '../notification';
import styles from './header.module.css';
import HeaderDrawer from './headerDrawer';

export default component$(() => {
  const state = useContext(GulaContext)
  const menuToogle = $(() => state.menu = !state.menu);
  const notiToogle = $(() => state.noti = !state.noti);
  const store = useStore({
    scrolled: false
  })
  return (
    <>
      <header class={"fixed top-0 left-0 w-full p-2 text-white text-xl sm:text-4xl z-10 " + (store.scrolled ? 'bg-[#070707]' : 'bg-transparent')}
        document:onScroll$={() => {
          if (window.scrollY > 0) {
            store.scrolled = true
          } else {
            store.scrolled = false
          }
        }}>
        <div class='flex justify-between items-center p-3'>
          <ul class='flex mx-4 items-center'>
            <li class="w-6">
              <span onClick$={menuToogle} class="cursor-pointer">
                {state?.menu ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-8 h-8 mr-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 mr-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>}
              </span>
              {
                state?.menu && <HeaderDrawer></HeaderDrawer>
              }
            </li>
            <li>
              <Link href="/mujeres">
                <img class="w-5" src="/assets/icons/search-w.svg" alt='search' />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img class="w-5" src="/assets/icons/home_w.svg" alt='home_w' />
              </Link>
            </li>

            <li>
              <Link href="/auth/login">
                <img class="w-5" src="/assets/icons/bookmark_fill_w2.svg" alt='bookmark_fill_w2' />
              </Link>
            </li>

            <li>
              <Link href="/red-social-erotica/mujeres" >
                <img class="w-5" src="/assets/icons/wall_w2.svg" alt='wall_w2' />
              </Link>
            </li>

            <li>

              <img onClick$={notiToogle} class="w-6" src="/assets/icons/alarm_w_2.svg" alt='alarm_w_2' />

              {
                state?.noti && <Notification></Notification>
              }
            </li>

            <li>
              <Link href="/auth/login" >
                <img class="w-5" src="/assets/icons/user_w.svg" alt='user_w' />
              </Link>
            </li>
          </ul>
          <div class={['pr-3', styles.logo]}>
            <a href="/">
              <img class={styles.logo} src="/assets/logos/gula-logo-w.svg" alt="gula-logo" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
});
