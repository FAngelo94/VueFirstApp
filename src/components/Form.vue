<template>
  <form id="demo">
    <!-- text -->
    <p>
      <input type="text" v-model="msg" />
      {{ msg }}
    </p>
    <!-- checkbox -->
    <p>
      <input type="checkbox" v-model="checked" />
      {{ checked ? "yes" : "no" }}
    </p>
    <!-- radio buttons -->
    <p>
      <input type="radio" name="picked" value="one" v-model="picked" />
      <input type="radio" name="picked" value="two" v-model="picked" />
      {{ picked }}
    </p>
    <!-- select -->
    <p>
      <select v-model="selected">
        <option>one</option>
        <option>two</option>
      </select>
      {{ selected }}
    </p>
    <!-- multiple select -->
    <p>
      <select v-model="multiSelect" multiple>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </select>
      {{ multiSelect }}
    </p>
    <p>data: {{ $data }}</p>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data: function () {
    return {
      msg: "hi!",
      checked: true,
      picked: "one",
      selected: "two",
      multiSelect: ["one", "three"],
    };
  },
  methods: {},
  watch: {
    msg: function (val) {
      console.log("msg changed to: " + val);
    },
    checked: function (val) {
      console.log("checked changed to: " + val);
    },
    picked: function (val) {
      console.log("picked changed to: " + val);
    },
    selected: function (val) {
      console.log("selected changed to: " + val);
    },
    multiSelect: function (val) {
      console.log("multiSelect changed to: " + val);
    },
  },
};
</script>
