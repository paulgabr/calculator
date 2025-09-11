<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'AppDisplay',
  props: ['value']
}
</script>

<style scoped>
.display {
  grid-column: span 4;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  font-weight: 200;
  overflow: hidden;
}
</style>
