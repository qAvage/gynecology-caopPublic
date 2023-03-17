<template lang="pug">
section#programs
  .title
    UITitleIcon Программы
    h4 Выбери свою программу
  .container
    .select-programs.u-no-select
      ProgramsSelectItem.selected-program(
        v-for="program in selectPrograms"
        :program="program"
        :class="{active: currentProgram === program.slug}"
        @choiceProgram="choice($event)")
    transition-group(name="list" tag="div" class="programs")
      ProgramsItem(
        v-for="program in programs"
        :key="program.order"
        :program="program"
        :cards="filtredCards(program.slug)"
        @callCardsPopup="showPopup($event)")
</template>

<script>
import ProgramsItem from './ProgramsItem'
import ProgramsSelectItem from './ProgramsSelectItem'

export default {
  name: 'AppPrograms',
  components: {
    ProgramsItem,
    ProgramsSelectItem
  },
  data () {
    return {
      currentProgram: 'all'
    }
  },
  computed: {
    selectPrograms () {
      return [
        { slug: 'all', name: 'Все программы', order: 0 }, 
        ...this.$root.$data.programs.map(el => ({...el}))
      ].sort((a, b) => a.order - b.order)
    },
    programs () {
      return this.$root.$data.programs
        .filter(el => {
          if (this.currentProgram === 'all') {
            return el
          } else {
            return el.slug === this.currentProgram
          }
        })
    }
  },
  methods: {
    choice (slug) {
      this.currentProgram = slug
    },
    filtredCards (certainCard) {
      return this.$root.$data.cards
        .filter(el => el.parent === certainCard)
    },
    showPopup (ctx) {
      this.$emit('openPopup', ctx)
    }
  },
  mounted () {
  }
}
</script>