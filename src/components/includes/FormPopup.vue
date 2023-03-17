<template lang="pug">
#form-popup.popup
  .inner 
    UISVGIcon.icon-close(icon="close" @click="this.$root.closePopup()")
    h2 Записаться на программу
    h3(v-if="program") {{ program }}
    div(v-else)
      p Выбери свою программу
      .programs
        FormPopupCardTitle.selected-program.u-no-select(
          v-for="cardTitle in cardsTitle"
          :cardTitle="cardTitle"
          :class="{active: currentProgram === cardTitle}"
          @selectedProgram="choiceProgram($event)")
    AppForm(:program="currentProgram")
  .overlay(@click="this.$root.closePopup()")
</template>

<script>
import AppForm from './AppForm'
import FormPopupCardTitle from './FormPopupCardTitle'

export default {
  name: 'FormPopup',
  components: {
    AppForm,
    FormPopupCardTitle
  },
  props: {
    program: {
      type: String
    }
  },
  data () {
    return {
      currentProgram: ''
    }
  },
  computed: {
    cardsTitle () {
      return this.$root.$data.cards
        .map(el => el.title)
    }
  },
  methods: {
    choiceProgram (program) {
      this.currentProgram = program
    }
  },
  mounted () {
    this.currentProgram = this.program
    document.body.style.overflow = 'hidden'
  },
  unmounted () {
    document.body.style.overflow = 'visible'
  }
}

</script>