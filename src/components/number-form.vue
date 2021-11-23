<template>
  <div>
    <text-field
      :value="value"
      @change="change"
      :label="error ? '数値を入力してください' : undefined"
      :error="error"
    />
  </div>
</template>

<script>
import TextField from './text-field.vue'

export default {
  name: 'number-form',
  components: {
    TextField,
  },
  data() {
    return {
      error: false,
    }
  },
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    convert(rawValue) {
      return Number(rawValue)
    },
    change(newNumberString) {
      const newNumber = this.convert(newNumberString)
      if (newNumber) {
        this.$emit('change', newNumber)
        this.error = false
      } else {
        this.error = true
      }
    },
  },
}
</script>
