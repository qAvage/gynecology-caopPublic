<template lang="pug">
section#contacts
  .title
    UITitleIcon Контакты
  .wrap
    .map.u-no-select
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A330ffd3d2cbec32023f91ce34c104e23fc54207861c475430e1c961ef0409ebe&amp;source=constructor" width="100%" height="100%" frameborder="0" loading="lazy"></iframe>
    .content
      h2 Как нас найти? Мы рядом!
      h4 Контакты нашей клиники
      ul
        li
          UISVGIcon(icon="phone")
          a(href="tel:+78129235223")
            span +7 812 923-52-23
        li
          UISVGIcon(icon="geo")
          a(href="https://yandex.ru/maps/-/CCU6n2TPsA" target="_blank")
            span 192174, г. Санкт-Петербург, пр-кт Александровской Фермы, д. 8, стр. 1, пом. 26-Н
        li
          UISVGIcon(icon="time")
          span с 7:30 до 19:30 без выходных
      h4 Свяжись с нами в соц.сетях
      ul.ui-social-icons
        UISocialIcons(
          v-for="social in ['vk', 'wa', 'tg']"
          :social="social")
      h4 Узнать о нас больше
      a(href="https://prodoctorov.ru/spb/lpu/79289-caop-1/" target="_blank") prodoctorov.ru
</template>

<script>

export default {
  name: 'appContacts',
  data () {
    return {
    }
  }
}

</script>
