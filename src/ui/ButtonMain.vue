<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  border: 2px solid var(--grey);
  font-size: 14px;
  cursor: pointer;
  background: var(--black);
  color: var(--white);
  display: block;
  padding: 8px 12px;
  transition: 0.7s;
  width: fit-content;

  &:hover {
    background: var(--black-hover);
  }
}
</style>
