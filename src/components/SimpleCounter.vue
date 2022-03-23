<template>
  <div>
    <h1>Counter</h1>
    <p>This is a simple counter app</p>
    <p>Current count: {{ count }}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
const count = 0;

export default {
  name: "SimpleCounter",
  data() {
    return {
      count,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    sub() {
      this.count--;
    },
  },
};
</script>
