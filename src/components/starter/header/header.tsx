import { $, component$, useContext, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { GulaContext } from '~/root';
import Notification from '../notification';
import styles from './header.scss?inline';
import HeaderDrawer from './headerDrawer';

export default component$(() => {
  useStyles$(styles);
  const gulaContext = useContext(GulaContext);
  const menuToogle = $(() => gulaContext.openMenu = !gulaContext.openMenu);
  const notiToogle = $(() => gulaContext.openNotificationsModal = !gulaContext.openNotificationsModal);
  const store = useStore({
    scrolled: false,
  })

  useVisibleTask$(() => {
    gulaContext.isMobile = window?.innerHeight > window?.innerWidth;
    const onResize = () => {
      gulaContext.isMobile = window?.innerHeight > window?.innerWidth;
    }
    window.addEventListener('resize', onResize, true);
    return () => {
      window.removeEventListener('resize', onResize, true);
    };
  });

  return (
    <>
      <header class={"fixed top-0 left-0 w-full p-2 text-white text-xl sm:text-4xl z-10 " + (store.scrolled ? 'header-blur' : 'bg-transparent')}
        document:onScroll$={() => {
          if (window.scrollY > 0) {
            store.scrolled = true
          } else {
            store.scrolled = false
          }
        }}>
        <div class='flex justify-between items-center p-3'>
          <ul class='flex mx-4 items-center p-0'>
            <li class="w-6">
              <span onClick$={menuToogle} class="cursor-pointer">
                {gulaContext?.openMenu ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-8 h-8 mr-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 mr-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>}
              </span>
            </li>
            <li style={{ display: gulaContext.isMobile ? 'none' : undefined }}>
              <Link href="/mujeres">
                <img class="w-5" src="/assets/icons/search-w.svg" alt='search' />
              </Link>
            </li>
            <li style={{ display: gulaContext.isMobile ? 'none' : undefined }}>
              <Link href="/">
                <img class="w-5" src="/assets/icons/home_w.svg" alt='home_w' />
              </Link>
            </li>

            <li style={{ display: gulaContext.isMobile ? 'none' : undefined }}>
              <Link href="/auth/login">
                <img class="w-5" src="/assets/icons/bookmark_fill_w2.svg" alt='bookmark_fill_w2' />
              </Link>
            </li>

            <li style={{ display: gulaContext.isMobile ? 'none' : undefined }}>
              <Link href="/red-social-erotica/mujeres" >
                <img class="w-5" src="/assets/icons/wall_w2.svg" alt='wall_w2' />
              </Link>
            </li>

            <li style={{ display: gulaContext.isMobile ? 'none' : undefined }}>

              <img onClick$={notiToogle} class="w-6" src="/assets/icons/alarm_w_2.svg" alt='alarm_w_2' />

              {
                gulaContext?.openNotificationsModal && <Notification></Notification>
              }
            </li>

            <li style={{ display: gulaContext.isMobile ? 'none' : undefined }}>
              <Link href="/auth/login" >
                <img class="w-5" src="/assets/icons/user_w.svg" alt='user_w' />
              </Link>
            </li>
          </ul>
          <div class='pr-3 header-logo'>
            <a href="/">
              <img class='header-logo' src="/assets/logos/gula-logo-w.svg" alt="gula-logo" />
            </a>
          </div>
        </div>
      </header>
      <HeaderDrawer />
    </>
  );
});
