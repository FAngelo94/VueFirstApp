<template>
  <div>
    <h1>Store Counter</h1>
    <p>This is a simple counter app</p>
    <p>Current count: {{ this.$store.state.count }}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "StoreCounter",
  methods: {
    add() {
      this.$store.commit("updateCount", this.$store.state.count + 1);
    },
    sub() {
      this.$store.commit("updateCount", this.$store.state.count - 1);
    },
  },
};
</script>
