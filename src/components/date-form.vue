<template>
  <div>
    <v-menu v-model="showMenu" offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on }">
        <text-field :value="value" v-on="on" readonly />
      </template>
      <v-date-picker :value="value" @change="change" locale="ja" />
    </v-menu>
  </div>
</template>

<script>
import TextField from './text-field.vue'

export default {
  name: 'date-form',
  components: {
    TextField,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    convert(rawValue) {
      return new Date(rawValue)
    },
    change(newDate) {
      this.showMenu = false
      this.$emit('change', newDate, this.convert(newDate))
    },
  },
}
</script>
