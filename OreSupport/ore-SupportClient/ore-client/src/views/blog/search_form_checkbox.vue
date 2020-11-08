<template>
  <div class="col-sm-12 col-md-6">
    <div class="form-group" style="display: flex;">
      <p class="search-form-title"><span style="margin: 0 auto;">{{ title }}</span></p>
      <div v-for="option in options" :key="option.value" style="display: flex; padding-top: 10px;">
        <input type="checkbox" :id="option.label" :value="option.value" class="search-form-input">
        <label :for="option.label" style="display: flex;" class="mr-3">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true      
    },
    options: {
      type: Array,
      required: true
    },
  }
};
</script>
