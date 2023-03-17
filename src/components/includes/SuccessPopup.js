/**
 * SuccessPopup component
 */

import { h, resolveComponent } from 'vue'


const SuccessPopup = ({ program }, { emit }) => {

  const uiIcon = resolveComponent('UISVGIcon')
  
  return h('div', { id: 'success-popup', class: 'popup u-no-select' },
  [
    h('div', { class: 'inner' },
    [
      h(uiIcon, { icon: 'close', class: 'icon-close', onClick: () => emit('closeSuccessPopup') }),
      h('h2', `Вы записаны на ${program ? 'программу ' + program : 'приём к гинекологу'}`),
      h('h4', 'Менеджер свяжется с вами в ближайшее время для подтверждения записи')
    ]),
    h('div', { class: 'overlay', onClick: () => emit('closeSuccessPopup') })
  ])
}

SuccessPopup.props = {
  program: {
    type: String
  }
}

export default SuccessPopup
