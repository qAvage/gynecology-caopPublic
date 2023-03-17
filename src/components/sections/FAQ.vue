<template lang="pug">
section#faq
  .container
    .title
      UITitleIcon Вопрос / Ответ
      h2 Популярные вопросы и ответы
      p Здесь вы можете найти популярные вопросы и ответы на интересующие вас вопросы
    .inner
      ul.accordion
        li.accordion-item(v-for="i in accordionList")
          .accordion-title.u-no-select(
            @click="toggle(i, accordionList)"
            :class="{'is-active' : i.active}")
            h4 {{ i.title }}
            UISVGIcon(icon="plus")
          transition(
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end")
            .accordion-content(v-if="i.active")
              p {{ i.content }}
      .card.u-no-select
        UISVGIcon.bg-blur(icon="ellipse")
        h3 Остались вопросы? Мы с радостью на них ответим!
        p Напишите нам в любое время в Telegram / WhatsApp / VK
        ul.ui-social-icons
          UISocialIcons(
            v-for="social in ['vk', 'wa', 'tg']"
            :social="social"
            plate=true)
</template>

<script>

export default {
  name: 'appFaq',
  data () {
    return {
      accordionList: [
        {
          active: false,
          title: 'Могу ли я пройти обследование сегодня?',
          content: 'Да. Мы всегда держим в резерве одно посещение специалиста для экстренных случаев'
        },
        {
          active: false,
          title: 'Через сколько дней будут готовы анализы?',
          content: 'Все зависит от категории сложности самого анализа. Большинство анализов готовы на следующий день'
        },
        {
          active: false,
          title: 'Больно ли проходить обследование «Женский чекап»?',
          content: 'Наш медицинский центр использует только современные медицинские расходные материалы и любая диагностика абсолютно безболезненна'
        },
        {
          active: false,
          title: 'Можно ли сразу получить лечение по результатам обследования?',
          content: 'Да, конечно. «Мужской чекап» даёт возможность нашему специалисту поставить диагноз и незамедлительно приступить к лечению выявленных заболеваний'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    toggle (item, list) {
      if (item.active === false) {
        list.forEach(element => {
          element.active = false
        })
        item.active = true
      } else {
        item.active = false
      }
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    }
  }
}
</script>
