/**
 * UIAdress component
 */

import { h } from 'vue'

const UIAdress = () => {

  return h('a', {
    href: 'https://yandex.ru/maps/-/CCU6n2TPsA',
    class: 'phone-number',
    target: '_blank'
    },
      h('span', { class: 'p-sm' },
        '192174, г.Санкт-Петербург, пр-кт Александровской Фермы, д. 8, стр. 1, пом. 26-Н'))
}

 
export default UIAdress
 