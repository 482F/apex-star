<template>
  <div class="display-label">
    <span class="label">{{ label }}</span>
    <br />
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'display-label',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.display-label {
  .value {
    padding-left: 1rem;
  }
}
</style>
