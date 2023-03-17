import { createApp, h, Transition } from 'vue'
import UISVGIcon from '@/components/global/UISVGIcon'
import UIPhoneNumber from '@/components/global/UIPhoneNumber'
import UIAdress from '@/components/global/UIAdress'
import UIButton from '@/components/global/UIButton'
import UINavBar from '@/components/global/UINavBar'
import UISocialIcons from '@/components/global/UISocialIcons'
import UITitleIcon from '@/components/global/UITitleIcon'
import Header from '@/components/common/Header'
import Hero from '@/components/sections/Hero'
import Programs from '@/components/sections/Programs'
import About from '@/components/sections/About'
import AboutCard from '@/components/sections/AboutCard'
import Feedback from '@/components/sections/Feedback'
import Reviews from '@/components/sections/Reviews'
import Contacts from '@/components/sections/Contacts'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/common/Footer'
import FormPopup from '@/components/includes/FormPopup'
import SuccessPopup from '@/components/includes/SuccessPopup'
import '@/assets/scss/main.scss'
import axios from 'axios'

createApp({
  render () {
    return [
      h(Header),
      h(Hero),
      h(Programs, { onOpenPopup: (program) => this.openPopup(program) }),
      h(About),
      h(Feedback),
      h(Reviews),
      h(Contacts),
      h(FAQ),
      h(Footer),
      h(Transition, { name: 'fade' },
        () => this.isShowPopup ? h(FormPopup, {
          program: this.programPopup
        }) : ''),
      h(Transition, { name: 'fade' },
        () => this.isShowSuccessPopup ? h(SuccessPopup, {
          onCloseSuccessPopup: () => this.closeSuccessPopup(),
          program: this.currentProgram
        }) : ''),
    ]
  },
  data () {
    return {
      programs: [],
      cards: [],
      isShowPopup: false,
      isShowSuccessPopup: false,
      programPopup: '',
      currentProgram: ''
    }
  },
  watch: {
    isShowSuccessPopup (n) {
      if (n) setTimeout(() => this.isShowSuccessPopup = false, 3000)
    }
  },
  methods: {
    openPopup (program) {
      this.programPopup = program
      this.isShowPopup = true
    },
    closePopup () {
      this.isShowPopup = false
    },
    openSuccessPopup (program) {
      this.currentProgram = program
      this.isShowSuccessPopup = true
    },
    closeSuccessPopup () {
      this.isShowSuccessPopup = false
    },
  },
  mounted () {
    axios
      .get('programs.json')
      .then(({ data: { programs, cards } }) => {
        this.programs = programs
        this.cards = cards
      })
      .catch(() => console.error('Не удалось получить файл настроек'))
  }
})
  .component('UISVGIcon', UISVGIcon)
  .component('UINavBar', UINavBar)
  .component('UIPhoneNumber', UIPhoneNumber)
  .component('UIAdress', UIAdress)
  .component('UIButton', UIButton)
  .component('UISocialIcons', UISocialIcons)
  .component('UITitleIcon', UITitleIcon)
  .component('AboutCard', AboutCard)
  .mount('#app')
