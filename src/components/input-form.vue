<template>
  <div class="input-form">
    <span class="label">{{ label }}</span>
    <component :is="component" :value="value" class="form" @change="change" />
  </div>
</template>

<script>
import DateForm from './date-form.vue'
import NumberForm from './number-form.vue'

const componentMap = {
  date: DateForm,
  number: NumberForm,
}

export default {
  name: 'input-form',
  data() {
    return {
      value: null,
    }
  },
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {},
    label: {
      type: String,
      required: true,
    },
    optionKey: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    defaultValue: {},
  },
  computed: {
    component() {
      return componentMap[this.type]
    },
  },
  mounted() {
    this.value = localStorage.getItem(this.optionKey) ?? this.defaultValue
    this.change(this.value, this.component.methods.convert(this.value))
  },
  methods: {
    change(newValue, newModelValue) {
      if (!newValue) {
        return
      }
      this.$emit('change', newModelValue ?? newValue)
      localStorage.setItem(this.optionKey, newValue)
      this.value = newValue
    },
  },
}
</script>

<style lang="scss" scoped>
.input-form {
  .form {
    width: 300px;
  }
}
</style>
