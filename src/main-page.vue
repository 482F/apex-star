<template>
  <div class="main-page">
    <div class="row">
      <input-form
        v-model="startDate"
        label="シーズン開始日"
        type="date"
        option-key="startDate"
      />
      <input-form
        v-model="endDate"
        label="シーズン終了日"
        type="date"
        option-key="endDate"
      />
    </div>
    <div class="row">
      <input-form
        v-model="dailyStars"
        label="デイリー☆数"
        type="number"
        option-key="dailyStars"
        :default-value="8"
      />
      <input-form
        v-model="weeklyStars"
        label="ウィークリー☆数"
        type="number"
        option-key="weeklyStars"
        :default-value="63"
      />
    </div>
    <div class="row">
      <input-form
        v-model="currentStars"
        label="現在☆数"
        type="number"
        option-key="currentStars"
      />
      <input-form
        v-model="goalStars"
        label="目標☆数"
        type="number"
        option-key="goalStars"
        :default-value="1100"
      />
    </div>
    <div class="row">
      <display-label label="残日数" :value="fl(restDays)" />
    </div>
    <div class="row">
      <display-label label="残デイリー☆数" :value="fl(restDailyStars)" />
      <display-label label="残ウィークリー☆数" :value="fl(restWeeklyStars)" />
    </div>
    <div class="row">
      <display-label label="残ミッション☆数" :value="fl(restStars)" />
      <display-label label="ミッション☆数猶予" :value="fl(graceStars)" />
    </div>
    <div class="row">
      <display-label
        label="予測目標達成日付"
        :value="formatDate(estDate)"
      />
      <display-label label="日数猶予" :value="fl(graceDays)" />
    </div>
  </div>
</template>

<script>
import InputForm from './components/input-form.vue'
import DisplayLabel from './components/display-label.vue'

export default {
  name: 'main-page',
  components: {
    InputForm,
    DisplayLabel,
  },
  data() {
    return {
      currentDate: new Date(),
      startDate: undefined,
      endDate: undefined,
      dailyStars: undefined,
      weeklyStars: undefined,
      currentStars: undefined,
      goalStars: undefined,
    }
  },
  computed: {
    restDays() {
      return (this.endDate - this.currentDate) / (1000 * 60 * 60 * 24)
    },
    restDailyStars() {
      return Math.floor(this.restDays - 1) * this.dailyStars
    },
    restWeeklyStars() {
      return Math.floor(this.restDays / 7 - 1) * this.weeklyStars
    },
    restStars() {
      return this.restDailyStars + this.restWeeklyStars
    },
    graceStars() {
      return this.restStars - (this.goalStars - this.currentStars)
    },
    estDate() {
      return (
        (this.goalStars - this.currentStars) /
          (this.currentStars / (this.currentDate - this.startDate)) +
        this.currentDate.getTime()
      )
    },
    graceDays() {
      return (this.endDate - this.estDate) / (1000 * 60 * 60 * 24)
    },
  },
  mounted() {
    setInterval(() => (this.currentDate = new Date()), 1000)
  },
  methods: {
    fl: (num) => {
      return num ? Math.floor(num) : ''
    },
    formatDate(dateNum) {
      if (!dateNum) {
        return ''
      }
      const date = new Date(dateNum)
      const p = (n) => n.toString().padStart(2, '0')
      const y = date.getFullYear()
      const mo = p(date.getMonth() + 1)
      const d = p(date.getDate())
      const h = p(date.getHours())
      const mi = p(date.getMinutes())
      const s = p(date.getSeconds())
      return `${y}-${mo}-${d} ${h}:${mi}:${s}`
    },
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  background-color: white;
  filter: drop-shadow(2px 2px 5px lightgray);
  font-size: 18px;
  font-family: 'Meiryo UI';
  margin: 2rem auto;
  .row {
    margin: 1rem;
    display: flex;
    > * {
      margin: 0 1rem;
      width: 50%;
    }
  }
}
</style>
