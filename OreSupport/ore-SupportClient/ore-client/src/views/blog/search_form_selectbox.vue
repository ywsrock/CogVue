<template>
  <div class="col-sm-12 col-md-6">
    <div class="form-group" style="display: flex;">
      <p class="search-form-title"><span style="margin: 0 auto;">{{ title }}</span></p>
      <select class="form-control search-form-select" :title="title">
        <template v-for="option in options">
          <option :key="option">{{ option }}</option>
        </template>
      </select>
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
  },

};
</script>
