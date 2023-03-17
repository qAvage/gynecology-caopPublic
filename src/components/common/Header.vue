<template lang="pug">
header#the-header
  .container
    .top
      a(href="/").logo
        UISVGIcon(icon="logo")
      UINavBar(kind="header")
      div
        UIPhoneNumber
        UIButton(kind="secondary" @click="this.$root.openPopup()") Обратный звонок
      UISVGIcon(
        icon="burger"
        @click="toggleShowMobileMenu")
  transition(name="mobile-menu")
    .mobile-menu(v-show="showMobileMenu")
      .mobile-menu-body
        UINavBar(@closeMobileMenu="toggleShowMobileMenu")
        UIButton(@click="closeMobileMenu(), this.$root.openPopup()") Обратный звонок
        UIPhoneNumber
        p.p-sm с 9:00 до 18:00 без выходных
        UIAdress
        ul.ui-social-icons
            UISocialIcons(
              v-for="social in ['vk', 'wa', 'tg']"
              :social="social")
      .mobile-menu-backdrop(@click="closeMobileMenu")
  UISVGIcon.bg-blur(icon="ellipse")
</template>

<script>

const mobileMenuEventListeners = ['scroll', 'resize']

export default {
  name: 'TheHeader',
  data () {
    return {
      showMobileMenu: false
    }
  },
  watch: {
    showMobileMenu (n) {
      if (n) {
        mobileMenuEventListeners.forEach( evt => {
          window.addEventListener(evt, this.handleScroll)
        })
      } else {
        mobileMenuEventListeners.forEach( evt => {
          window.removeEventListener(evt, this.handleScroll)
        })
      }
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 600 || window.innerWidth > 800) {
        this.toggleShowMobileMenu()
      }
    },
    toggleShowMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },
    closeMobileMenu () {
      this.showMobileMenu = false
    }
  }
}
</script>