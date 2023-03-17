/**
 * AboutCard component
 */

import { h, resolveComponent } from 'vue'

const cards = {
  priceDown: [
    'Самые низкие цены на лабораторные анализы',
    'Мы держим низкие цены для наших пациентов вне зависимости от сложности исследования и внешних факторов'
  ],
  personUp: [
    'Целесообразность',
    'Наши специалисты — противники необоснованных назначений. Выбирая нас вы можете быть уверены, что мы обойдёмся без дежурных рекомендаций и назначений'
  ],
  calendar: [
    'Отсутствие очередей, прием строго по времени ',
    'Мы уважаем ваше время и ведём приём строго по записи, соблюдая все принципы конфиденциальности'
  ],
  person: [
    'Гарантируем анонимность для всех наших пациентов',
    'Мы заботимся о том, чтобы ваши личные данные, информация о приемах и результаты исследований были конфиденциальными'
  ]
}

const AboutCard = ({ card }) => {
  const UIicon = resolveComponent('UISVGIcon')

  return h('div', { class: 'card-item' }, [h(UIicon, { icon: card }), h('h3', cards[card][0]), h('p', cards[card][1])])
}

AboutCard.props = {

  card: {
    type: String,
    require: true,
    validator: v => Object.keys(cards).includes(v)
  }
}

export default AboutCard
