<template lang="pug">
footer#the-footer
  .container
    .content
      .logo
        a(href="#")
          UISVGIcon(icon="logo")
      UINavBar(kind="footer")
      .feed
        h4 Записаться
        UIButton(@click="this.$root.openPopup()") Обратный звонок
        UIPhoneNumber
        p.p-sm с 7:30 до 19:30 без выходных
        ul.ui-social-icons
              UISocialIcons(
                v-for="social in ['vk', 'wa', 'tg']"
                :social="social")
      .bot
        a(href="license.pdf" target="_blank")
          span.p-sm Лицензия на осуществление медицинской деятельности
        a(href="Policy.pdf" target="_blank")
          span.p-sm Политика конфиденциальности
        a(href="personal.pdf" target="_blank")
          span.p-sm Обработка персональных данных
        span.p-sm © ООО «ЦАОП №1», 2022
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
  