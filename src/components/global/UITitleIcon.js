/**
* UITitleIcon component
**/

import { h } from 'vue'

const UITitleIcon = (props, context) => {
  return h('span', { class: 'ui-title-icon p-sm' }, context.slots)
}

export default UITitleIcon
