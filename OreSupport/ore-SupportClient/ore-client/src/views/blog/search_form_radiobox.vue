<template>
  <div class="col-sm-12 col-md-6">
    <div class="form-group" style="display: flex;">
      <p class="search-form-title"><span style="margin: 0 auto;">{{ title }}</span></p>
      <div v-for="option in options" :key="option.value" style="display: flex; padding-top: 10px;">
        <input type="radio" :id="option.value" :value="option.value" class="search-form-input" v-model="sex" @change="onChange()">
        <label :for="option.value" style="display: flex;" class="mr-3">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex: ""
    }
  },
  props: {
    title: {
      type: String,
      required: true      
    },
    options: {
      type: Array,
      required: true
    },
  },
  methods: {
    onChange: function(){
      this.$emit("emitSelectSex", this.sex);
    }
  },

};
</script>
