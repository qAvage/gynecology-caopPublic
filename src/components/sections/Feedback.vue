<template lang="pug">
section#feedback
  div
    .container
      .wrapper
        UISVGIcon.bg-blur(icon="ellipse")
        UISVGIcon.bg-blur(icon="ellipse")
        .calendar
          .icon
            .icon-wrapper
              UISVGIcon(icon="calendarFB")
        .content
          .title
            h2 Записаться на приём к гинекологу
            p Своевременное выявление гинекологических заболеваний для женщин всех возрастов
            p Приём #[span гинеколога + УЗИ 2500] – рублей оценка жалоб, сбор анамнеза, 
              | осмотр на гинекологическом кресле, УЗИ малого таза, консультация)
          AppForm
</template>

<script>
import AppForm from '../includes/AppForm';

export default {
  name: 'appFeedback',
  components: {
    AppForm
  }
}
</script>