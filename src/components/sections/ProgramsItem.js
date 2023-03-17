/**
* ProgramsItem component
*/

import { h, resolveComponent } from 'vue'

const ProgramsItem = ({ program, cards }, { emit }) => {
  const uiBtn = resolveComponent('UIButton')
  const uiIcon = resolveComponent('UISVGIcon')

  const renderOffers = arr => {
    return h('div', { class: 'content' }, arr.map(el => h('div',
      [
        h(uiIcon, { icon: 'ok' }),
        h('span', el)
      ]
    )))
  }

  const renderProgramsCard = (arr, half) => {
    if (half) return renderOffers(arr) 
    else {
      const left = arr.slice(0, arr.length / 2)
      const right = arr.slice(arr.length / 2)
      return [renderOffers(left), renderOffers(right)]
    }
  }

  return h('div', { class: 'program' },
    [
      h('div', { class: 'title' },
      [
        h('h2', program.title),
        h('p', program.description)
      ]),
        h('div', { class: 'cards' },
          cards.map(({ title, half, offers, price }) => h('div', { class: `${half ? 'half' : 'entire'} card` },
          [
            h('div', { class: 'header' },
            [
              h('h3', title),
              h(uiIcon, { icon: 'percent' })
            ]),
            h('div', { class: 'body' }, renderProgramsCard(offers, half)),
            h('div', { class: 'footer' },
            [
              h(uiBtn, { onClick: () => emit('callCardsPopup', title)}, () => 'Выбрать программу'),
              h('div', [h('span', 'Стоимость:'), h('span', `${price} ₽`)])
            ])
          ])))])
}

ProgramsItem.props = {
  program: {
    type: Object
  },
  cards: {
    type: Array
  }
}

export default ProgramsItem