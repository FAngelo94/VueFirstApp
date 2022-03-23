<template>
  <div>
    <button
      @click="
        if (option === 0) {
          option = 1;
        } else {
          option = 0;
        }
      "
    >
      change counter
    </button>
    <p>option: {{ option }}</p>
    <SimpleCounter v-if="option === 0" />
    <StoreCounter v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCounter from "@/components/SimpleCounter.vue";
import StoreCounter from "@/components/StoreCounter.vue";

export default {
  name: "CounterView",
  data() {
    return {
      option: 0,
    };
  },
  components: {
    SimpleCounter,
    StoreCounter,
  },
};
</script>
