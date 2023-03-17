<template lang="pug">
section#hero
  .container
    .inner
      UISVGIcon.bg-blur(icon="ellipse")
      .title
        UITitleIcon ЦАОП № 1
        h1 Диагностика здоровья #[br] #[span для женщин] всех возрастов
        p Обратиться в нашу клинику – это возможность быстро получить
          | высококвалифицированную помощь по всем вопросам женского здоровья
        p Приём #[span гинеколога + УЗИ 2500] – рублей оценка жалоб, сбор анамнеза,
          | осмотр на гинекологическом кресле, УЗИ малого таза, консультация)
        div
          UIButton(@click="this.$root.openPopup()") Записаться к гинекологу
          .sale
            UISVGIcon(icon="percent")
            UISVGIcon(icon="rounded-title")
      .image
      HeroTooltip(
        v-for="(tooltip, index) in tooltips"
        @mouseOver="mouseOver($event)"
        @mouseOut="mouseOut()"
        :title="tooltip.title"
        :content="tooltip.content"
        :onLeft="tooltip.onLeft"
        :idx="index"
        :showTooltip="showTooltip")
</template>

<script>
import HeroTooltip from './HeroTooltip'

export default {
  name: 'appHero',
  components: {
    HeroTooltip
  },
  data () {
    return {
      showTooltip: '',
      tooltips: [
        {
          title: 'Своя лаборатория',
          content: 'Точность диагностики и низкие цены на большинство анализов. Сжатые сроки выполнения',
          onLeft: false
        },
        {
          title: 'Квалифицированные врачи',
          content: 'У нас работают специалисты высшей и первой категории, со стажем более 7 лет',
          onLeft: true
        },
        {
          title: 'Современное оборудование',
          content: 'Мы используем только современное оборудование, что позволяет повысить качество обследований',
          onLeft: false
        }
      ]
    }
  },
  methods: {
    
    mouseOver (e) {
      this.showTooltip = e
    },
    mouseOut () {
      this.showTooltip = ''
    },
  }
}
</script>