<template>
  <div>
    <h1>This is a Form Example</h1>
    <FormComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import FormComponent from "@/components/Form.vue";

export default {
  name: "FormView",
  components: {
    FormComponent,
  },
};
</script>
