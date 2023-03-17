/**
 * FormPopupCardTitle component
 */

import { h } from 'vue'


const FormPopupCardTitle = ({ cardTitle }, { emit }) => {

  return h('div', { onClick: () => emit('selectedProgram', cardTitle) }, h('span', cardTitle))
}

FormPopupCardTitle.props = {

  cardTitle: {
    type: String
  }
}

export default FormPopupCardTitle
