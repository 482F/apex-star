<template>
  <v-text-field
    @click="(e) => $emit('click', e)"
    @change="(e) => $emit('change', e)"
    class="text-field"
    outlined
    dense
    v-bind="$props"
  />
</template>

<script>
export default {
  name: 'text-field',
  props: {
    value: {
      type: String,
    },
    readonly: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    error: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped>
.text-field ::v-deep {
  .v-input__slot {
    margin: 0 !important;
    legend {
      width: 0 !important;
    }
    .error--text {
      top: -0.1rem;
      left: auto !important;
      right: 0px !important;
    }
  }
  .v-text-field__details {
    display: none;
  }
}
</style>
