/**
 * UIPhoneNumber component
 */

import { h } from 'vue'

const UIPhoneNumber = () => {
  return h('a', { href: 'tel:+78129235223', class: 'phone-number' }, '+7 (812) 923-52-23')
}

 
export default UIPhoneNumber
 