/**
 * UISocialIcons component
 */

import { h, resolveComponent } from 'vue'

const socials = {
  vk: ['https://vk.com/caop1', 'Вконтакте'],
  wa: ['https://wa.me/send?phone=79119235223', 'WhatsApp'],
  tg: ['https://telegram.me/caop_spb', 'Telegram']
}

const UISocialIcons = ({ social, plate }) => {
  const iconS = resolveComponent('UISVGIcon')

  const iconPlate = (iconQ) => {
    if (plate === true) {
      return h('a', { href: socials[social][0], target: '_blank' },
        h('div', { class: 'icon-plate' }, [iconQ, h('span', socials[social][1])]))
    } else {
      return h('a', { href: socials[social][0], target: '_blank' }, iconQ)
    }
  }

  return h('li', { class: 'ui-social-icon' }, iconPlate(h(iconS, { icon: social })))
}

UISocialIcons.props = {

  social: {
    type: String,
    require: true,
    validator: v => Object.keys(socials).includes(v)
  },

  plate: {
    type: Boolean,
    default: false
  }

}

export default UISocialIcons
