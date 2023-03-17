/**
 * UINavBar component
 */

import { h, resolveComponent } from 'vue'

 const navItems = [
  {
    name: 'Программы',
    href: 'programs'
  },
  {
    name: 'О нас',
    href: 'about'
  },
  {
    name: 'Отзывы',
    href: 'reviews'
  },
  {
    name: 'Контакты',
    href: 'contacts'
  },
  {
    name: 'Вопрос / ответ',
    href: 'faq'
  }
 ]

const UINavBar = ({ kind }, { emit }) => {

  const UIAdress = resolveComponent('UIAdress')

  return h('nav', { class: kind === 'footer' || kind === 'header' ? 'nav u-no-select' : 'u-no-select' },
    [h('ul', navItems.map(el => h('li',
      h('a', { href: `#${el.href}`, onClick: () =>
        emit('closeMobileMenu') }, el.name)))),
          kind === 'footer' ? h(UIAdress) : ''])
}

UINavBar.emits = ['closeMobileMenu']
UINavBar.props = ['kind']

export default UINavBar
 