<template>
  <input class="input" :placeholder="placeholder" :type="type" v-model="inputValue" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
    inputValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  border: none;
  padding: 10px 12px;
  border-bottom: 2px solid var(--black);
  font-size: 16px;

  &::placeholder {
    transition: 0.6s;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}
</style>
