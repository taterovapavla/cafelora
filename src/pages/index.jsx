import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu'
import { Gallery } from '../components/Gallery'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const rolloutNav = document.querySelector('.rollout-nav')
const navBtnElm = document.querySelector('.nav-btn')

navBtnElm.addEventListener('click', () => {
  rolloutNav.classList.toggle('nav-closed')
})

rolloutNav.addEventListener('click', () => {
  rolloutNav.classList.toggle('nav-closed')
})

// const aMenuElm = document.querySelector('.rollout-nav').querySelectorAll('a')
//   aMenuElm.forEach((a) => {
//     a.addEventListener('click', () => {
//       document.querySelector('.rollout-nav').classList.toggle('nav-closed')
//     })
//   })

