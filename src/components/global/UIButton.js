/**
 * UIButton component
 **/

import { h } from 'vue'

const UIButton = (props, context) => {
  return h('button', { class: `btn btn-${props.kind}` }, context.slots)
}

UIButton.props = {
  // Button type

  kind: {
    type: String,
    default: 'primary'
  }
}

export default UIButton
